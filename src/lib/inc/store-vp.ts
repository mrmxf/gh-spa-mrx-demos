/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
   *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * viewport stores for the demos - getting the panel dimensions about right
 */
import { get, readable, writable, derived, type Writable, type Readable } from 'svelte/store';
import { MrxMode } from '$lib/inc/defs'

export type VPAspectDimension = {
  banner: string,
  page: string,
  flowNav: string
  flow: string
}

export type VPMap = {
  pageAR: number,
  height: VPAspectDimension,
  width: VPAspectDimension,
  MOBILE: boolean,
  MODE: MrxMode
}

// --- DISPLAY MODES  ---------------------------------------------------------
export const pageW = writable(0);
export const pageH = writable(0);
export const pageAR: Readable<number> = derived(pageW, $w => $w / get(pageH))
//display in mobile mode when the width is less than 800 pixels
//used to switch between desktop and mobile layouts (fomantic breaks at 768px)
export const MOBILE: Readable<boolean> = derived(pageW, $w => ($w < 800))

// This is where all the Viewport maths takes place. We need to control the
// aspect ratios and viewing dimensions.
export const VP: Readable<VPMap> = derived([pageW, pageH], ([$w, $h]) => {
  //we switch into mobile mode when the width is less than 800 pixels
  //used to switch between desktop and mobile layouts (fomantic breaks at 768px)
  let isMobile = $w < 800;
  return {
    pageAR: $w/$h,
    height: {
      banner: '150px',
      page: `${$h}px`,
      flowNav: '64px',
      flow: '100%',
    },
    width: {
      banner: '100%',
      page: `${$w}px`,
      flowNav: '100%',
      flow: '100%',
    },
    MOBILE: isMobile,
    //we default to FlowView - the user clicks to set TryIt view
    MODE: MrxMode.FlowView
  }
})