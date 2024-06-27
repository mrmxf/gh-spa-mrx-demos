/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo01 control stores
 */
import { derived } from 'svelte/store';
import { source } from '$lib/mrx-demo-stores';


export const srcFormat = derived(source,
	($source) => `${$source ? $source.name : "No source selected"}`
)
