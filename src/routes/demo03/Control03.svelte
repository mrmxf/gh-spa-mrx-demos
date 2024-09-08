<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control03 - Dawn Chorus
	 * GPS or Wav sources are selected and then Control allows a sub-selection
	 * from the list
	 */
	 import {
		MrxExploreEnumNames,
		type MrxMediaSource,
		type MrxServiceData
	} from '$lib/inc/defs';
	import {
		cfgData,
		source,
		reqRes,
		exploreTabs,
		activeExploreTabNumber
	} from '$lib/inc/store-misc';
	import { selectedServiceIndex } from './control03-stores';
	import { md } from '$lib/inc/markdown-it';
	import { mrxServiceDemo, mrxServiceExplore } from '$lib/mrxEtl';
	import DataSelect from './DataSelect03.svelte';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

	//new render: initialize message
	let msgMd: string = '';
	let rrIndex: Promise<number> | number = -1;
	let recentServiceId = -1;
	let last = -1;

	async function transformMetadata(src: MrxMediaSource, service: MrxServiceData) {
		rrIndex = await mrxServiceDemo(src, service);
		mrxServiceExplore({ index: rrIndex, req: true, res: true });
		//force refresh
		//previousSourceId = src.id;
		$source = $source;
		$exploreTabs = $exploreTabs;
	}
	$: last = $reqRes.length - 1;
	$: if (recentServiceId != $selectedServiceIndex) {
		if ($source && $source.id.length > 2 && $source.serviceData) {
			//check this update has a valid source and serviceData
			if ($selectedServiceIndex >= 0 && $selectedServiceIndex < $source.serviceData.length) {
				let selectedService = $source.serviceData[$selectedServiceIndex];
				transformMetadata($source, selectedService);

				msgMd = `Transforming ${$source.id}<p>\`${selectedService.id}\`</p>`;
				rrIndex = mrxServiceDemo($source, selectedService);
				recentServiceId = $selectedServiceIndex;
				//when this synchronous call returns we can decide what to display
				if (typeof rrIndex == 'number') {
					mrxServiceExplore({ index: rrIndex, req: true, res: true });
					//force refresh
					$source = $source;
					$exploreTabs = $exploreTabs;
				}
			}
			//force re-render
			$source = $source;
		}
	}
</script>

<div class="{width} wide column">
	<div class="ui {color} message" style="height:100%;">
		{#if $source && $source.serviceData && $source.serviceData.length > 0}
			<div class="header">Select a {$source.id} source</div>
			<p>{$source.serviceData.length} items available</p>
			<DataSelect />
			{@html md.render(msgMd)}
			{#if last > 0}
				<p>{$reqRes[last].res.type}: {$reqRes[last].res.title}</p>
				<p>
					<code>{$reqRes[last].req.size}</code> bytes source<br />
					<code>{$reqRes[last].res.size}</code> bytes transform
				</p>
			{/if}
		{:else if $source && $source.serviceData}
			<div class="ui active inverted dimmer">
				<div class="ui text loader">Loading Wav samples</div>
			</div>
		{/if}
	</div>
</div>
