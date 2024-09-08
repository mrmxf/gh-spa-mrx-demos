/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
  *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
  * ------------------------------------------------------------------------
  */
import type { MrxCfgData } from '$lib/inc/defs';
import { cfg as cfg01 } from '$lib/cfg/01-config'
import { cfg as cfg02 } from '$lib/cfg/02-config'
import { cfg as cfg03 } from '$lib/cfg/03-config'
import { cfg as cfg04 } from '$lib/cfg/04-config'
import { cfg as cfg05 } from '$lib/cfg/05-config'
import { cfg as cfg06 } from '$lib/cfg/06-config'
import { cfg as cfg07 } from '$lib/cfg/07-config'
import { cfg as cfg08 } from '$lib/cfg/08-config'
import { cfg as cfg09 } from '$lib/cfg/09-config'
import { cfg as cfg10 } from '$lib/cfg/10-config'
import { cfg as cfg11 } from '$lib/cfg/11-config'
import { cfg as cfg12 } from '$lib/cfg/12-config'

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
    topHeight: "15vh",
    midHeight: "20vh",
    botHeight: "60vh",
    sponsorHeight: "200px;",
    sponsorDwellSecs: 3,
    flowDwellSecs: 15,
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
### IBC 20024 - come and see us on Sunday at 17:00 14.AI03

Win a cuddly Rexy - [sign up here to do the Treasure Hunt](https://bit.ly/rexy-ibc-2024)
    `
  },
  demo: [cfg01, cfg02, cfg03, cfg04, cfg05, cfg06, cfg07, cfg08, cfg09, cfg10, cfg11, cfg12]
}

export default cfg