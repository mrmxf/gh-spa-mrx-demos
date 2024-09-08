/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/inc/defs';

export const cfg: MrxDemoCfg = {
  demoId: 5,
  title: "IMF QC",
  description: "Editorial control with auto-QC.",
  demoUrl: "demo05",
  imageUrl: "logo/imfug-logo.svg",
  altText: "05-imf-qc",
  body: "Auto validation of QC reports using MetRex register & services.",
  demoSummary: `
### "It's creative intent!" _screamed the editor_ "It's meant to be black!"

It can be hard to put auto-QC in a process when you handle diverse genres and
multiple programme vendors. Metarex helps systematically reduce the costs of
QC rejection while leveraging the latest work on QC flows from the
IMG User Group.!

1. create definitions for the reports from the QC vendors
2. Register services to Extract Transform Load results by applying business rules to the raw data
3. Detect and apply manual overrides to multi-stage QC workflows
4. Automagically create pictorial dashboards`,
  exploreMd: `
### Metadata Visualisation

Each quality control company has their own data format and different media
tests, with it not always being clear what's a pass or a fail.

**Metarex** can be set up with QC to image services to make the metadata
understandable at a glance.`,
  flowPanels: [{ img: "demo05/flow05-1.png" }],
  sponsorIds: [
    "metarex-art",
    "venera",
    "imfug",
    "venera",
    "metarex",
    "venera",
    "smpte",
    "venera"
  ]
}