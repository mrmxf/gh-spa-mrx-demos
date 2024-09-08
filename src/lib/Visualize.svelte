<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 */
	import { base } from '$app/paths';
	import { cfgData, source } from '$lib/inc/store-misc';

	export let demoId: number;

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;
</script>

<div class="{width} wide column">
	<div class="ui middle aligned {color} message" style="height:100%">
		{#if $source}
			Visualize: {$source.id}
			{#if $source.srcUrl.length > 0}
				<video
					class="ui image"
					autoplay
					loop
					muted
					id="play-{$source.id}"
					src="{base}/{$source.srcUrl}"
				>
				</video>
			{:else}
				<p>select a source to visualize for demo {demoId}</p>
			{/if}
		{/if}
	</div>
</div>
