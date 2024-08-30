/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxDemoCfg } from '$lib/mrx-demo-defs';

export const cfg: MrxDemoCfg = {
  demoId: 12,
  title: "Responsive Narrative Factory",
  description: "IBC Award winning RNF powered by Metarex",
  demoUrl: "demo12",
  imageUrl: "logo/infuse-video-logo.png",
  altText: "12-rnf",
  body: "Hyper personalization - watch Big Buck Bunny with no nudity _**and no\nBunny!**_.\n",
  demoSummary: `
### IBC Accelerator of the year 2023

The award winning MetaRex processing system showed how we could integrate
Human, AI and machine metadata into an Infuse Video streaming solution
to create Hyper-Personalized content that's easy to make and cheap to
deploy using existing CDN technologies. Faster, Greener, Better.`,
  exploreMd: `
### Responsive Narrative Factory

Winner of the **_best_** IBC 2023 Accelerator project.

Multiple AI data sets and a solitary human data set were normalized using a
MetaRex workflow that allowed a single code base to transform multiple
different source data types into a unified database format.

The database was then used to create several outputs:

* Metadata for the CDN playback engine by Infuse Video
* An FFMPEG cut list to load into the CDN
* * custom metadata for the User Interface
* Online demo _might_ still available at our partner's site
[https://ibcdemo.cuvo.ai](https://ibcdemo.cuvo.ai). If it's not, then keep
looking for our work with nxtedition where it will be even better!`,
  flowPanels: [{ img: "demo12/flow12-1.png" }],
  sponsorIds: [
    "metarex"
  ]
}