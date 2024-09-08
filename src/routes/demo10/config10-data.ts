/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo10 config data
 */
import { MrxExploreEnum, type MrxMediaSource, type MrxRegisterCache, type MrxServiceData } from '$lib/inc/defs';

import njs from '$lib/reg/MRX.123.456.789.njs/register.json';
import nml from '$lib/reg/MRX.123.456.789.nml/register.json';

export const thisId = 10

export const regCache: MrxRegisterCache = [
  { mrxId: "MRX.123.456.789.njs", reg: njs },
  { mrxId: "MRX.123.456.789.nml", reg: nml },
]

const serviceData:MrxServiceData[] = [
  { type: MrxExploreEnum.Json, id: "SIPA_image_2", reqUrl: "demo01/SIPA_image_2.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "ap_audio", reqUrl: "demo01/ap_audio.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "ap_video", reqUrl: "demo01/ap_audio.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "businesswirenewsml20130605006126", reqUrl: "demo01/businesswire-newsml-20130605006126.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "businesswirenewsml20130731006140", reqUrl: "demo01/businesswire-newsml-20130731006140.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "dpa_text", reqUrl: "demo01/dpa_text.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "imageEncodedRights", reqUrl: "demo01/imageEncodedRights.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "imageLinkedRights", reqUrl: "demo01/imageLinkedRights.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "newsmlout", reqUrl: "demo01/newsmlout.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "ninjsExSimpleText_2", reqUrl: "demo01/ninjsExSimpleText_2.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "ntb_textntb_text", reqUrl: "demo01/ntb_text.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
  { type: MrxExploreEnum.Json, id: "tt_text_image_2", reqUrl: "demo01/tt_text_image_2.json", service: "toNewsML", vis: MrxExploreEnum.Xml },
]

export const sources: MrxMediaSource[] = [
  {
    id: "beach",
    mrxId: "MRX.123.456.789.njs",
    name: "beach.mxf.json",
    clip: "Rexy Beach",
    srcUrl: "rc/mrx1-beach.mp4",
    summary: "Rexy on the Beach",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: njs,
    resReg: njs,
    serviceData: serviceData,
  }, {
    id: "fire",
    mrxId: "MRX.123.456.789.njs",
    name: "beach.mxf.json",
    clip: "Rexy Fire",
    srcUrl: "rc/mrx2-fire.mp4",
    summary: "Rexy Campfire with Egg",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: nml,
    resReg: njs,
    serviceData: serviceData,


  }, {
    id: "roar",
    mrxId: "MRX.123.456.789.njs",
    name: "beach.mxf.json",
    clip: "Rexy Roar",
    srcUrl: "rc/mrx3-roar.mp4",
    summary: "Rexy Roaring",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: njs,
    resReg: njs,
    serviceData: serviceData,

  }, {
    id: "fish",
    mrxId: "MRX.123.456.789.njs",
    name: "beach.mxf.json",
    clip: "Rexy Fish",
    srcUrl: "rc/mrx4-fish.mp4",
    summary: "Rexy Fishing",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: nml,
    resReg: njs,
    serviceData: serviceData,

  }]
