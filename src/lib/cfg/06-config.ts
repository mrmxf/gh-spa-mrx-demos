/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg =
{
  demoId: 6,
  title: "Virtual production",
  description: "Manage OSVP networked data",
  demoUrl: "demo06",
  imageUrl: "logo/smpte-logo.svg",
  altText: "06-smpte-ris-osvp",
  body: "Saving time and money with the common MetRex container.\n",
  demoSummary: `
**The problem**: Every shoot is a _special case_. Any slight change means
more rigging and engineering. **3** different lens data types, **2** different
network types, **4** different pieces of software with different
requirements, **Zero** standards to cover everything.

**MetaRex** _fixes the network_: A single common container for putting any
metadata on or off any network. _Less setup time_.

**MetaRex** _fixes the data types_: Every data format describes itself.
Simple Web Services **Extract** **Load** & **Transform** data for each data
type.

**MetaRex** _is secure_: The register for discovering data types is
hierarchical. No data leaves the building unless you allow it.

**MetaRex** _helps ETL_: When data describes itself. Creating an automatic ETL
for simple use cases can be done without code.`,
  exploreMd: `
### Self Describing Metadata

When you select a clip from the navigation pane, the **Metarex** register entry
for that clip will appear in this pane. We have a variety of production
metadata types embedded in the clips that can be shown.

Coming in q3/q4 2024 will be more examples targetted at the On Set Virtual
Production Community initiatives. If this interests you, then please contact us.`,
  flowPanels: [{ img: "logo/smpte-logo.svg" }],
  sponsorIds: [
    "metarex"
  ]
}