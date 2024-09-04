/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * All the types used in the Mrx Demos
 */

/* ------------------------------------------------------------------------- */
/* --- Types that relate to the demo as an entity -------------------------- */

export enum MrxMode {
  DemoFlow,
  DemoTryIt
}

/** type information for the imported JSON */
export type MrxCfgData = {
  environment: MxfCfgEnvironment,
  appearance: MrxCfgAppearance,
  home: MrxCfgHome,
  demo: MrxDemoCfg[]
}

/** the configuration information for a flow explainer  */
export interface MrxDemoFlow {
  mnu: string
  md?: string,
  img?: string
}

/** the configuration information for an individual demo  */
export interface MrxDemoCfg {
  demoId: number;
  title: string
  description: string
  demoUrl: string
  imageUrl: string
  altText: string
  body: string
  demoSummary: string
  flowPanels: MrxDemoFlow[],
  sponsorIds: string[]
  exploreMd?: string
}

/** settings for dev / prod environments */
export type MxfCfgEnvironment = {
  development: {
    name: string
    path: MrxCfgEnvironmentPath
  },
  production: {
    name: string
    path: MrxCfgEnvironmentPath
  }
}
/** settings for dev / prod environments */
export type MrxCfgEnvironmentPath = {
  mrxWebsiteUrl: string
  mrxRegisterUrl: string
  mrxServiceUrl: string
}

/** settings for the appearance of the demos */
export type MrxCfgAppearance = {
  topHeight: string
  midHeight: string
  botHeight: string
  sponsorHeight: string
  sponsorDwellSecs: number
  overviewDwellSecs: number
  navigate: MrxCfgPanelProps
  control: MrxCfgPanelProps
  visualize: MrxCfgPanelProps
  explore: MrxCfgPanelProps
}

/** settings for the appearance of the home page */
export type MrxCfgHome = {
  titleMd: string
}

/** properties for an individual panel */
export type MrxCfgPanelProps = {
  width: string
  color: string
}

/** properties of a demo sponsor when rotating their banner */
export interface MrxSponsor {
  id: string,
  contactUrl?: string
  logo: string
  homeUrl: string
  name: string
  qrdata: string
  tagline?: string
  who?: string
  xtra?: ArrayLike<unknown> | Iterable<unknown>
}

/* ------------------------------------------------------------------------- */
/* --- Types that relate to a media source or source ----------------------- */

/** a media source for a demo */
export interface MrxMediaSource {
  id: string
  mrxId: string
  srcUrl: string
  name?: string
  clip?: string
  summary?: string
  exploreMd?: string
  srcReg?: MrxRegisterEntry
  resReg?: MrxRegisterEntry
  resCache?: ArrayLike<unknown> | Iterable<unknown>
  serviceData?: MrxServiceData[]
  //extra stuff per demo
  xtra?: ArrayLike<unknown> | Iterable<unknown>
}

/** a type for handling a selected demo - may be null / undefined */
export type MrxSelectedMediaSource = null | MrxMediaSource

/** a nil media source for initialization */
export const nilSource: MrxMediaSource = {
  id: "",
  mrxId: "",
  srcUrl: "",
}

/* ------------------------------------------------------------------------- */
/* --- Types that relate to an mrx-reg query ------------------------------- */

export interface MrxRegisterServicePrototype {
  id: string
  name: string
  description: string
  server?: string
  openapi?: string
  in?: string[]
  out?: string[]
  // Keys can be strings, numbers, or symbols.
  // If you know it to be strings only, you can also restrict it to that.
  // For the value you can use any or unknown,
  // with unknown being the more defensive approach.
  [x: string]: unknown;
}

export interface MrxRegisterService {
  // Keys can be strings, numbers, or symbols.
  // If you know it to be strings only, you can also restrict it to that.
  // For the value you can use any or unknown,
  // with unknown being the more defensive approach.
  [x: string]: unknown;
}

export interface MrxRegisterMrxExtension {
  sample?: string | string[]
  schema?: string | string[]
  specification?: string | string[]
  services?: MrxRegisterService[]
}

export enum MrxParamTreatAs {
  Text = "text",
  Binary = "binary",
}

export enum MrxParamTimingIs {
  Clocked = "clocked",
  Embedded = "embedded",
}

/** the return JSON from a registry query */
export interface MrxRegisterEntry {
  metarexId: string
  name: string
  description: string
  mediaType?: string
  registerEntrySemVer?: string
  replaces?: string[]
  mrx?: MrxRegisterMrxExtension
  extra?: object
}

