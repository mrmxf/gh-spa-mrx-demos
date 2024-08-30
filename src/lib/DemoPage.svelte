<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo page template for most pages
	 */
	import type { MrxMediaSource, MrxEvent } from "$lib/mrx-demo-defs";
	import { pageW, pageH, pageAR, DBG, MOBILE } from "$lib/mrx-demo-stores";
	import DEBUG from "$lib/Debug.svelte";
	import Navigate from "$lib/Navigate.svelte";
	import Explore from "$lib/ExplorePane.svelte";
	import TMP_QR from "$lib/tmp-qr-page.svelte";

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

	import DemoBanner from "$lib/Banner.svelte";
	import Overview from "$lib/Overview.svelte";
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<DEBUG />
<div class="ui stackable segments">
	<DemoBanner {demoId} />
	<Overview {demoId} />
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
</div>

<style>
	.demoSeg {
		min-height: 50vh;
		max-height: 60vh;
	}
</style>
