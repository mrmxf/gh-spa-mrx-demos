<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control09
	 */
	import { cfgData, source, reqRes, exploreTabs } from '$lib/mrx-demo-stores';
	import { MrxExploreEnum, MrxExploreEnumNames } from '$lib/mrx-demo-defs';
	import { mrxServiceDemo, mrxServiceExplore } from '$lib/mrxEtl';
	import { xIndex } from './control09-stores';
	import { onMount } from 'svelte';
	// @ts-ignore ts(6137)
	import type { JQueryStatic } from '@types/jquery';

	import { loqLadderFire as loqLadder } from './config09-data';
	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let jquery: JQueryStatic;
	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

	let loq = 0;
	let min = 0;
	let max = 4;

	let loqBitrate = ['-', '-', '-', '-', '-'];
	let loqRatioStr = '20, 20, 20, 20, 20';

	onMount(() => {
		// @ts-ignore ts(2339)
		jquery = window.$;
		jquery('#bar1').progress();
		loq = 0;
	});

	$: xIndex.set(loq);

	$: if ($source && $source.srcUrl && $source.srcUrl.length > 0) {
		let loqs = loqLadder;
		let total = loqs.reduce((sum, v) => sum + v.fileSizeBytes, 0);
		loqRatioStr = '';
		for (let i = 0; i < loqs.length; i++) {
			let kbs = 0.024 * 8 * loqs[i].fileSizeBytes;
			loqBitrate[i] = kbs > 1000 ? (kbs / 1000).toFixed(2) + 'Mbs' : kbs.toFixed(2) + 'kbs';
			loqRatioStr += Math.round((100 * loqs[i].fileSizeBytes) / total).toString() + ',';
		}
		//trim off the final comma from the loqRatio string
		loqRatioStr = loqRatioStr.slice(0, loqRatioStr.length - 1);
		// loqRatioStr = '55,27,14,3,1';
		let clone = JSON.parse(JSON.stringify(loqLadder, undefined, 2));
		clone.fileName = $source.clip + '_' + clone.fileName;
		let jsonStr = JSON.stringify(clone, undefined, 2);
		$exploreTabs.push({
			title: 'loq: ' + $source.name,
			type: MrxExploreEnum.Json,
			isReq: false,
			isRes: false,
			stringData: jsonStr,
			size: jsonStr.length
		});
	}
</script>

<div class="{width} wide column">
	<div class="ui {color} message" style="height:100%;">
		Control {$source ? $source.id : 'nothing selected'}
		<div class="ui fluid image">
			Which Level of Quality (loq) should be pulled from the cloud?<br />
			<div class="ui center aligned {color} segment">
				LoQ = <input style="width:6em;" type="number" bind:value={loq} {min} {max} />
				<br />
				<input style="width:15em;" type="range" bind:value={loq} {min} {max} />
			</div>
			{#if $source && $source.srcUrl && $source.srcUrl.length > 0}
				<div id="bar1" class="ui multiple progress" data-percent={loqRatioStr}>
					<div class="black bar"></div>
					<div class="blue bar"></div>
					<div class="purple bar"></div>
					<div class="green bar"></div>
					<div class="yellow bar"></div>
				</div>
				Bitrate ratios per LoQ 0-{$xIndex}
			{/if}
		</div>
	</div>
</div>
