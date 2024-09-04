<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 */

	import { cfgData, MOBILE, DBG } from "$lib/mrx-demo-stores";

	import BannerNav from "$lib/BannerNav.svelte";
	import Description from "$lib/Description.svelte";
	import SponsorPane from "$lib/Sponsor-pane.svelte";

	export let demoId: number;
	//set banner vertical height
	let bvh = $cfgData.appearance.topHeight;

	// prevent an out of bounds display of description for non-demo pages
	$: description =
		demoId && demoId > 0 && demoId <= $cfgData.demo.length
			? $cfgData.demo[demoId - 1].description
			: "";
</script>

<!-- --- mobile variant has fewer segments--------------------------------- -->
<div class="ui horizontal segments" style="max-height:{bvh};">
	{#if $MOBILE}
		<BannerNav {demoId} />
		<div class="ui segment">
			<Description {demoId} />
			<SponsorPane {demoId} />
		</div>
		<div class="ui segment">
			<SponsorPane {demoId} justLogo={true}/>
		</div>
	{:else}
		<BannerNav {demoId} />
		<Description {demoId} />
		<SponsorPane {demoId} />
	{/if}
</div>

<style>
	/* color copied from purple message color */
	.ui.horizontal.segments > .segment {
		background-color: #f6e7ff;
	}
</style>
