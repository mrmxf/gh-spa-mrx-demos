<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Visualize04
	 */
	import { base, assets } from '$app/paths';
	import { cfgData, source } from '$lib/inc/store-misc';

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
			<div class="ui grid">
				<div class="ui centre aligned column">
					<img
						class="ui tiny image"
						src="{base}/{$source ? $source.srcUrl : 'none'}"
						alt="selected source"
					/>
				</div>
			</div>
		{:else}
			Select a source
		{/if}
		<div class="ui fluid image">
			<video class="ui image" autoplay loop muted id="play-sizzle" src="https://metarex.media/r/rnf-ai-seg.mp4">
			</video>
		</div>
	</div>
</div>