/** a local cache of a registry entry */
export type MrxRegisterEntryCache = {
  mrxId: string
  reg: MrxRegisterEntry
}

/** a local cache of the metarex register */
export type MrxRegisterCache = MrxRegisterEntryCache[]

export type MrxDataCache = object[]

/** the "home" tab for a demo - explaining what the user will see */
export type DemoExploreTab = {
  id: string
  active: string
  title: string
  type: MrxExploreEnum
  data: string | MrxRegisterEntry | object
}

/* ------------------------------------------------------------------------- */
/* --- Types that relate to an mrx-app-svr query --------------------------- */

/** a structure for calling the MrxApp server amd getting a response */
export type MrxServiceData = {
  type: MrxExploreEnum
  id: string
  reqUrl: string
  service: string
  vis: MrxExploreEnum
  mapping?: string | boolean
}

/** the payload & params sent to the MrxAppServer */
export type MrxPayload = {
  isReq: boolean
  title: string
  type: MrxExploreEnum
  stringData: string | null
  blobData: Blob | null
  bUrl?: string
  size: number
}

/** the request/response to/from the MrxAppServer */
export type MrxReqRes = {
  req: MrxPayload
  res: MrxPayload
}

/** should an MrxReqRes result be displayed in the explore pane? */
export type MrxReqResExplore = {
  index: number
  req: boolean
  res: boolean
}
/* ------------------------------------------------------------------------- */
/* --- Types that relate to a timed rundown of events ---------------------- */

/** an event for a rundown */
export type MrxEvent = {
  timeStr: string
  durationSecs: number
  date?: Date
  srcIndex: number
  headline: string
  status?: string
  color?: string
}

/** a nil MrxEvent for initialization */
export const nilEvent: MrxEvent = {
  timeStr: "00:00",
  durationSecs: 60,
  date: new Date("2024-04-14"),
  srcIndex: 0,
  headline: "",
}

/* ------------------------------------------------------------------------- */
/* --- Types that relate to an mrx-reg query ------------------------------- */

export type MrxRegisterId = string

export interface O {
  metarexId: MrxRegisterId
  name: string
  description: string
  mediaType: string
  timingIs?: string
  treatAs?: string
  expires?: string
  mrx?: MrxRegMrxExtension
  extra?: object
}

export interface MrxRegMrxExtension {
  sample?: string | string[]
  schema?: string | string[]
  specification?: string | string[]
  services?: object[]
}


/* ------------------------------------------------------------------------- */
/* --- Types that relate to data shown in the explore pane ----------------- */

export enum MrxExploreEnum {
  Code,
  Csv,
  Gpx,
  Golang,
  Home,
  Image,
  Javascript,
  Jpeg,
  Json,
  Markdown,
  Mp4,
  MrxRegId,
  MrxRegJson,
  Png,
  Python,
  R,
  Rust,
  Sql,
  Text,
  Typescript,
  Unknown,
  WavAudio,
  Webp,
  Xml,
  Yaml,
}

export const MrxExploreEnumNames: string[] = []
MrxExploreEnumNames[MrxExploreEnum.Code] = 'code'
MrxExploreEnumNames[MrxExploreEnum.Csv] = 'csv'
MrxExploreEnumNames[MrxExploreEnum.Gpx] = 'gpx'
MrxExploreEnumNames[MrxExploreEnum.Golang] = 'golang'
MrxExploreEnumNames[MrxExploreEnum.Home] = 'home'
MrxExploreEnumNames[MrxExploreEnum.Image] = 'image'
MrxExploreEnumNames[MrxExploreEnum.Javascript] = 'javascript'
MrxExploreEnumNames[MrxExploreEnum.Jpeg] = 'jpeg'
MrxExploreEnumNames[MrxExploreEnum.Json] = 'json'
MrxExploreEnumNames[MrxExploreEnum.Markdown] = 'markdown'
MrxExploreEnumNames[MrxExploreEnum.Mp4] = 'mp4'
MrxExploreEnumNames[MrxExploreEnum.MrxRegId] = 'mrxRegId'
MrxExploreEnumNames[MrxExploreEnum.MrxRegJson] = 'mrxRegJson'
MrxExploreEnumNames[MrxExploreEnum.Png] = 'png'
MrxExploreEnumNames[MrxExploreEnum.Python] = 'python'
MrxExploreEnumNames[MrxExploreEnum.R] = 'r'
MrxExploreEnumNames[MrxExploreEnum.Rust] = 'rust'
MrxExploreEnumNames[MrxExploreEnum.Sql] = 'sql'
MrxExploreEnumNames[MrxExploreEnum.Text] = 'text'
MrxExploreEnumNames[MrxExploreEnum.Typescript] = 'typescript'
MrxExploreEnumNames[MrxExploreEnum.Unknown] = 'unknown'
MrxExploreEnumNames[MrxExploreEnum.WavAudio] = 'wavAudio'
MrxExploreEnumNames[MrxExploreEnum.Webp] = 'webp'
MrxExploreEnumNames[MrxExploreEnum.Xml] = 'xml'
MrxExploreEnumNames[MrxExploreEnum.Yaml] = 'yaml'

