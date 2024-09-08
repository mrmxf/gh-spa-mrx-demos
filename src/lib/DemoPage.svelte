<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo page template for most pages
	 */
	import { type MrxMediaSource, type MrxEvent, MrxMode } from "$lib/inc/defs";
	import { pageW, pageH, MODE, DBG, MOBILE } from "$lib/inc/store-misc";
	import DEBUG from "$lib/Debug.svelte";

	import Banner from "$lib/Banner.svelte";
	import DisplayPaneNav from "$lib/DisplayPaneNav.svelte"
	import FlowPane from "$lib/Flow-Pane.svelte";
	import Navigate from "$lib/Navigate.svelte";
	import Explore from "$lib/ExplorePane.svelte";

	export let demoId: number;
	export let sources: MrxMediaSource[];
	export let rundown: MrxEvent[] = [];
	export let showNav = true;
	export let showExplore = true;

	// window dimensions - svelte binding
	let innerWidth = 0;
	let innerHeight = 0;

	$: {
		pageW.set(innerWidth);
		pageH.set(innerHeight);
	}
	$: forcePortrait = $pageW < 0.8 * $pageH;

	$DBG = false;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<DEBUG />
<div class="ui stackable segments fillPage">
	<Banner {demoId} />
	<DisplayPaneNav {demoId}/>
	{#if $MODE==MrxMode.FlowView}
	<FlowPane {demoId} />
	{:else}
	<div class=" ui stretched row">
		<div class="sixteen wide column">
			<div class="ui demoSeg orange segment">
				<div class="ui stackable grid">
					<div class="ui stretched row">
						{#if showNav}
							<Navigate
								{demoId}
								{sources}
								{rundown}
								{forcePortrait}
							/>
						{/if}
						<!-- --- Custom Page columns go here -------------- -->
						<slot />
						<!-- ---------------------------------------------- -->
						{#if showExplore}
							<Explore {demoId} />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	{/if}
</div>

<style>
	.demoSeg {
		min-height: 50vh;
		max-height: 60vh;
	}
	.fillPage {
		height: 100%;
	}
</style>
