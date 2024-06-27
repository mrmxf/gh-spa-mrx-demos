/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * demo03 control stores
 */

import { writable } from 'svelte/store';

// remember the selected wav / gpx
export const selectedServiceIndex = writable(-1)

// remember the state of the API callback
export const stateIs = writable(0)
