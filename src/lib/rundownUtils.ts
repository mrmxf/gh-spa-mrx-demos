/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * Functions to help with managing rundowns
 */

import { nilEvent, type MrxEvent } from '$lib/mrx-demo-defs';
import { timeOfDay } from '$lib/mrx-demo-stores';

let timeNow: Date;
timeOfDay.subscribe((v) => timeNow = v)

let eventList: MrxEvent[];
const maxListLength = 5
let eventDone: MrxEvent;
let seenNowEvent: boolean;
let seenNextEvent: boolean;


/** add an event to the list and set metadata
 *
 */
const addEventToList = (e: MrxEvent) => {
  let color;
  switch (e.status) {
    case 'done': color = 'grey'; break;
    case 'active': color = 'green'; break;
    case 'next': color = 'yellow'; break;
    default: color = 'grey'
  }

  eventList.push({
    timeStr: e.date ? e.date.toISOString().slice(11, 16) : "no start time",
    headline: e.headline,
    status: e.status,
    srcIndex: e.srcIndex,
    durationSecs: e.durationSecs,
    color: color,
    date: e.date,
  });
};
/**
 * check an event for now/next status
 * assume: every event occurs at the top of the minute
 * assume: we render every minute
 */
export const addEventIfCurrent = (e: MrxEvent) => {
  const nowSeconds = Math.floor(timeNow.getTime() / 1000)
  const startSeconds = e.date ? Math.floor(e.date.getTime() / 1000) : 0
  const endSeconds = startSeconds + e.durationSecs


  // don't do work if the event list is the maximum length
  if (eventList.length >= maxListLength) return

  // if event was in the past - it's done
  if (endSeconds <= nowSeconds) {
    eventDone = e;
    return
  }

  // if the event is in progress then it's active
  if ((nowSeconds >= startSeconds) && (nowSeconds < endSeconds)) {
    //if we haven't seen an active event the log the done event
    if (!seenNowEvent) {
      seenNowEvent = true
      eventDone.status = "done"
      //add the most recently done event
      addEventToList(eventDone)
    }
    e.status = "active"
    addEventToList(e)
  } else {
    if (!seenNextEvent) {
      //the first future event is "next"
      seenNextEvent = true
      e.status = "next"
      addEventToList(e)
    } else {
      //add remaining future events
      e.status = "future"
      addEventToList(e)
    }
  }

}

/**
 * Add demo events to the eventlist. Assume the rundown is repeated every
 * day i.e. if we fall off today, restart tomorrow.
 */
export const refreshEventList = (rundown: MrxEvent[]) => {
  const timeNext = new Date(timeNow);
  timeNext.setSeconds(0);
  timeNext.setMinutes(timeNext.getMinutes() + 1);
  //reset the eventList
  seenNowEvent = false
  seenNextEvent = false
  eventDone = nilEvent
  eventList = []
  //go through the event list in sort order
  rundown.forEach(e => {
    e.date = new Date(timeNext)
    e.date.setHours(Number(e.timeStr.slice(0, 2))) // set hours from string
    e.date.setMinutes(Number(e.timeStr.slice(3))) // set minutes from string
    e.status = "none"
    addEventIfCurrent(e)
  });
  return eventList;
};