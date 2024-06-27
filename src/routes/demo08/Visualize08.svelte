<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Visualize08
	 */
	import { cfgData, source, reqRes } from '$lib/mrx-demo-stores';
	import { md } from '$lib/markdown-it';
	import { MrxExploreEnum } from '$lib/mrx-demo-defs';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;

	let serviceName = 'QC Status Graph';
	$: last = $reqRes.length - 1;
</script>

<div class="{width} wide column">
	<div class="ui middle center aligned {color} message" style="height:100%">
		{#if $source}
			{$source.id} returned from metarex service {@html md.renderInline(serviceName)}
			<br />
		{/if}
		{#if $reqRes && $reqRes.length > 0}
			{#if $reqRes[last].req.type == MrxExploreEnum.Jpeg}
				<div class="ui large image">
					<img src={$reqRes[last].req.bUrl} alt={$reqRes[last].req.title} />
				</div>
			{:else}
				<p>See the dataÏ in the Explore tabs.</p>
			{/if}
		{/if}
	</div>
</div>
