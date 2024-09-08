<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Visualize05
	 */
	import { cfgData, source, reqRes } from '$lib/inc/store-misc';
	import { md } from '$lib/inc/markdown-it';
	import { MrxExploreEnum } from '$lib/inc/defs';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;

	let serviceName = 'QC Status Graph';
	let imgUrl: string | undefined = '';

	$: last = $reqRes.length - 1;
	$: if (last >= 0 && $reqRes[last].res.bUrl) {
		imgUrl = $reqRes[last].res.bUrl;
	}
</script>

<div class="{width} wide stackable column">
	<div class="ui middle center aligned {color} message" style="height:100%">
		{$source ? $source.id : 'no source'} returned from metarex service
		{@html md.renderInline(serviceName)}
		(image res {last})
		<br />
		{#if $reqRes && $reqRes.length > 0}
			{#if $reqRes[last].res.type == MrxExploreEnum.Image}
				<div class="ui large image">
					<img src={imgUrl} alt={$reqRes[last].res.title} />
				</div>
			{:else}
				<p>See the dataÏ in the Explore tabs.</p>
			{/if}
		{/if}
	</div>
</div>
