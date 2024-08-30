/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg = {
  demoId: 10,
  title: "Live News",
  description: "LPX Versatility with Microservices",
  demoUrl: "demo10",
  imageUrl: "logo/nxtedition-logo.svg",
  altText: "10-nxtEdition-news",
  body: "Lossless normalization of metadata using MetRex for news, avails\nand more.\n",
  demoSummary: `
### Key points:

* NewsML - NinJS - DPP LPXF transforms
* Web Service (metarex core) to validate documents
* Web Service (metarex enabled) to transform formats
* Web Service (metarex enabled) to synthesize svg ok/err icons
* Dashboard mockup to show status"`,
  exploreMd: `
### NinJS to NewsML

Modern news and production platforms like nxtedition have to be very tolerant
about the different news feeds that they accept. With MetaRex, you can define a
single source of metadata conversion truth for an office, a facility, a
business or the world, depending on how you need to manage versions and data
types.`,
  flowPanels: [{ img: "demo10/flow10-1.png" }],
  sponsorIds: [
    "metarex"
  ]
}