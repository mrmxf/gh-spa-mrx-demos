/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo04 control stores
 */

import { get, derived } from 'svelte/store';
import { source, reqRes } from '$lib/inc/store-misc';
import { MrxExploreEnum, MrxExploreEnumNames } from '$lib/inc/defs';

export const srcFormat = derived(source,
	($source) => `${$source ? $source.name : "Select a source"}`
)

export const etlMdStr = derived(source, $source => {
	let msg: string = ""
	const srcType = $source && $source.serviceData && $source.serviceData.length > 0 ? $source.serviceData[0].type : MrxExploreEnum.Unknown
	const dstType = $source && $source.serviceData && $source.serviceData.length > 0 ? $source.serviceData[0].vis : MrxExploreEnum.Unknown
	const srcTypeStr = MrxExploreEnumNames[srcType]
	const dstTypeStr = MrxExploreEnumNames[dstType]
	if ($source && $source.clip) {
		msg = `
### ${$source.clip}

* Converting from:
   * **\`${$source.name}\`**
   * reg=**\`${$source.mrxId}\`**
   * of type **\`${srcTypeStr}\`**
* to
	 * type **\`${dstTypeStr}\`**
`}
	return msg
})
