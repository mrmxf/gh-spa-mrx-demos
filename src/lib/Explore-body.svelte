<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Explore-body - display the body of the selected tab
	 */
	import { DBG, exploreTabs, activeExploreTabNumber } from '$lib/mrx-demo-stores';
	import { base } from '$app/paths';
	import PrismPane from '$lib/PrismPane.svelte';
	import { md } from '$lib/markdown-it';
	import type { MrxExploreTab } from '$lib/mrx-demo-defs';
	import { MrxExploreEnumNames } from '$lib/mrx-demo-defs';
	import { MrxExploreEnum, MrxExploreViewers, MrxExploreView } from './mrx-demo-defs';

	let tabsExist = false;
	let type: MrxExploreEnum;
	let tab: MrxExploreTab;
	let viewer: MrxExploreViewers;
	let codeType: MrxExploreEnum = MrxExploreEnum.Text;
	let bodyStr: string;

	let color = 'red';
	$: tabsExist =
		$exploreTabs.length > 0 &&
		$activeExploreTabNumber > 0 &&
		$activeExploreTabNumber <= $exploreTabs.length;

	$: if (tabsExist) {
		tab = $exploreTabs[$activeExploreTabNumber - 1];
		type = tab.type;
		codeType = type;
		// @ts-ignore ts(2322)
		viewer = MrxExploreView[type] ? MrxExploreView[type] : MrxExploreViewers.Code;
		// if (type == 'img') imgUrl = URL.createObjectURL(data);
		//if (type in MrxExploreCodeAlias) codeType = MrxExploreCodeAlias[type];

		bodyStr = tab.stringData ? tab.stringData : 'No string data';
		if (viewer == MrxExploreViewers.Image) {
			bodyStr = tab.blobData ? URL.createObjectURL(tab.blobData) : '';
			bodyStr = `${base}/${bodyStr}`;
		}
	}
	$: tab = $exploreTabs[$activeExploreTabNumber - 1];
</script>

{#if tabsExist}
	{#if $DBG}
		{@html md.render(`Tab[${$activeExploreTabNumber - 1}] type=${MrxExploreEnumNames[type]}`)}
	{/if}
	{#if type == MrxExploreEnum.Home}
		<div class="ui blue message">{@html md.render(bodyStr)}</div>
	{:else if viewer == MrxExploreViewers.Markdown}
		<div style="height:100%;">{@html md.render(bodyStr)}</div>
	{:else if viewer == MrxExploreViewers.Image}
		{#if $DBG}url: {tab.blobUrl}{/if}
		<img class="ui medium image" src={tab.blobUrl} alt="response" />
	{:else if viewer == MrxExploreViewers.Audio}
		Pending: WAV player for .wav file
	{:else if viewer == MrxExploreViewers.Video}
		Pending: video player for .mp4 file
	{:else if tab.size}
		<PrismPane langIndex={type} code={tab.stringData}></PrismPane>
	{:else}
		<p>No data to display</p>
	{/if}
{:else}
	<div class="ui blue message">No data</div>
{/if}
