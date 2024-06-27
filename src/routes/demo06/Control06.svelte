<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Control06
	 */
	import { cfgData, source, reqRes, exploreTabs } from '$lib/mrx-demo-stores';
	import { MrxExploreEnumNames } from '$lib/mrx-demo-defs';
	import { mrxServiceDemo, mrxServiceExplore } from '$lib/mrxEtl';

	import type { MrxDemoCfg } from '$lib/mrx-demo-defs';
	import { base } from '$app/paths';
	import { mrxRegisterExplore } from '$lib/mrxEtl';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId;

	let width = $cfgData.appearance.control.width;
	let color = $cfgData.appearance.control.color;

	let value = [10, 100];
	let b = 0;
	let range = [20, 70];
	let range2 = [30, 40];

	let pastSourceId = 'none';

	$: if ($source && pastSourceId !== $source.id) {
		if ($source.srcReg) mrxRegisterExplore($source.srcReg, '');
		pastSourceId = $source.id;
	}
</script>

<div class="{width} wide column">
	<div class="ui {color} message" style="height:100%;">
		Control {$source ? $source.id : 'none - select a source'}
		<div class="ui fluid image">
			<img src="{base}/demo06/3d-mock.png" alt="3d view" />
		</div>
		<div class="ui label">H</div>
		<input type="range" value={b} min="0" max="10" style="width:100%;" />
		<div class="ui label">V</div>
		<input type="range" value={b} min="0" max="10" style="width:100%;" />
	</div>
</div>
