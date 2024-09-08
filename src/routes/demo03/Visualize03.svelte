<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Visualize03
	 */

	import { DBG, cfgData, source, reqRes, exploreTabs } from '$lib/inc/store-misc';
	import { md } from '$lib/inc/markdown-it';
	import { MrxExploreEnum, MrxExploreEnumNames } from '$lib/inc/defs';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;

	let serviceName: string = '';
	$: last = $reqRes.length - 1;
	$: if (last > 0 && $reqRes &&  $reqRes[last].req) {
		serviceName = $reqRes[last].req.type == MrxExploreEnum.Gpx ? 'gpx convert' : 'wav visualize';
	}
</script>

<div class="{width} wide column">
	<div class="ui middle center aligned {color} message" style="height:100%">
		{#if $source && $reqRes && $reqRes[last]}
			{$reqRes[last].req.title}<br>
			<strong>{$source.id}</strong> transformed with service
			<strong>{@html md.renderInline(serviceName)}</strong>
			{#if $reqRes && $reqRes.length > 0}
				to type <strong>{MrxExploreEnumNames[$reqRes[last].res.type]}</strong><br />
				{#if $DBG}
					res[{last}], type [{$reqRes[last].res.type}] explore[{$exploreTabs.length - 1}]<br />
					url: {$reqRes[last].res.bUrl}
				{/if}
				{#if $reqRes[last].res.type == MrxExploreEnum.Image}
					<div class="ui large image">
						<img src={$reqRes[last].res.bUrl} alt={$reqRes[last].res.title} />
					</div>
				{:else}
					<p>See the W3c xml in the Explore tabs.</p>
				{/if}
			{/if}
		{:else}
			<p>No source selected</p>
		{/if}
	</div>
</div>
