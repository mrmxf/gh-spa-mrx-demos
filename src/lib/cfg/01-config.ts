/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg = {
  demoId: 1,
  title: "LPX Cloud Ingest",
  description: "Live Production Exchange ingest with Jet",
  demoUrl: "demo01",
  imageUrl: "logo/signiant-logo.png",
  altText: "01-signiant",
  body: "Low / no-code metadata integration with MetRex. Find,\nparse and trust incoming data.\n",
  demoSummary: `
#### Concept

**Signiant Jet** can be triggered to capture live events by connecting to an
Arqiva **Live Picture Exchage** Directory ([LPX]). An event is selected and an
automatic ETL (**E**xtract, **T**ransform & **L**oad) from **MetaRex** provides
native metadata to Jet:

* show descriptive & QC text in the Jet UI for display
* synthesize a live graphic / icon
* import event metadata into Snowflake
* embed the metadata into the essence for downstream propagation
* Metarex hosted web services:  Validates documents, check QC status, synthesize icons etc.

[LPX]:   https://app.swaggerhub.com/apis/Arqiva/lpx-api/3.0\n`,
  flowPanels: [{ img: "demo01/flow01-1.png" },],
  exploreMd: `
### Self Describing Metadata

When you select a clip from the rundown, the **Metarex** register entry for
that clip will appear in this pane, showing the different metadata types that
could be embedded with MetaRex.`,
  sponsorIds: [
    "signiant",
    "arqiva",
    "metarex"
  ]
}