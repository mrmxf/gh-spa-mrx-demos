/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo03 config data
 */
import type { MrxMediaSource, MrxRegisterCache } from '$lib/mrx-demo-defs';
import { MrxExploreEnum } from '$lib/mrx-demo-defs';

import gpx from '$lib/regcache/MRX.123.456.789.gpx.json';
import wav from '$lib/regcache/MRX.123.456.789.wav.json';

export const thisId = 3

export const regCache: MrxRegisterCache = [
  { mrxId: "MRX.123.456.789.gpx", reg: gpx },
  { mrxId: "MRX.123.456.789.wav", reg: wav },
]

export const sources: MrxMediaSource[] = [
  {
    id: "gpx",
    mrxId: "MRX.123.456.789.gpx",
    name: "Mic location",
    clip: "Various",
    srcUrl: "demo03/gpx-icon.svg",
    summary: "GPS data for visualization",
    exploreMd: `
## GPX conversion

Our [AudioMoth](https://www.openacousticdevices.info/audiomoth) acoustic
recorders are synchronized with GPS to give both location information to the
recorders and to allow some wave front analysis to locate individual birds in
the cluster of recorders.

The format of the gps signal in the hardware is not the same as the data needed
for many W3C and Garmin APIs. MetaRex definitions enable auto-conversion between
many formats.
`,
    srcReg: gpx,
    serviceData: [
      { type: MrxExploreEnum.Gpx, id: "Alt_Portsmouth", reqUrl: "demo03/Alt_Portsmouth.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "Basel_StBrevin_Eurovelo6", reqUrl: "demo03/Basel_St-Brevin_Eurovelo6.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "Courgenay_BallonDAlsace", reqUrl: "demo03/Courgenay_Ballon-DAlsace.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "Dole_Langres", reqUrl: "demo03/Dole_Langres.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "Dole_SalinlesBains", reqUrl: "demo03/Dole_Salin-les-Bains.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "JuraRoute72011", reqUrl: "demo03/JuraRoute72011.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "MoselradwegAusWiki", reqUrl: "demo03/MoselradwegAusWiki.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "Newhaven_Brighton", reqUrl: "demo03/Newhaven_Brighton.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "Ouistreham_Caen", reqUrl: "demo03/Ouistreham_Caen.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "ReimsVitryLeFrancois", reqUrl: "demo03/Reims-VitryLeFrancois.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "SalinslesBains_Fleurier", reqUrl: "demo03/Salins-les-Bains_Fleurier.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      // { type: MrxExploreEnum.Gpx, id: "Serqueaux_Dieppe", reqUrl: "demo03/Serqueaux_Dieppe.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "Southampton_Portsmouth", reqUrl: "demo03/Southampton_Portsmouth.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "VitryleFrancois_Langres", reqUrl: "demo03/Vitry-le-Francois_Langres.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
      { type: MrxExploreEnum.Gpx, id: "VoieVerteHauteVosges", reqUrl: "demo03/VoieVerteHauteVosges.gpx", service: "toW3C", vis: MrxExploreEnum.Json },
    ],
  }, {
    id: "wav",
    mrxId: "MRX.123.456.789.wav",
    name: "Bird song",
    clip: "Various",
    srcUrl: "demo03/wav-icon.svg",
    summary: "Bird song for visualization",
    exploreMd: `
## WAV visualization

Our [AudioMoth](https://www.openacousticdevices.info/audiomoth) acoustic
recorder capture 20Hz to 200kHz. This is way more than we can hear, but the
higher frequencies help to localize the sound sources more accurately.

The simple demo here shows how we can create a service to convert the audio
into a visual representation where we can show the loudness of the higher
frequencies, even if humans can't hear them.`,
    srcReg: wav,
    serviceData: [
      { type: MrxExploreEnum.WavAudio, id: "CommonBlackbirdshort", reqUrl: "demo03/Common Blackbird - short.wav", service: "ToWaveform", vis: MrxExploreEnum.Image },
      { type: MrxExploreEnum.WavAudio, id: "CommonChiffchaffshort", reqUrl: "demo03/Common Chiffchaff - short.wav", service: "ToWaveform", vis: MrxExploreEnum.Image },
      { type: MrxExploreEnum.WavAudio, id: "EurasianBlackcapshort", reqUrl: "demo03/Eurasian Blackcap - short.wav", service: "ToWaveform", vis: MrxExploreEnum.Image },
      { type: MrxExploreEnum.WavAudio, id: "EurasianWrenshort", reqUrl: "demo03/Eurasian Wren - short.wav", service: "ToWaveform", vis: MrxExploreEnum.Image },
      { type: MrxExploreEnum.WavAudio, id: "EuropeanRobinshort", reqUrl: "demo03/European Robin - short.wav", service: "ToWaveform", vis: MrxExploreEnum.Image },
      { type: MrxExploreEnum.WavAudio, id: "SongThrushshort", reqUrl: "demo03/Song Thrush - short.wav", service: "ToWaveform", vis: MrxExploreEnum.Image },
    ],
  }]
