<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Visualize09
	 */
	import type { MrxDemoCfg, MrxMediaSource } from "$lib/inc/defs";
	import { base } from "$app/paths";
	import { cfgData, source } from "$lib/inc/store-misc";
	import { xIndex } from "./control09-stores";
	import { loqLadderFire as loqLadder } from "./config09-data";

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;
	let viewSize: number;
	let viewTitle = "";
	$: if ($source && loqLadder && loqLadder[$xIndex] && loqLadder[0]) {
		viewSize = (100 * loqLadder[$xIndex].width) / loqLadder[0].width;
		viewTitle = " @ " + loqLadder[$xIndex].title;
	}
</script>

<div class="{width} wide column">
	<div class="ui middle center aligned {color} message" style="height:100%">
		Visualize: {$source ? $source.id : "Nothing selected"} loq({$xIndex})
		<strong>{viewTitle}</strong><br />
		{#if $source && $source.srcUrl.length > 0}
			<video
				class="ui image"
				autoplay
				loop
				muted
				id="play-{$source.id}"
				style="width:{viewSize}%"
				src="{base}/{$source.srcUrl}"
			>
			</video>
		{/if}
	</div>
</div>
