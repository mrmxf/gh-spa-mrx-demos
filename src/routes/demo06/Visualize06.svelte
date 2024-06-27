<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Visualize06
	 */
	import type { MrxDemoCfg, MrxMediaSource } from '$lib/mrx-demo-defs';
	import { base } from '$app/paths';
	import { cfgData, source } from '$lib/mrx-demo-stores';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;
</script>

<div class="{width} wide column">
	<div class="ui middle aligned {color} message" style="height:100%">
		Visualize: {$source ? $source.id : 'none - select a source'}
		{#if $source && $source.srcUrl.length > 0}
			<video
				class="ui image"
				autoplay
				loop
				muted
				id="play-{$source ? $source.id : 'none'}"
				src="{base}/{$source ? $source.srcUrl : 'none'}"
			>
			</video>
		{/if}
	</div>
</div>
