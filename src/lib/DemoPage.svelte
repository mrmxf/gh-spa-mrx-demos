<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo page template for most pages
	 */
	import type { MrxMediaSource, MrxEvent } from '$lib/mrx-demo-defs';
	import {pageW, pageH, pageAR} from '$lib/mrx-demo-stores'
	import Navigate from '$lib/Navigate.svelte';
	import Explore from '$lib/ExplorePane.svelte';

	export let demoId: number;
	export let sources: MrxMediaSource[];
	export let rundown: MrxEvent[]= []
	export let showNav = true;
	export let showExplore = true;

	// window dimensions - svelte binding
	let innerWidth = 0
	let innerHeight = 0

	$: {pageW.set(innerWidth);
		pageH.set(innerHeight)}
	$: forcePortrait = $pageW < 0.8* $pageH

	import DemoBanner from '$lib/Banner.svelte';
	import Overview from '$lib/Overview.svelte';
</script>
<svelte:window bind:innerWidth bind:innerHeight />

<div class="ui stackable grid">
	<div class="ui stretched row">
		<DemoBanner {demoId} {forcePortrait} />
	</div>
	<div class=" ui stretched row">
		<Overview {demoId} />
	</div>
	<div class=" ui stretched row">
		<div class="sixteen wide column">
			<div class="ui demoSeg orange segment">
				<div class="ui stackable grid">
					<div class="ui stretched row">
						{#if showNav}
							<Navigate {demoId} {sources}  {rundown} />
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
