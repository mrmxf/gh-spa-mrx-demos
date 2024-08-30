<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * The overview pane to explain what's going on
	 */
	import type { MrxSponsor } from "$lib/mrx-demo-defs";
	import { cfgData, sponsors } from "$lib/mrx-demo-stores";
	import { md } from "$lib/markdown-it";
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	export let demoId: number;
	export let forcePortrait = false;

	let demoCfg = $cfgData.demo[demoId - 1];
	let ovColor = "purple";

	//make an array of graphics for this demo
	let demoGfx: string[] = [];
	demoCfg.demoImages.forEach((gfx) => {
		let url = gfx.startsWith("http") ? gfx : `${base}/${gfx}`;
		demoGfx.push(url);
	});

	let dwellMilliseconds = $cfgData.appearance.overviewDwellSecs * 1000;
	let gfxNum = 0;

	onMount(() => {
		const interval = setInterval(() => {
			gfxNum += 1;
			let limit = forcePortrait ? demoGfx.length + 1 : demoGfx.length;
			gfxNum = gfxNum == limit ? 0 : gfxNum;
		}, dwellMilliseconds);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if forcePortrait}
	<div class="sixteen wide column">
		<div class="ui {ovColor} segment overviewSeg">
			{#if gfxNum == 0}
				<div class="maxImg description" style="overflow:hidden;">
					{@html md.render(demoCfg.demoSummary)}
				</div>
			{:else}
				<div class="ui image cImg">
					<img
						class=" oImg"
						src={demoGfx[gfxNum - 1]}
						alt="demo graphic {gfxNum - 1}"
					/>
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div class="sixteen wide column">
		<div class="ui equal width stackable grid">
			<div class="stretched stackable column">
				<div class="ui {ovColor} segment overviewSeg">
					<div class="maxImg description" style="overflow:hidden;">
						{@html md.render(demoCfg.demoSummary)}
					</div>
				</div>
			</div>
			<div class="stretched stackable column">
				<div class="ui {ovColor} segment overviewSeg">
					<div class="ui image cImg">
						<img
							class=" oImg"
							src={demoGfx[gfxNum]}
							alt="demo graphic {gfxNum}"
						/>
					</div>
				</div>
			</div>
		</div>
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
