/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 */
import sponsors from '$lib/cfg/mrx-demo-sponsors'

const thisId = 0

export function load() {

	return {
    demoId: thisId,
		sources: {},
    regCache: {},
    sponsors: sponsors,
	};
}
