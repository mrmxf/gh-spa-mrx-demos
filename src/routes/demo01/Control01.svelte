<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control01 -  custom control to handle a rundown linked to Sources
	 * $activeSource is the current event in the rundown
	 * $source is clip of any event that was clicked by the user
	 */
	import { nilSource, type MrxEvent, type MrxMediaSource } from '$lib/mrx-demo-defs';
	import { cfgData, source, rundownSource, timeOfDay, rundownEvents } from '$lib/mrx-demo-stores';
	import { base } from '$app/paths';
	import { mrxRegisterExplore } from '$lib/mrxEtl';

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
	//a new source has been clicked - explore it
	$: if ($source && pastSourceId !== $source.id) {
		if ($source.srcReg) mrxRegisterExplore($source.srcReg, '');
	}
</script>

<div class="{width} wide stackable column">
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
			<br /><br />
			<span class="ui grey text"><em>Click on a clip to preview event</em></span>
			{#if $source && $source.srcUrl.length > 0}
				<video
					class="ui image"
					autoplay
					loop
					muted
					id="play-{$source.id}"
					src="{base}/{$source.srcUrl}"
				>
				</video>
			{/if}
		</div>
	{/if}
</div>
