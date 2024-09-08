<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * generic input navigation
	 *
	 * - Either a static list of sources or a rundown of sources
	 * - $source == undefined || active rundown || clicked static
	 * - $previous == undefined || previous static click || rundown just
	 * - $next == undefined || upcoming selection
	 */
	import type { MrxMediaSource, MrxEvent } from "$lib/inc/defs";
	import { cfgData } from "$lib/inc/store-misc";
	import NavStatic from "./NavStatic.svelte";
	import NavRundown from "./NavRundown.svelte";

	export let demoId: number;
	export let sources: MrxMediaSource[];
	export let thumbSize = "small";
	export let rundown: MrxEvent[] = []; //defaults to empty so that typescript errors are suppressed.
	export let forcePortrait = false;

	demoId = demoId;
	let width = $cfgData.appearance.navigate.width;
	let color = $cfgData.appearance.navigate.color;
</script>

<div class="{color} {width} wide stackable column">
	{#if rundown && rundown.length > 0}
		<NavRundown {sources} {rundown} />
	{:else if sources}
		<NavStatic {sources} {thumbSize} {forcePortrait} />
	{:else}
		No Sources - This should not happen.
	{/if}
</div>
