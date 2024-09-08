<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * The overview pane to explain what's going on
	 */
	import type { MrxDemoFlow } from "$lib/inc/defs";
	import { cfgData, MOBILE, PANEL, pageW, DBG } from "$lib/inc/store-misc";
	import { md } from "$lib/inc/markdown-it";
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	export let demoId: number;

	let demoCfg = $cfgData.demo[demoId - 1];
	let ovColor = "purple";

	//make an array of panels for this demo
	let panels: MrxDemoFlow[] = [];
	demoCfg.flowPanels.forEach((p) => {
		let t: MrxDemoFlow = { mnu: p.mnu };
		if (p.img) {
			//# fix image url for local / online
			t.img = p.img.startsWith("http") ? p.img : `${base}/${p.img}`;
		}
		if (p.md) {
			t.md = p.md;
		}
		panels.push(t);
	});

	let dwellMilliseconds = $cfgData.appearance.flowDwellSecs * 1000;
	let pnl: MrxDemoFlow = panels[0];
	let interval: number;
	let fontScale: number;

	let incPANEL = () => {
		$PANEL += 1;
		let limit = panels.length;
		$PANEL = $PANEL == limit ? 0 : $PANEL;
		pnl = panels[$PANEL];
	};

	onMount(() => {
		interval = setInterval(incPANEL, dwellMilliseconds);

		return () => {
			clearInterval(interval);
		};
	});
	//force update of screen if user clicks on a direct access button
	$: {
		pnl = panels[$PANEL];
		clearInterval(interval);
		interval = setInterval(incPANEL, dwellMilliseconds);
	}
	$: fontScale = 0.1 * Math.floor(($pageW - 900) / 80);
	$: fontScale = fontScale < 1 ? 1 : fontScale > 1.7 ? 1.7 : fontScale;
</script>

{#if $MOBILE}
	{#if pnl.md}
		<div
			class="ui {ovColor} segment mob-overviewSeg"
			style="font-size: {fontScale}em;"
		>
			<!-- {@html md.render(`## Panel ${$PANEL}`)} -->
			{@html md.render(pnl.md)}
		</div>
	{/if}
	{#if pnl.img}
		<div class="ui {ovColor} segment mob-overviewSeg">
			<div class="ui image cImg">
				<img class=" oImg" src={pnl.img} alt="demo graphic {$PANEL}" />
			</div>
		</div>
	{/if}
{:else}
	<div class="ui equal width horizontal segments" style="height:90%;">
		{#if pnl.md}
			<div
				class="ui {ovColor} segment overviewSeg"
				style="font-size: {fontScale}em;"
			>
				<!-- {@html md.render(`## Panel ${$PANEL}`)} -->
				{@html md.render(pnl.md)}
			</div>
		{/if}
		{#if pnl.img}
			<div class="ui {ovColor} segment overviewSeg">
				<div class="ui image cImg">
					<img
						class=" oImg"
						src={pnl.img}
						alt="demo graphic {$PANEL}"
					/>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.oImg {
		object-fit: contain;
	}
	.cImg {
		height: 100%;
		display: block;
		justify-content: center;
		align-items: center;
	}
	.mob-overviewSeg {
		background-color: #fef6f1;
	}
		.overviewSeg {
		background-color: #fef6f1;
		min-height: 20vh;
		height: 100%;
	}
</style>
