<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Visualize12
	 */
	import type { MrxDemoCfg } from '$lib/inc/defs';
	import { base } from '$app/paths';
	import { cfgEnv, cfgData } from '$lib/inc/store-misc';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;

	const videoUrl= $cfgEnv.path.mrxWebsiteUrl + "/rnf/sources/rnf-sizzle.mp4"
</script>

<div class="{width} wide column">
	<div class="ui middle center aligned {color} message" style="height:100%">
		<div class="ui large image">
			<video class="ui image" autoplay loop muted id="play-{demoId}" src="{videoUrl}">
			</video>
		</div>
	</div>
</div>
