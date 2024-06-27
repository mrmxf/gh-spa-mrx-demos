<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control08
	 */

	import { cfgData, source, reqRes, exploreTabs } from '$lib/mrx-demo-stores';
	import {
		MrxExploreEnumNames,
		type MrxMediaSource,
		type MrxServiceData
	} from '$lib/mrx-demo-defs';
	import { mrxServiceDemo, mrxServiceExplore } from '$lib/mrxEtl';

	import { md } from '$lib/markdown-it';
	import { manifest } from './config08-data';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

	//new render: initialize message
	let msgMd: string = '';
	let rrIndex: Promise<number> | number = -1;
	let previousSourceId = 'gone';
	let srcType = 'none';
	let viewType = 'none';

	async function transformMetadata(src: MrxMediaSource, service: MrxServiceData) {
		rrIndex = await mrxServiceDemo(src, service);
		mrxServiceExplore({ index: rrIndex, req: true, res: true });
		//force refresh
		previousSourceId = src.id;
		$source = $source;
		$exploreTabs = $exploreTabs;
	}

	$: if ($source && $source.serviceData && previousSourceId !== $source.id) {
		//check this update has a valid source and service definition
		let service = $source.serviceData[0];

		if (service && service.type) transformMetadata($source, service);
	}
	$: last = $reqRes.length - 1;
	$: if (last >= 0 && $source && $source.serviceData && $source.serviceData[0]) {
		srcType = MrxExploreEnumNames[$source.serviceData[0].type];
		viewType = MrxExploreEnumNames[$source.serviceData[0].vis];
	}
</script>

<div class="{width} wide column">
	<div class="ui {color} message" style="height:100%;">
		{#if $source}
			<h2 class="header">Checking QC</h2>
			<code>{$source.name}</code>

			{@html md.render(msgMd)}
			{#if last >= 0}
				<p>transform to {viewType}: {$reqRes[last].res.title}</p>
				<p>
					<code>{$reqRes[last].req.size}</code> bytes source {srcType}<br />
					<code>{$reqRes[last].res.size}</code> bytes transform {viewType}
				</p>
			{/if}
		{/if}
	</div>
</div>
