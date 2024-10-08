/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
   *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * cores for the nab 2024 app
 */
import { get, readable, writable, derived, type Writable, type Readable } from 'svelte/store';
import { type MrxSelectedMediaSource, type MrxReqRes, type MrxEvent, type MrxExploreTab, MrxMode } from '$lib/inc/defs'
import { nilSource } from '$lib/inc/defs'
import cfgSource from '$lib/cfg/app-config'
import sponsorSource from '$lib/cfg/sponsors-config'

// --- DISPLAY MODES  ---------------------------------------------------------
export const pageW = writable(0);
export const pageH = writable(0);
export const pageAR: Readable<number> = derived(pageW, $w => $w/get(pageH) )
//display in mobile mode when the width is less than 800 pixels
//used to switch between desktop and mobile layouts (fomantic breaks at 768px)
export const MOBILE: Readable<boolean> = derived(pageW, $w => ($w<800) )

// mode for displaying the content
export const MODE = writable(MrxMode.FlowView)
// panel displayed in the pane for a mode for displaying the content
export const PANEL = writable(0)
// sponsor index to coordinate across components
export const SPIDX = writable(0)

// the most recent source that was clicked in the navigation panel
export const source: Writable<MrxSelectedMediaSource> = writable(nilSource);

// the (short) list of visible events in a rundown
export const rundownEvents: Writable<MrxEvent[]> = writable([])

// the source that the Control pane decides is the one to be viewed
export const rundownSource: Writable<MrxSelectedMediaSource> = writable(nilSource)

// the tabs that are displayed in the Explore pane
export const exploreTabs: Writable<MrxExploreTab[]> = writable([])
// 1 based active Tab e.g. last tab is index exploreTabs.length. 0 = no== tabs
export const activeExploreTabNumber: Writable<number> = writable(0)

//remember the req/res pairs produced during a demo
const nilReqRes: MrxReqRes[] = []
export const reqRes = writable(nilReqRes)

// time of day for use in real time / rundown demos
export const timeOfDay = writable(new Date())

// the demo configuration data
export const cfgData = readable(cfgSource)

// environment specific configs for dev / production
import { dev } from '$app/environment';
const envSource = (dev) ? cfgSource.environment.development : cfgSource.environment.production
export const cfgEnv = readable(envSource)

// the sponsor data
export const sponsors = readable(sponsorSource)

// debug mode
export const DBG = writable(false)
