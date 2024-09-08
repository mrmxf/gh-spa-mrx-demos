<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo selection page
	 */
	import { cfgData, cfgEnv } from "$lib/inc/store-misc.js";
	import { base } from "$app/paths";
	// import type {*} from'@types/markdown-it';
	export let data;
	import DEBUG from "$lib/Debug.svelte";
	import BannerNav from "$lib/BannerNav.svelte";
	import HomePageCard from "$lib/HomePageCard.svelte";
	import HomePageTitle from "$lib/HomePageTitle.svelte";
	import { md } from "$lib/inc/markdown-it.js";
</script>

<DEBUG />
<div class="ui center aligned wide container" style="margin-top:1em;">
	<div class="ui horizontal segments">
		<BannerNav demoId={data.demoId} />
		<HomePageTitle />
	</div>
	<div class="ui center aligned fluid link cards">
		{#each $cfgData.demo as cfg}
			<HomePageCard {cfg} />
		{/each}
	</div>
</div>
