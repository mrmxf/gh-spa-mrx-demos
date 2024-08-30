/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg = {
  demoId: 7,
  title: "Production Monitoring",
  description: "No Code visualization <br> _(TAG @ W.1655)_",
  demoUrl: "demo07",
  imageUrl: "logo/tagvs-logo.png",
  altText: "07-tagvs-monitoring",
  body: "Easy customization & visualization of Metadata with low or no code.\n",
  demoSummary: `
### Coming Soon:

* This online only demo shows how MetaRex simplifies the aggregation and
display of different metadata types. This might be battery levels on an Umpires
Mic, GPS from a drone or HeartRate from an athlete. Check the
[metarex.media website][1] in July 2024 to see it working with live data.

[1]: https://metarex.media"`,
  exploreMd: `
### Self Visualizing Metadata

See how you can utilise Metarex services to visualise data with no time spent
on coding.

Happiness is just an API call away.`,
  flowPanels: [{ img: "logo/tagvs-logo.png" }],
  sponsorIds: [
    "metarex"
  ]
}