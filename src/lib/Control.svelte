<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control - the common file - usually overridden
	 */
	import type { MrxCfgData, MrxMediaSource } from '$lib/mrx-demo-defs';
	import { cfgData } from '$lib/mrx-demo-stores';
	import { source } from '$lib/mrx-demo-stores';

	export let demoId: number;
	export let sources: MrxMediaSource[]

	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

</script>

<div class="{width} wide column">
	<div class="ui {color} message" style="height:100%;">
		{#if $source}
			Control {$source.id}
			<div class="ui fluid image">
				Indicate the conversion type here for demo {demoId}
			</div>
		{:else}
			<p>Click on a source from the {sources.length} available</p>
		{/if}
	</div>
</div>
