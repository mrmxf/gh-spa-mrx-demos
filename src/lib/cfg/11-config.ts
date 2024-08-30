/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg = {
  demoId: 11,
  title: "Identity",
  description: "Who's face is it anyway?",
  demoUrl: "demo11",
  imageUrl: "logo/hand-logo.svg",
  altText: "11-hand-identity",
  body: "Search the HAND database and control the formats that you need for your\nworkflow MetRex.\n",
  demoSummary: `
### Key points:

* HAND introduction
* extract HAND ID from clips & look up in database
* Web Service (metarex enabled) to transform formats
* Web Service (metarex enabled) to synthesize svg ok/err icons
* Dashboard mockup to show status`,
  exploreMd: `
### HAND ... Coming Soon

This online-only demo will query the HandIdentity online database of Human and
Digital talent. Rexy is in there as an original character and you can see how
she can be disambiguated from other Dino-Talent.`,
  flowPanels: [{ img: "logo/hand-logo.svg" }],
  sponsorIds: [
    "metarex"
  ]
}