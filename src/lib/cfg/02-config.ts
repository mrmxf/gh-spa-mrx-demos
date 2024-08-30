/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg =
{
  demoId: 2,
  title: "MetRex",
  description: "How MetaRex works",
  demoUrl: "demo02",
  imageUrl: "logo/mrx-logo.svg",
  altText: "02-metarex",
  body: "MetRex allows self describing metadata to be used with low or no code. The code is all free to use.",
  demoSummary: `
### Key Points to be covered when animation's ready:

* Why is Metarex useful?
* How does metarex work?
* What's ETL?
* What's the register?
* How to help`,
  exploreMd: "### MRX containerisation \n\n The MetaRex label works in a similar way to fedex, where each metadata package comes with a label. \n\n This label then describes the format of the metadata, allowing you to handle it even if this is completely new metadata",
  flowPanels: [{img:"https://metarex.media/img/mrx-flow.png"}],
  sponsorIds: [
    "metarex",
    "mrmxf",
    "amber",
    "simi",
    "metarex-art"
  ]
}