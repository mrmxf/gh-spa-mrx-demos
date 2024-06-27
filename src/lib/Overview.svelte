<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * The overview pane to explain what's going on
	 */
	import type { MrxSponsor } from '$lib/mrx-demo-defs';
	import { cfgData, sponsors } from '$lib/mrx-demo-stores';
	import { md } from '$lib/markdown-it';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	export let demoId: number;

	let demoCfg = $cfgData.demo[demoId - 1];
	let ovColor = 'purple';

	//make an array of graphics for this demo
	let demoGraphics: string[] = [];
	demoCfg.demoImages.forEach((gfx) => {
		let url = gfx.startsWith('http') ? gfx : `${base}/${gfx}`;
		demoGraphics.push(url);
	});

	let dwellMilliseconds = $cfgData.appearance.overviewDwellSecs * 1000;
	let gfxIndex = 0;

	onMount(() => {
		const interval = setInterval(() => {
			gfxIndex += 1;
			gfxIndex = gfxIndex == demoGraphics.length ? 0 : gfxIndex;
		}, dwellMilliseconds);

		return () => {
			clearInterval(interval);
		};
	});
</script>

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
					<img class=" oImg" src="{demoGraphics[gfxIndex]}" alt="demo graphic {gfxIndex}" />
				</div>
			</div>
		</div>
	</div>
</div>

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
