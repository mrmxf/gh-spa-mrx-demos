/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/inc/defs';

export const cfg: MrxDemoCfg = {
  demoId: 4,
  title: "AI segmentation",
  description: "Hyper-personalization with Metadata",
  demoUrl: "demo04",
  imageUrl: "logo/codemill-logo.svg",
  altText: "04-demo-ai",
  body: "Auto-normalizing AI segmentation metadata for different MAM and DAM\nsystems with MetRex.\n",
  demoSummary: `
### Hyper personalization:

* Auto Normalization of AI metadata\n* Auto merge with human metadata\n* Auto export of control & descriptive metadata\n`,
  flowPanels: [{ img: "demo04/flow04-1.png" }],
  exploreMd: `
### Responsive Narrative Factory

Winner of the **_best_** IBC 2023 Accelerator project.

Multiple AI data sets and a solitary human data set were normalized using a
MetaRex workflow that allowed a single code base to transform multiple
different source data types into a unified database format.

This database format drove the segmentation and playback as shown in demo 12.`,
  sponsorIds: [
    "metarex",
    "amber",
    "simi",
    "graymeta",
    "codemill",
    "bbc",
    "infuse"
  ]
}