/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg = {
  demoId: 9,
  title: "No More Proxies",
  description: "True multi-resolution content-at-rest workflows.",
  demoUrl: "demo09",
  imageUrl: "logo/v-nova-logo.png",
  altText: "09-no-proxy",
  body: "Smart transform of metadata and content for editing and visualization\nwith MetRex.\n",
  demoSummary: `
### One file in the cloud to rule them all

* Store compressed, lossless content at rest at full resolution e.g. 8k
* Pull whatever resolution you need UHD, HD, SD, thumbnail
* Cloud Cache & CDN cache friendly
* **Metarex** can handle bitrate selection & m3U conversion.`,
  exploreMd: `
### Multi Resolution Workflows

Multiple video resolutions slowing down your remote workflows?

With V-Nova, you pull the resolutions that you need from the content at rest
in the cloud. Metarex lets you abstract the bitrates from the video player
giving you control over price and bandwidth.

A bitstream analyser quickly parses a slice of the MXF file and creates a
simple JSON giving us the average bits/frame of each echelon.
Click a clip to see.`,
  flowPanels: [{
    mnu: "Img Sources",
    md: `
### AI feeds on images

* You Store your compressed, lossless content at rest at full resolution e.g. 8k
* AI only needs less than \`800\` x \`600\`px to detect objects
* How do you balance video CPU cost, bandwidth & AI costs?`,
    img: "demo09/Slide3.PNG"
  },
  {
    mnu: "Proxies",
    md: `
### AI feeds on proxies

* Traditionally we build a proxy engine
* We need to manage the engine
* We need to manage the extra assets
* We (should) need to track the proxies against AI training outcomes
* We need extra cloud resources to make, move, manage, store the proxies
* How do you balance video CPU cost, bandwidth & AI costs?`,
    img: "demo09/Slide4.PNG"
  },
  {
    mnu: "VC-6", md: `
### AI snacks on VC-6

* VC-6 is not like other codecs - it's truly hierarchical
* Store the source
* Read the resolution you need
* Nothing else to manage
* No extra cost, no extra resources `,
    img: "demo09/Slide5.PNG"
  },
  {
    mnu: "MetaRex",
    md: `
### AI snacks enhanced by MetaRex

* MetaRex describes & publishes the fetch API
* No code / low code workflow engines can get the resolution they need
* Nothing else to manage
* No extra cost, no extra resources `,
    img: "demo09/Slide6.PNG"
  },
  {
    mnu: "AI Detect",
    md: `
### AI Detect workflows

* VC-6 reduces your operational & ongoing costs of AI detection
* MetaRex reduces your onboarding & customer acquisition costs`,
  img: "demo09/Slide7.PNG"
  },
  {
    mnu: "AI Match",
    md: `
### AI Recognition workflows

* VC-6 has a unique region-of-interest decode mechanism
* Reduce operational costs for high-definition recognition tasks
* MetaRex reduces the onboarding & API implementation costs`,
  img: "demo09/Slide8.PNG"
  }],
  sponsorIds: [
    "v-nova",
    "metarex",
    "v-nova",
    "amber",
    "v-nova",
    "simi",
    "smpte"
  ]
}