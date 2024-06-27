/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo01 control data for this demo
 */
import type { MrxMediaSource, MrxRegisterCache, } from '$lib/mrx-demo-defs';

import def from '$lib/regcache/MRX.123.456.789.def.json';
import ghi from '$lib/regcache/MRX.123.456.789.ghi.json';
import jkl from '$lib/regcache/MRX.123.456.789.jkl.json';
import reg from '$lib/regcache/MRX.123.456.789.reg.json';

export const thisId = 1

export const regCache: MrxRegisterCache = [
  { mrxId: "MRX.123.456.789.njs", reg: def },
  { mrxId: "MRX.123.456.789.nml", reg: ghi },
]

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
    xtra: [],
  }, {
    id: "fire",
    mrxId: "MRX.123.456.789.ghi",
    name: "beach.mxf.json",
    clip: "Rexy Fire",
    srcUrl: "rc/mrx2-fire.mp4",
    summary: "Rexy Campfire with Egg",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: ghi,
    resReg: ghi,
    xtra: [],
  }, {
    id: "roar",
    mrxId: "MRX.123.456.789.jkl",
    name: "beach.mxf.json",
    clip: "Rexy Roar",
    srcUrl: "rc/mrx3-roar.mp4",
    summary: "Rexy Roaring",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: jkl,
    resReg: jkl,
    xtra: [],
  }, {
    id: "fish",
    mrxId: "MRX.123.456.789.reg",
    name: "beach.mxf.json",
    clip: "Rexy Fish",
    srcUrl: "rc/mrx4-fish.mp4",
    summary: "Rexy Fishing",
    exploreMd: `
Our source JSON data describes the offsets in the VC-6 files (at rest in the
cloud). This data is extracted from the source files, sent as JSON and then
used here to display the graphs when playing the smaller resolutions.
`,
    srcReg: reg,
    resReg: reg,
    xtra: [],
  }]
