<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control12
	 */
	import { cfgData, source, reqRes, exploreTabs } from '$lib/mrx-demo-stores';
	import { mrxServiceDemo, mrxServiceExplore } from '$lib/mrxEtl';
	import { md } from '$lib/markdown-it';

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
		let service = $source.serviceData.length > 1 ? $source.serviceData[1] : null;
		if (service && service.type) {
			rrIndex = mrxServiceDemo($source, service);
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
		Click the IET source<br><br>
		{#if $source && $source.serviceData &&  $source.serviceData.length>1}
			Check the Explore pane for the auto-generated
			<strong><code>FFMPEG</code></strong> cut list. This shows how a
			metadata transform framework can help build simple
			 <strong>Zapier-like</strong> workflows.
		{/if}
	</div>
</div>
