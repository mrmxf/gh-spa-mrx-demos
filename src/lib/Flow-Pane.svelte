<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * The overview pane to explain what's going on
	 */
	import type { MrxDemoFlow } from "$lib/mrx-demo-defs";
	import { cfgData, MOBILE, DBG } from "$lib/mrx-demo-stores";
	import { md } from "$lib/markdown-it";
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	$DBG = true;

	export let demoId: number;

	let demoCfg = $cfgData.demo[demoId - 1];
	let ovColor = "purple";

	//make an array of panels for this demo
	let panels: MrxDemoFlow[] = [];
	demoCfg.flowPanels.forEach((p) => {
		let t: MrxDemoFlow = {};
		if (p.img) {
			//# fix image url for local / online
			t.img = p.img.startsWith("http") ? p.img : `${base}/${p.img}`;
		}
		if (p.md) {
			t.md = p.md;
		}
		panels.push(t);
	});

	let dwellMilliseconds = $cfgData.appearance.overviewDwellSecs * 1000;
	let panelIndex = 0;
	let pnl: MrxDemoFlow = panels[0];

	onMount(() => {
		const interval = setInterval(() => {
			panelIndex += 1;
			let limit = panels.length;
			panelIndex = panelIndex == limit ? 0 : panelIndex;
			pnl = panels[panelIndex];
		}, dwellMilliseconds);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if $MOBILE}
	<div class="sixteen wide column">
		<div class="ui {ovColor} segment overviewSeg">
			{#if panelIndex == 0}
				<div class="maxImg description" style="overflow:hidden;">
					{@html md.render(demoCfg.demoSummary)}
				</div>
			{:else}
				<div class="ui image cImg">
					<img
						class=" oImg"
						src={pnl.img}
						alt="demo graphic {panelIndex - 1}"
					/>
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div class="ui equal width segments">
		{#if pnl.md}
			<div class="ui {ovColor} segment overviewSeg">
				{@html md.render(pnl.md)}
			</div>
		{/if}
		{#if pnl.img}
			<div class="ui {ovColor} segment overviewSeg">
				<div class="ui image cImg">
					<img
						class=" oImg"
						src={pnl.img}
						alt="demo graphic {panelIndex}"
					/>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.oImg {
		object-fit: contain;
		max-height: 19vh;
	}
	.cImg {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		max-height: 20vh;
	}
	.overviewSeg {
		display: block;
		background-color: #fef6f1;
		min-height: 20vh;
	}
</style>
