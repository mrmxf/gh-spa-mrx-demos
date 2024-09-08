<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * generic rundown navigation
	 */

	import type { MrxMediaSource, MrxEvent } from '$lib/inc/defs';
	import { DBG, source, rundownEvents, timeOfDay } from '$lib/inc/store-misc';
	import { refreshEventList } from '$lib/rundownUtils';
	import Timer from '$lib/Timer.svelte';

	export let sources: MrxMediaSource[];
	export let rundown: MrxEvent[];

	let eventList: MrxEvent[] = [];

	let heartbeat: number;
	$: {
		$rundownEvents = refreshEventList(rundown);
		// console.log('event list / rundown has ', eventList.length, ' / ', rundown.length, 'elements');
	}
	$: {
		heartbeat = $timeOfDay.getSeconds() % 10;
		if (heartbeat == 0) {
			$rundownEvents = refreshEventList(rundown);
		}
	}

	let navClick = (index: number) => {
		let selectedSource = $rundownEvents[index].srcIndex;
		$source = sources[selectedSource];
	};
</script>

<Timer />
<div class="ui fluid basic scrolling segments eSeg" style="height:100%;margin-top:-1em;">
	{#each $rundownEvents as event, i}
		<a href={'#'} class=" ui basic segment " on:click={() => navClick(i)}>
			<div class="ui attached fluid {event.color} message eMsg">
				<div class="ui left floating small left aligned {event.color} label">
					{event.status ? event.status : ''}
				</div>
				<div>
					<p class="eTime">{event.date ? event.date.toTimeString().slice(0, 8) : 'unknown date'}</p>
					<p class="eText">{event.headline}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.eSeg {
		padding: 0.2em;
		width: 100%;
		display:inline-block;
		margin-bottom: 1.6em;
	}
	.eMsg {
		padding: 0.9em 0.2em 0.2em;
		width: 110%;
	}
	.eTime {
		font-weight: bold;
		font-size: 0.9em;
		text-align: center;
		filter: brightness(50%)
	}
	.eText {
		font-weight: normal;
		font-size: 0.8em;
		margin: 0 -1.1em 0.2em;
		overflow: hidden;
	}
</style>
