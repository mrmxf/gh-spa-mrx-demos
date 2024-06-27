// @ts-nocheck
/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo 12
 * config data is shared with demo04 - so load it and mutate it as needed
 * page data automatically loaded on the server, then hydrated to the browser
 */

import { sources, regCache } from '../demo04/config04-data';

import type { PageServerLoad } from '../$types';

// override the Id imported from config-04
const thisId: number = 12

export const load = async () => {

    return {
        demoId: thisId,
        sources: sources,
        regCache: regCache,
    };
}
;null as any as PageServerLoad;