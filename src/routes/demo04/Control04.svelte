<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control04 - rnf AI harmonization
	 */
	import { cfgData, source, reqRes, exploreTabs } from '$lib/inc/store-misc';
	import { mrxServiceDemo, mrxServiceExplore } from '$lib/mrxEtl';
	import { etlMdStr } from './control04-stores';
	import { md } from '$lib/inc/markdown-it';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

	let rrIndex: Promise<number> | number = -1;
	let previousSourceId = 'gone';

	$: if (
		$source &&
		$source.id.length > 2 &&
		$source?.serviceData &&
		previousSourceId !== $source.id
	) {
		previousSourceId = $source.id;
		//check this update has a valid source and xtra
		let selectedService = $source.serviceData[0];
		if (selectedService && selectedService.type) {
			rrIndex = mrxServiceDemo($source, selectedService);
			//when this synchronous call returns we can decide what to display
			if (typeof rrIndex == 'number') {
				mrxServiceExplore({ index: rrIndex, req: true, res: true });
				//force refresh
				$source = $source;
				$exploreTabs = $exploreTabs;
			}
		}
		//force re-render
		$source = $source;
	}
	$: last = $reqRes.length - 1;
</script>

<div class="{width} wide column">
	<div class="ui {color} message" style="height:100%;">
		{#if $source}
			Control {$source.id}
			<div class="ui fluid image">
				Indicate the conversion type here...<br />
				{@html md.render($etlMdStr)}
				{#if $reqRes[last] && $reqRes[last].res}
					{$reqRes[last].res.size} bytes generated
				{/if}
			</div>
		{/if}
	</div>
</div>
