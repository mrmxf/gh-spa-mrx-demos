<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control09
	 */
	import { cfgData, source, reqRes, exploreTabs } from "$lib/inc/store-misc";
	import { MrxExploreEnum, MrxExploreEnumNames } from "$lib/inc/defs";
	import { mrxServiceDemo, mrxServiceExplore } from "$lib/mrxEtl";
	import { xIndex } from "./control09-stores";
	import { onMount } from "svelte";
	// @ts-ignore ts(6137)
	import type { JQueryStatic } from "@types/jquery";

	import { loqSources, type VC6Ladder } from "./config09-data";
	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let jquery: JQueryStatic;
	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

	let showLoq = 0;
	let min = 0;
	let max = 4;

	let loqLadder: VC6Ladder[] | undefined;
	let totalBitrate: number | undefined = 0;
	let loqPercent: number[] | undefined;
	let loqBrLabel: string[] | undefined;

	onMount(() => {
		// @ts-ignore ts(2339)
		jquery = window.$;
		showLoq = 0;
	});

	function brString(br: number) {
		if (br > 1000000000) {
			return `${Math.floor(br / 100000000) / 10} Gbs`;
		}
		if (br > 1000000) {
			return `${Math.floor(br / 100000) / 10} Mbs`;
		}
		return `${Math.floor(br / 100) / 10} kbs`;
	}
	$: loqLadder = $source ? loqSources[$source.id] : undefined;
	$: xIndex.set(showLoq);
	$: loqPercent =
		loqLadder && totalBitrate
			? loqLadder.map((v, i) =>
					v && totalBitrate
						? Math.floor((100 * v.fileSizeBytes) / totalBitrate)
						: 0,
				)
			: undefined;
	$: loqBrLabel = loqLadder
		? loqLadder.map((v, i) => brString(v.fileSizeBytes))
		: undefined;
	$: totalBitrate = loqLadder
		? loqLadder.reduce((sum, v) => sum + v.fileSizeBytes, 0)
		: undefined;
	function activateBars(activeBar:number){
		jquery("#bar0").progress('remove active');
		jquery("#bar1").progress('remove active');
		jquery("#bar2").progress('remove active');
		jquery("#bar3").progress('remove active');
		jquery("#bar4").progress('remove active');
		jquery(`#bar${activeBar}`).progress('set active');
	}
	// adding showLoq >=0 forces the initialization of the progress bars
	$: if (jquery && $source && (showLoq>=0)) {activateBars(showLoq)}
	// let clone = JSON.parse(JSON.stringify(loqLadder, undefined, 2));
	// clone.fileName = $source.clip + "_" + clone.fileName;
	// let jsonStr = JSON.stringify(clone, undefined, 2);
	// $exploreTabs.push({
	// 	title: "loq: " + $source.name,
	// 	type: MrxExploreEnum.Json,
	// 	isReq: false,
	// 	isRes: false,
	// 	stringData: jsonStr,
	// 	size: jsonStr.length,
	// });
	$: displayBitrate = totalBitrate ? brString(totalBitrate) : undefined;
</script>

<div class="{width} wide stretched column">
	<div class="ui {color} message">
		{@html $source
			? `<strong>${$source.id}</strong> clip`
			: "nothing selected"}
		<div class="ui fluid image">
			Which Level of Quality (<strong>LoQ</strong>) should be pulled from
			the cloud?<br />
			<div class="ui center aligned {color} segment">
				LoQ = <input
					style="width:6em;"
					type="number"
					bind:value={showLoq}
					{min}
					{max}
				/>
				<br />
				<input
					style="width:100%;"
					type="range"
					bind:value={showLoq}
					{min}
					{max}
				/>
				8k bitrate = {displayBitrate}
			</div>
			{#if $source && $source.srcUrl && $source.srcUrl.length > 0 && loqLadder}
				{#each loqLadder as loq, i}
					<div
						id="bar{i}"
						class="ui progress"
						data-percent={loqPercent ? loqPercent[i] : 0}
					>
						<div class="bar">
							<div class="progress"></div>
						</div>
						<div class="label">
							{loqBrLabel ? loqBrLabel[i] : ""}
							<small>({loqPercent ? loqPercent[i] : "0"}%)</small>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
