<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Common Explore Pane - a set of tabs (selected Header+body) components
	 */

	import { DBG, cfgData, source, exploreTabs, activeExploreTabNumber } from '$lib/inc/store-misc';

	import TabSelect from '$lib/Explore-selector.svelte';
	import TabBody from '$lib/Explore-body.svelte';
	import { type MrxCfgData, type MrxExploreTab, MrxExploreEnum } from './inc/defs';

	export let demoId: number;

	let width = $cfgData.appearance.explore.width;
	let color = $cfgData.appearance.explore.color;
	let paneHeight = `min-height:${$cfgData.appearance.botHeight};max-height:${$cfgData.appearance.botHeight};`;
	let height: number;
	let previousDemoId: number = -1;
	let lastRenderLength = -1;

	// reset the explore tab if we jump to a new demo
	$: if (previousDemoId !== demoId) {
		let strData = $cfgData.demo[demoId - 1].exploreMd;
		let size = strData ? strData.length : 0;

		$exploreTabs = [
			{
				title: $cfgData.demo[demoId - 1].title,
				type: MrxExploreEnum.Home,
				stringData: strData,
				size: size
			}
		];
		$activeExploreTabNumber = 1;
		previousDemoId = demoId;
	}

	// jump to a new tab if one is added
	$: if ($exploreTabs.length != lastRenderLength) {
		lastRenderLength = $exploreTabs.length;
		$activeExploreTabNumber = lastRenderLength;
	}
</script>

<div id="expore-div" bind:clientHeight={height} class="ui {width} wide stackable column" style="{paneHeight}">
	<div class="ui {color} message" style="height:100%;">
		{#if $DBG}<p class="small">
				explore: {height}px, source: {$source ? $source.name : 'none'}, #tabs: {$exploreTabs.length}
			</p>{/if}
		<TabSelect />
		<TabBody />
	</div>
</div>
