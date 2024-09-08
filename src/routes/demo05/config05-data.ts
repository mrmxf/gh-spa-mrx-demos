import { MrxExploreEnum, type MrxMediaSource, type MrxRegisterCache } from '$lib/inc/defs';

import vqc from '$lib/regcache/MRX.123.456.789.vqc.json';

export const thisId = 5

export const regCache: MrxRegisterCache = [
  { mrxId: "MRX.123.456.789.vqc", reg: vqc },
]

export const sources: MrxMediaSource[] = [
  {
    id: "(1)-fail",
    mrxId: "MRX.123.456.789.vqc",
    name: "PulsarReport1Fail.xml",
    clip: "",
    srcUrl: "demo05/ebu-bars.png",
    summary: "",
    exploreMd: `A simple count of issues using a metarex graphical service`,
    srcReg: vqc,
    serviceData: [
      { type: MrxExploreEnum.Xml, id: "report1", reqUrl: "demo05/PulsarReport1Fail.xml", service: "tograph", vis: MrxExploreEnum.Image},
    ]
  },
  {
    id: "(2)-fail",
    mrxId: "MRX.123.456.789.vqc",
    name: "PulsarReport2Fail.xml",
    clip: "",
    srcUrl: "demo05/ebu-bars.png",
    summary: "",
    exploreMd: ``,
    srcReg: vqc,
    serviceData: [{ type: MrxExploreEnum.Xml, id: "report2", reqUrl: "demo05/PulsarReport2Fail.xml", service: "tograph", vis: MrxExploreEnum.Image},]
  },
  {
    id: "(3)-fail",
    mrxId: "MRX.123.456.789.vqc",
    name: "PulsarReport3Fail.xml",
    clip: "",
    srcUrl: "demo05/ebu-bars.png",
    summary: "",
    exploreMd: ``,
    srcReg: vqc,
    serviceData: [{ type: MrxExploreEnum.Xml, id: "report3", reqUrl: "demo05/PulsarReport3Fail.xml", service: "tograph", vis: MrxExploreEnum.Image},]
  },
  {
    id: "(4)-pass",
    mrxId: "MRX.123.456.789.vqc",
    name: "PulsarReport4Pass.xml",
    clip: "",
    srcUrl: "demo05/ebu-bars.png",
    summary: "",
    exploreMd: ``,
    srcReg: vqc,
    serviceData: [{ type: MrxExploreEnum.Xml, id: "report4", reqUrl: "demo05/PulsarReport4Pass.xml", service: "tograph", vis: MrxExploreEnum.Image},]
  },
  {
    id: "(5)-pass",
    mrxId: "MRX.123.456.789.vqc",
    name: "PulsarReport5Pass.xml",
    clip: "",
    srcUrl: "demo05/ebu-bars.png",
    summary: "",
    exploreMd: ``,
    srcReg: vqc,
    serviceData: [{ type: MrxExploreEnum.Xml, id: "report5", reqUrl: "demo05/PulsarReport5Pass.xml", service: "tograph", vis: MrxExploreEnum.Image},]
  },
]
