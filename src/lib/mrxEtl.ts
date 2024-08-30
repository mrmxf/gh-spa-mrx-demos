/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * make a call to the MrxAppServer
 */

import { DBG, reqRes, exploreTabs, cfgEnv } from '$lib/mrx-demo-stores';
import { get } from 'svelte/store';
import type { MrxServiceData, MrxMediaSource, MrxReqRes, MrxPayload, MrxReqResExplore, MrxRegisterEntry } from '$lib/mrx-demo-defs';
import { MrxExploreEnum, MrxExploreEnumNames } from '$lib/mrx-demo-defs';
import { base } from '$app/paths';

var localDBG = get(DBG)

const demoSvcUrl = get(cfgEnv).path.mrxServiceUrl

async function fillPayload(type: MrxExploreEnum, payload: MrxPayload, res: Response) {
  payload.type = type
  payload.stringData = null
  payload.blobData = null
  switch (type) {
    case MrxExploreEnum.Csv:
    case MrxExploreEnum.Gpx:
    case MrxExploreEnum.Text:
    case MrxExploreEnum.Xml:
    case MrxExploreEnum.Yaml:
      payload.stringData = await res.text()
      payload.size = payload.stringData.length;
      return payload.stringData;
    case MrxExploreEnum.Json:
      payload.stringData = await res.json();
      payload.stringData = JSON.stringify(payload.stringData, undefined, 2);
      payload.size = payload.stringData.length;
      return payload.stringData;
    case MrxExploreEnum.Image:
    case MrxExploreEnum.Jpeg:
    case MrxExploreEnum.Png:
    case MrxExploreEnum.Webp:
      if (localDBG) console.log('Processing request image');
      payload.blobData = await res.blob();
      payload.size = payload.blobData.size;
      payload.bUrl = URL.createObjectURL(payload.blobData);
      return payload.blobData;
    default:
      if (localDBG) console.log('Processing request blob');
      payload.blobData = await res.blob();
      payload.size = payload.blobData.size;
      return payload.blobData;
  }
}
function header(type: MrxExploreEnum) {
  switch (type) {
    case MrxExploreEnum.Csv: return { 'Content-Type': 'text/csv; charset=UTF-8' }
    case MrxExploreEnum.Gpx: return { 'Content-Type': 'application/xml; charset=UTF-8' }
    case MrxExploreEnum.Image: return { 'Content-Type': 'image' }
    case MrxExploreEnum.Jpeg: return { 'Content-Type': 'image/jpeg; charset=UTF-8' }
    case MrxExploreEnum.Json: return { 'Content-Type': 'application/json; charset=UTF-8' }
    case MrxExploreEnum.WavAudio: return { 'Content-Type': 'application/octet-stream' }
    case MrxExploreEnum.Xml: return { 'Content-Type': 'application/xml; charset=UTF-8' }
    default: return { 'Content-Type': 'text/plain; charset=UTF-8' }
  }
}

/** preform a Service call from with an MrxMediaSource and a MrxServiceData
 * @returns {number} the index of the reqres array with the data
 */
export async function mrxServiceDemo(source: MrxMediaSource, service: MrxServiceData) {
  const newRR: MrxReqRes = {
    req: {
      isReq: true,
      type: service.type,
      title: `req(${MrxExploreEnumNames[service.type]}): ${service.id}`,
      stringData: null,
      blobData: null,
      size: 0
    },
    res: {
      isReq: false,
      type: service.vis,
      title: `res(${MrxExploreEnumNames[service.vis]}): ${service.id}`,
      stringData: null,
      blobData: null,
      size: 0
    }
  };

  // fetch the payload for the request from the server if needed - e.g. a wav file
  if (service.reqUrl) {
    await fetch(`${base}/${service.reqUrl}`, { method: 'GET' })
      .then(async (res) => await fillPayload(service.type, newRR.req, res));
  }

  // create the request for the ETL service
  let mapping = ""
  const corsMode: RequestMode = "cors";
  if (service.mapping) mapping = "&mapping=true"
  const reqUrl = `${demoSvcUrl}?inputMRXID=${source.mrxId}&outputMRXID=${service.service}${mapping}`;
  const param: RequestInit = {
    method: 'POST',
    mode: corsMode,
    headers: new Headers(header(newRR.req.type)),
    redirect: 'follow',
    body: (newRR.req.stringData ? newRR.req.stringData : newRR.req.blobData)
  };

  if (localDBG) console.log(service.reqUrl);

  const response = await fetch(reqUrl, param)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      if (localDBG) console.log(` generic reg fetch -- OK`);
      //fill in the result payload
      return await fillPayload(newRR.res.type, newRR.res, res);
    })
    .catch((error) => {
      if (localDBG) console.log(`Could not fetch ${reqUrl}: ${error}`);
    });
  // update the store with the new results of the ETL call
  reqRes.set([...get(reqRes), newRR])
  console.log(`ETL OK: res(${newRR.req.type}) res(${newRR.res.type})`)
  return (get(reqRes).length - 1);
}


export function mrxServiceExplore(show: MrxReqResExplore) {
  //validate the index value
  const rrArray = get(reqRes)
  if (show.index < 0 || show.index >= rrArray.length) return
  const rr = rrArray[show.index]
  const tabs = get(exploreTabs)
  if (show.req) {
    tabs.push({
      isReq: true,
      title: rr.req.title,
      type: rr.req.type,
      size: rr.req.size,
      stringData: rr.req.stringData,
      blobData: rr.req.blobData,
      blobUrl: rr.req.bUrl,
    })
  }
  if (show.res) {
    tabs.push({
      isRes: true,
      title: rr.res.title,
      type: rr.res.type,
      size: rr.res.size,
      stringData: rr.res.stringData,
      blobData: rr.res.blobData,
      blobUrl: rr.res.bUrl,
    })
  }
}

export function mrxRegisterExplore(reg: MrxRegisterEntry, prefix: string) {
  const tabs = get(exploreTabs)
  let p = ''
  if (prefix) p = `${prefix} `
  const jsonStr = JSON.stringify(reg, undefined, 2)

  //trigger a refresh by calling the set method
  exploreTabs.set([...tabs, {
    title: p + reg.name,
    type: MrxExploreEnum.MrxRegJson,
    size: jsonStr.length,
    stringData: jsonStr,
    blobData: null,
  }])
}