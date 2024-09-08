/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/inc/defs';

export const cfg: MrxDemoCfg =
{
  demoId: 8,
  title: "Content Authenticity",
  description: "Auto-processing Content Authenticity metadata",
  demoUrl: "demo08",
  imageUrl: "logo/metaglue-logo.png",
  altText: "08-c2pc-content-provenance",
  body: "Extracting C2PA and displaying results.\n",
  demoSummary: `
### Why abstract Content Authenticity processing?

* New authenticity standards like C2PA require effort to create & process.
* Specialist processing effort takes time and multiple teams to integrate
* Metarex simplifies integration, conversion & transportation without affecting
integrity or data`,
  exploreMd: `
### Self Describing Authentication

There are several Content Authenticity initiatives happening in parallel around
the world. MetaRex helps harmonize the data format to interface with MAM,
graphics and Production Systems. A C2PA header can easily be carried along side
or inside your media with Metarex.

**Metarex** can allow you to group and transport authentic metadata with media`,
  flowPanels: [{ img: "demo08/flow08-1.png" }],
  sponsorIds: [
    "metarex",
    "metaglue"
  ]
}