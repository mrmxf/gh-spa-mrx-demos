import type { MrxMediaSource,MrxRegisterCache } from '$lib/mrx-demo-defs';

import def from '$lib/reg/MRX.123.456.789.def/register.json';

export const thisId = 9

export const regCache: MrxRegisterCache = [
  { mrxId: "MRX.123.456.789.def", reg: def },
]

export const loqLadderFire=[{
  "levelOfQuality": 0,
  "title":"8k UHD",
  "width": 7680,
  "Height": 4320,
  "fileSizeBytes": 895795200,
  "fileName": "7680x4320_yuv420p.vc6"
},{
  "levelOfQuality": 1,
  "title":"4k UHD",
  "width": 3840,
  "Height": 2160,
  "fileSizeBytes": 449198101,
  "fileName": "3840x2160_yuv420p.yuv.loq1"
},{
  "levelOfQuality": 2,
  "title":"1080p HD",
  "width": 1920,
  "Height": 1080,
  "fileSizeBytes": 223948800,
  "fileName": "1920x1080_yuv420p.yuv.loq2"
},{
  "levelOfQuality": 3,
  "title":"960p SD",
  "width": 960,
  "Height": 540,
  "fileSizeBytes": 55987200,
  "fileName": "960x540_yuv420p.yuv.loq3"
},{
  "levelOfQuality": 4,
  "title":"480p thumb",
  "width": 480,
  "Height": 270,
  "fileSizeBytes": 13996800,
  "fileName": "480x270_yuv420p.yuv.loq4"
}]

export const sources: MrxMediaSource[] = [
  {
    id: "beach",
    mrxId: "MRX.123.456.789.def",
    name: "beach.mxf.json",
    clip: "Rexy Beach",
    srcUrl: "rc/mrx1-beach.mp4",
    summary: "Rexy on the Beach",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: def,
    resReg: def,

}, {
    id: "fire",
    mrxId: "MRX.123.456.789.def",
    name: "fire.mxf.json",
    clip: "Rexy Fire",
    srcUrl: "rc/mrx2-fire.mp4",
    summary: "Rexy Campfire with Egg",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: def,
    resReg: def,

  }, {
    id: "roar",
    mrxId: "MRX.123.456.789.def",
    name: "roar.mxf.json",
    clip: "Rexy Roar",
    srcUrl: "rc/mrx3-roar.mp4",
    summary: "Rexy Roaring",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: def,
    resReg: def,

  }, {
    id: "fish",
    mrxId: "MRX.123.456.789.def",
    name: "fish.mxf.json",
    clip: "Rexy Fish",
    srcUrl: "rc/mrx4-fish.mp4",
    summary: "Rexy Fishing",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: def,
    resReg: def,
  }]
