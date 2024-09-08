/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo02 config data
 */
import type { MrxMediaSource, MrxRegisterCache } from '$lib/inc/defs';

import rnc from '$lib/reg/MRX.123.456.789.rnc/register.json';
import rnj from '$lib/reg/MRX.123.456.789.rnj/register.json';

export const thisId = 2

export const regCache: MrxRegisterCache = [
  { mrxId: "MRX.123.456.789.rnc", reg: rnc },
  { mrxId: "MRX.123.456.789.rnj", reg: rnj },
]

export const sources: MrxMediaSource[] = [
  {
    id: "spring",
    mrxId: "MRX.123.456.789.rnc",
    name: "springwatch.csv",
    clip: "BBC Springwatch",
    srcUrl: "demo04/rnf-poster-springwatch.png",
    summary: "Springwatch human segmentation metadata",
  }, {
    id: "Lost",
    mrxId: "MRX.123.456.789.rnc",
    name: "lostpast.csv",
    clip: "Raiders of the Lost Past",
    srcUrl: "demo04/rnf-poster-raidersofthelostpast.png",
    summary: "Springwatch human segmentation metadata",
  }
  // , {
  //   id: "Cosmo",
  //   mrxId: "MRX.123.456.789.rnj",
  //   name: "cosmos-laundromat.json",
  //   clip: "Cosmos Laundromat",
  //   srcUrl: "demo04/rnf-poster-cosmos.png",
  //   summary: "Springwatch human segmentation metadata",
  // }
]
