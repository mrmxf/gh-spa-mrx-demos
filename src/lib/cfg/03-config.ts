/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/inc/defs';

export const cfg: MrxDemoCfg = {
  demoId: 3,
  title: "Dawn Chorus",
  description: "Immersive Audio with MetaRex & Dolby",
  demoUrl: "demo03",
  imageUrl: "logo/dawn-chorus-small.png",
  altText: "03-dawn-chorus",
  body: "Add MetaRex to precision audio field recordings for a unique Dolby\nAtmos nature experience.\n",
  demoSummary: `
### Dawn Chorus

... is a community project based in Hammersmith UK that records birdsong with
multiple data loggers and then uses **MetaRex** metadata processing to create
an immersive audio experience using Dolby Atmos. You can enjoy the audio from
individual birds using headphones or speakers. Project is starting in **2024**
with a final performance of the audio in late **2025**.`,
  flowPanels: [{ img: "demo03/flow03-1.png" }],
  exploreMd: `
### GPS conversions

There are many representations of GPS data. The W3c has a representation for
use in browser APIs. GPS capture devices store the data in various_optimized_
formats for use in hardware, interchange with logging software and other
applications.

**MetaRex** can be set up with a list of GPS conversions services to ensure you
always have the right one available.`,
  sponsorIds: [
    "metarex",
    "modula-media",
    "metarex-art"
  ]
}