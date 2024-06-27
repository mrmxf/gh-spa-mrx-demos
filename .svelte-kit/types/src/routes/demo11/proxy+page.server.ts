// @ts-nocheck
/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo 11
 * page data automatically loaded on the server, then hydrated to the browser
 */

import { thisId, sources, regCache } from './config11-data';

import type { PageServerLoad } from '../$types';

export const load = async () => {

	return {
    demoId: thisId,
    sources: sources,
    regCache: regCache,
	};
}
;null as any as PageServerLoad;