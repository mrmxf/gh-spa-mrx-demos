/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo08 config data
 */
import { MrxExploreEnum, type MrxMediaSource, type MrxRegisterCache } from '$lib/inc/defs';

import jpg from '$lib/regcache/MRX.123.456.789.jpg.json';

import truepic20230212camera from '$lib/data/demo08/truepic-20230212-camera/detailed.json'
import m_adobe20220124C from '$lib/data/demo08/adobe-20220124-C/detailed.json'
import m_adobe20220124CA from '$lib/data/demo08/adobe-20220124-CA/detailed.json'

export const thisId = 8

export const manifest = {
  truepic20230212camera: truepic20230212camera,
  adobe20220124C: m_adobe20220124C,
  adobe20220124CA: m_adobe20220124CA,
}
export const regCache: MrxRegisterCache = [
  { mrxId: "MRX.123.456.789.jpg", reg: jpg },
]

export const sources: MrxMediaSource[] = [
  {
    id: "truepic20230212camera",
    mrxId: "MRX.123.456.789.jpg",
    name: "truepic-20230212-camera",
    clip: "",
    srcUrl: "demo08/truepic-20230212-camera.jpg",
    summary: "",
    exploreMd: `Visualize Content Authentication data`,
    srcReg: jpg,
    serviceData: [{ type: MrxExploreEnum.Jpeg, id: "truepic20230212camera", reqUrl: "demo08/truepic-20230212-camera.jpg", service: "extractHeaderc2pa", vis: MrxExploreEnum.Json },]
  },
  {
    id: "adobe20220124C",
    mrxId: "MRX.123.456.789.jpg",
    name: "adobe-20220124-C.jpg",
    clip: "",
    srcUrl: "demo08/adobe-20220124-C.jpg",
    summary: "",
    exploreMd: `Visualize Content Authentication data`,
    srcReg: jpg,
    serviceData: [{ type: MrxExploreEnum.Jpeg, id: "adobe20220124C", reqUrl: "demo08/adobe-20220124-C.jpg", service: "extractHeaderc2pa", vis: MrxExploreEnum.Json },]
  },
  {
    id: "adobe20220124CA",
    mrxId: "MRX.123.456.789.jpg",
    name: "adobe-20220124-CA.jpg",
    clip: "",
    srcUrl: "demo08/adobe-20220124-CA.jpg",
    summary: "",
    exploreMd: `Visualize Content Authentication data`,
    srcReg: jpg,
    serviceData: [{ type: MrxExploreEnum.Jpeg, id: "adobe20220124CA", reqUrl: "demo08/adobe-20220124-CA.jpg", service: "extractHeaderc2pa", vis: MrxExploreEnum.Json },]
  }
  //   ,
  //   {
  //     id: "adobe20220124CACA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CACA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CACA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CACAICAICICA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CACAICAICICA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CACAICAICICA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CAI",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CAI.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CAI.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CAIAIIICAICIICAIICICA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CAIAIIICAICIICAIICICA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CAIAIIICAICIICAIICICA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CAICA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CAICA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CAICA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CAICAI",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CAICAI.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CAICAI.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CI",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CI.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CI.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CICA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CICA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CICA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CICACACA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CICACACA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CICACACA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CIEsigCA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CIE-sig-CA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CIE-sig-CA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124CII",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-CII.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-CII.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124EclmCAICAI",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-E-clm-CAICAI.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-E-clm-CAICAI.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124EdatCA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-E-dat-CA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-E-dat-CA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124EsigCA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-E-sig-CA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-E-sig-CA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124EuriCA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-E-uri-CA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-E-uri-CA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124EuriCIEsigCA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-E-uri-CIE-sig-CA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-E-uri-CIE-sig-CA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124I",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-I.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-I.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124XCA",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-XCA.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-XCA.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20220124XCI",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20220124-XCI.jpg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20220124-XCI.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "adobe20221004ukraine_building",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "adobe-20221004-ukraine_building.jpeg",
  //     clip: "",
  //     srcUrl: "demo08/adobe-20221004-ukraine_building.jpeg",
  //     summary: "",
  //   },
  //   {
  //     id: "nikon20221019building",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "nikon-20221019-building.jpeg",
  //     clip: "",
  //     srcUrl: "demo08/nikon-20221019-building.jpeg",
  //     summary: "",
  //   },
  //   {
  //     id: "truepic20230212camera",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "truepic-20230212-camera.jpg",
  //     clip: "",
  //     srcUrl: "demo08/truepic-20230212-camera.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "truepic20230212landscape",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "truepic-20230212-landscape.jpg",
  //     clip: "",
  //     srcUrl: "demo08/truepic-20230212-landscape.jpg",
  //     summary: "",
  //   },
  //   {
  //     id: "truepic20230212library",
  //     mrxId: "MRX.123.456.789.jpg",
  //     name: "truepic-20230212-library.jpg",
  //     clip: "",
  //     srcUrl: "demo08/truepic-20230212-library.jpg",
  //     summary: "",
  //   },
]
