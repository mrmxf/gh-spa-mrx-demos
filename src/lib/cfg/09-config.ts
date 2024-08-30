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
    md: `
### One file in the cloud to rule them all

* Store compressed, lossless content at rest at full resolution e.g. 8k
* Pull whatever resolution you need UHD, HD, SD, thumbnail
* Cloud Cache & CDN cache friendly
* **Metarex** can handle bitrate selection & m3U conversion.`},
  { img: "demo09/Slide3.PNG" }, { img: "demo09/Slide3.PNG" }, { img: "demo09/Slide4.PNG" },
  { img: "demo09/Slide5.PNG" }, { img: "demo09/Slide6.PNG" }, { img: "demo09/Slide7.PNG" }],
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