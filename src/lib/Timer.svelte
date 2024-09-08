<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Timer for rundown events
	 */
	import { onDestroy } from 'svelte';
	import { timeOfDay } from '$lib/inc/store-misc';

	function updateTimer() {
		timeOfDay.set(new Date());
	}
	let interval = setInterval(updateTimer, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class=" ui fluid basic segment eSeg">
	<div class="ui fluid message">
		<h3 class="header">
			<span class="ui green text">
				{new Date($timeOfDay).toTimeString().slice(0, 8)}
			</span>
		</h3>
	</div>
</div>

<style>
	.eSeg {
		padding: 0.2em;
		width: 110%;
		display: inline-block;
		margin-bottom: 1.6em;
		margin-left: auto;
	}

</style>
