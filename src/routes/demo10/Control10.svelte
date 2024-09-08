<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control10 custom control to handle a rundown linked to Sources
	 * $activeSource is the current event in the rundown
	 * $source is clip of any event that was clicked by the user
	 */
	import { nilSource, type MrxEvent, type MrxMediaSource , type MrxServiceData} from '$lib/inc/defs';
	import {
		cfgData,
		source,
		rundownSource,
		timeOfDay,
		rundownEvents,
		reqRes,
		exploreTabs
	} from '$lib/inc/store-misc';
	import { base } from '$app/paths';
	import { mrxRegisterExplore, mrxServiceDemo, mrxServiceExplore } from '$lib/mrxEtl';
	import DataSelect from './DataSelect.svelte';
	import { md } from '$lib/inc/markdown-it';
	import { selectedServiceIndex, etlMdStr } from './control10-stores';

	export let demoId: number;
	export let sources: MrxMediaSource[];

	let pastSourceId = 'not there';

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

	let seconds: number;
	let statusColor: string;
	let statusMsg = '';
	let activeEvent: MrxEvent;
	let headline = '';
	let last: number = -1;

	$: {
		//select the rundown source for the rest of the GUI
		$rundownEvents.forEach((e) => {
			if (e.status == 'active') activeEvent = e;
		});
		if (activeEvent) {
			$rundownSource = sources[activeEvent.srcIndex];
			headline = activeEvent.headline;
		} else {
			$rundownSource = nilSource;
			headline = '';
		}
	}
	$: {
		if ($rundownSource) {
			seconds = $timeOfDay.getSeconds();
			if (seconds == 0) {
				statusMsg = 'ingesting...';
				statusColor = 'green';
			} else if (seconds == 9) {
				statusMsg = 'transferring with Jet ...';
				statusColor = 'blue';
			} else if (seconds == 12) {
				statusMsg = 'complete';
				statusColor = '';
			}
		} else {
			statusMsg = 'no active ingest';
			statusColor = '';
		}
	}
	// $: if ($source && pastSourceId !== $source.id) {
	// 	if ($source.srcReg) mrxRegisterExplore($source.srcReg, '');
	// }
	//new render: initialize message
	let msgMd: string = '';
	let rrIndex: Promise<number> | number = -1;
	let recentServiceId = -1;
	async function transformMetadata(src: MrxMediaSource, service: MrxServiceData) {
		rrIndex = await mrxServiceDemo(src, service);
		mrxServiceExplore({ index: rrIndex, req: true, res: true });
		//force refresh
		$source = $source;
		$exploreTabs = $exploreTabs;
	}

	$: if (recentServiceId != $selectedServiceIndex) {
		if ($source && $source.id.length > 2 && $source.serviceData) {
			//check this update has a valid source and serviceData
			if ($selectedServiceIndex >= 0 && $selectedServiceIndex < $source.serviceData.length) {
				let selectedService = $source.serviceData[$selectedServiceIndex];

				msgMd = `Transforming ${$source.id}<p>\`${selectedService.id}\`</p>`;
				transformMetadata($source, selectedService);
				recentServiceId = $selectedServiceIndex;
			}
		}
	}
	$: last = $reqRes.length - 1;
</script>

<div class="{width} wide column">
	{#if $rundownSource}
		<div class="ui {color} message" style="height:100%;">
			<div class="header">Active: <span class="ui grey text">{$rundownSource.id}</span></div>
			<div class="ui center aligned message">
				{headline}
			</div>
			<div class="ui {statusColor} fluid message">
				Status: &nbsp;<em>{statusMsg}</em>
			</div>
			Active:
			{#if $rundownSource.srcUrl.length > 0}
				<video
					class="ui image"
					autoplay
					loop
					muted
					id="play-{$rundownSource.id}"
					src="{base}/{$rundownSource.srcUrl}"
				>
				</video>
			{/if}
			<br />
			<span class="ui grey text">Click a <em>source transform</em></span>
			{#if $source && $source.serviceData && $source.serviceData.length > 0}
				<div class="header">Select a {$source.id} source</div>
				<p>{$source.serviceData.length} items available</p>
				<DataSelect />
				{@html md.render(msgMd)}
				{#await rrIndex}transforming...
				{:catch mrxETL}Error performing ETL {mrxETL}
				{/await}
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
	{/if}
</div>