export enum MrxExploreViewers {
  Audio,
  Code,
  Home,
  Image,
  Video,
  Markdown,
}

//for Code types - sometimes you need an alias from specific to general
export const MrxExploreCodeAlias: { [key in MrxExploreEnum]?: MrxExploreEnum } = {
  [MrxExploreEnum.Gpx]: MrxExploreEnum.Xml,
  [MrxExploreEnum.Javascript]: MrxExploreEnum.Typescript,
  [MrxExploreEnum.MrxRegId]: MrxExploreEnum.Text,
  [MrxExploreEnum.MrxRegJson]: MrxExploreEnum.Json,
}

export const MrxExploreView: { [key in MrxExploreEnum]?: MrxExploreViewers } = {
  [MrxExploreEnum.Code]: MrxExploreViewers.Code,
  [MrxExploreEnum.Csv]: MrxExploreViewers.Code,
  [MrxExploreEnum.Gpx]: MrxExploreViewers.Code,
  [MrxExploreEnum.Golang]: MrxExploreViewers.Code,
  [MrxExploreEnum.Home]: MrxExploreViewers.Home,
  [MrxExploreEnum.Image]: MrxExploreViewers.Image,
  [MrxExploreEnum.Jpeg]: MrxExploreViewers.Image,
  [MrxExploreEnum.Json]: MrxExploreViewers.Code,
  [MrxExploreEnum.Markdown]: MrxExploreViewers.Markdown,
  [MrxExploreEnum.Mp4]: MrxExploreViewers.Video,
  [MrxExploreEnum.MrxRegId]: MrxExploreViewers.Code,
  [MrxExploreEnum.MrxRegJson]: MrxExploreViewers.Code,
  [MrxExploreEnum.Png]: MrxExploreViewers.Image,
  [MrxExploreEnum.Python]: MrxExploreViewers.Code,
  [MrxExploreEnum.R]: MrxExploreViewers.Code,
  [MrxExploreEnum.Rust]: MrxExploreViewers.Code,
  [MrxExploreEnum.Sql]: MrxExploreViewers.Code,
  [MrxExploreEnum.Text]: MrxExploreViewers.Code,
  [MrxExploreEnum.WavAudio]: MrxExploreViewers.Audio,
  [MrxExploreEnum.Webp]: MrxExploreViewers.Image,
  [MrxExploreEnum.Xml]: MrxExploreViewers.Code,
  [MrxExploreEnum.Yaml]: MrxExploreViewers.Code,
}

// how Explore shows an icon for types
export const MrxExploreIcon: { [key in MrxExploreEnum]?: string } = {
  [MrxExploreEnum.Gpx]: "blue file code outline",
  [MrxExploreEnum.Golang]: "file code outline",
  [MrxExploreEnum.Home]: "home",
  [MrxExploreEnum.Image]: "image outline",
  [MrxExploreEnum.Jpeg]: "image outline",
  [MrxExploreEnum.Json]: "blue file code outline",
  [MrxExploreEnum.Markdown]: "keyboard outline",
  [MrxExploreEnum.Mp4]: "video outline",
  [MrxExploreEnum.MrxRegId]: "red barcode",
  [MrxExploreEnum.MrxRegJson]: "blue barcode",
  [MrxExploreEnum.Png]: "image outline",
  [MrxExploreEnum.Python]: "file code outline",
  [MrxExploreEnum.R]: "file code outline",
  [MrxExploreEnum.Sql]: "file code outline",
  [MrxExploreEnum.WavAudio]: "audio outline",
  [MrxExploreEnum.Xml]: "file code outline",
  [MrxExploreEnum.Yaml]: "file code outline",
}

//properties of an explore tab - note that type is an enum - respect it!
export type MrxExploreTab = {
  isReq?: boolean
  isRes?: boolean
  title: string
  type: MrxExploreEnum
  icon?: string
  stringData?: string | null
  blobData?: Blob | null
  blobUrl?: string
  size: number
}