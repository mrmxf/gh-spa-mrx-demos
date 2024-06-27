/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo 10
 * page data automatically loaded on the server, then hydrated to the browser
 */

import { thisId, sources, regCache } from './config10-data';

import type { PageServerLoad } from '../$types';
import { LPXrundown } from '$lib/config-rundown';

export const load: PageServerLoad = async () => {

    return {
        demoId: thisId,
        sources: sources,
        regCache: regCache,
        rundowon: LPXrundown,
    };
}
