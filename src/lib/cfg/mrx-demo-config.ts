/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxCfgData } from '$lib/mrx-demo-defs';
const cfg: MrxCfgData = {
  environment: {
    development: {
      name: "development",
      path: {
        mrxWebsiteUrl: "https://metarex.media/",
        mrxRegisterUrl: "https://metarex.media/reg",
        mrxServiceUrl: "http://localhost:8080/autoelt"
      }
    },
    production: {
      name: "production",
      path: {
        mrxWebsiteUrl: "/",
        mrxRegisterUrl: "https://metarex.media/reg",
        mrxServiceUrl: "https://metarex.media/svc/demo/autoelt"
      }
    }
  },
  appearance: {
    topHeight: "20vh",
    midHeight: "20vh",
    botHeight: "60vh",
    sponsorHeight: "200px;",
    sponsorDwellSecs: 6,
    overviewDwellSecs: 10,
    navigate: {
      width: "two",
      color: "white"
    },
    control: {
      width: "three",
      color: "yellow"
    },
    visualize: {
      width: "six",
      color: "purple"
    },
    explore: {
      width: "five",
      color: "red"
    }
  },
  home: {
    titleMd: `
#### IBC 20024 - come and see us on Sunday at 17:00 14.AI03

Win a cuddly Rexy - [sign up here to do the Treasure Hunt](https://bit.ly/rexy-ibc-2024)
    `
  },
  demo: [
    {
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
      demoImages: [
        "demo01/flow01-1.png",
      ],
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
    },
    {
      demoId: 2,
      title: "MetRex",
      description: "How MetaRex works",
      demoUrl: "demo02",
      imageUrl: "logo/mrx-logo.svg",
      altText: "02-metarex",
      body: "MetRex allows self describing metadata to be used with low or no code. The code is all free to use.",
      demoSummary: `
### Key Points to be covered when animation's ready:

* Why is Metarex useful?
* How does metarex work?
* What's ETL?
* What's the register?
* How to help`,
      exploreMd: "### MRX containerisation \n\n The MetaRex label works in a similar way to fedex, where each metadata package comes with a label. \n\n This label then describes the format of the metadata, allowing you to handle it even if this is completely new metadata",
      demoImages: ["https://metarex.media/img/mrx-flow.png"],
      sponsorIds: [
        "metarex",
        "mrmxf",
        "amber",
        "simi",
        "metarex-art"
      ]
    },
    {
      demoId: 3,
      title: "Dawn Chorus",
      description: "Immersive Audio with MetaRex & Dolby",
      demoUrl: "demo03",
      imageUrl: "logo/dawn-chorus-small.png",
      altText: "03-dawn-chorus",
      body: "Add MetRex to precision audio field recordings for a unique Dolby\nAtmos nature experience.\n",
      demoSummary: `
### Dawn Chorus

... is a community project based in Hammersmith UK that records birdsong with
multiple data loggers and then uses **MetaRex** metadata processing to create
an immersive audio experience using Dolby Atmos. You can enjoy the audio from
individual birds using headphones or speakers. Project is starting in **2024**
with a final performance of the audio in late **2025**.`,
      demoImages: [
        "demo03/flow03-1.png"
      ],
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
    },
    {
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
      demoImages: [
        "demo04/flow04-1.png"
      ],
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
    },
    {
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
      demoImages: [
        "demo05/flow05-1.png"
      ],
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
    },
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
      demoImages: ["logo/smpte-logo.svg"],
      sponsorIds: [
        "metarex"
      ]
    },
    {
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
      demoImages: ["logo/tagvs-logo.png"],
      sponsorIds: [
        "metarex"
      ]
    },
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
      demoImages: [
        "demo08/flow08-1.png"
      ],
      sponsorIds: [
        "metarex",
        "metaglue"
      ]
    },
    {
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
      demoImages: ["demo09/bs501-p01-stree.png", "demo09/d9-vc6-00.jpg", "demo09/d9-vc6-01.jpg", "demo09/d9-vc6-02.jpg", "demo09/d9-vc6-03.jpg", "demo09/d9-vc6-04.jpg"],
      sponsorIds: [
        "v-nova",
        "metarex",
        "v-nova",
        "amber",
        "v-nova",
        "simi",
        "smpte"
      ]
    },
    {
      demoId: 10,
      title: "Live News",
      description: "LPX Versatility with Microservices",
      demoUrl: "demo10",
      imageUrl: "logo/nxtedition-logo.svg",
      altText: "10-nxtEdition-news",
      body: "Lossless normalization of metadata using MetRex for news, avails\nand more.\n",
      demoSummary: `
### Key points:

* NewsML - NinJS - DPP LPXF transforms
* Web Service (metarex core) to validate documents
* Web Service (metarex enabled) to transform formats
* Web Service (metarex enabled) to synthesize svg ok/err icons
* Dashboard mockup to show status"`,
      exploreMd: `
### NinJS to NewsML

Modern news and production platforms like nxtedition have to be very tolerant
about the different news feeds that they accept. With MetaRex, you can define a
single source of metadata conversion truth for an office, a facility, a
business or the world, depending on how you need to manage versions and data
types.`,
      demoImages: [
        "demo10/flow10-1.png"
      ],
      sponsorIds: [
        "metarex"
      ]
    },
    {
      demoId: 11,
      title: "Identity",
      description: "Who's face is it anyway?",
      demoUrl: "demo11",
      imageUrl: "logo/hand-logo.svg",
      altText: "11-hand-identity",
      body: "Search the HAND database and control the formats that you need for your\nworkflow MetRex.\n",
      demoSummary: `
### Key points:

* HAND introduction
* extract HAND ID from clips & look up in database
* Web Service (metarex enabled) to transform formats
* Web Service (metarex enabled) to synthesize svg ok/err icons
* Dashboard mockup to show status`,
      exploreMd: `
### HAND ... Coming Soon

This online-only demo will query the HandIdentity online database of Human and
Digital talent. Rexy is in there as an original character and you can see how
she can be disambiguated from other Dino-Talent.`,
      demoImages: ["logo/hand-logo.svg"],
      sponsorIds: [
        "metarex"
      ]
    },
    {
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
  looking for our wirk with nxtedition where it will be even better!`,
      demoImages: [
        "demo12/flow12-1.png"
      ],
      sponsorIds: [
        "metarex"
      ]
    }
  ]
}

export default cfg