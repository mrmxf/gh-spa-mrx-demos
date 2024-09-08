<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 */

	import { cfgData, cfgEnv } from '$lib/inc/store-misc';
	import { base } from '$app/paths';
	import { source } from '$lib/inc/store-misc';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;
	let sourceId = '?';
	$: sourceId = $source ? $source.id : '?';

	let nextVideoUrl= $cfgEnv.path.mrxWebsiteUrl + '/r/'
</script>

<div class="{width} wide column">
	<div class="ui middle aligned {color} message" style="height:100%">
		<p class="ui center aligend container segment">
			News Item metadata from {sourceId} clip converted in Metarex Microservice for display in UI
		</p>
		<video class="ui image" autoplay loop muted id="play-{sourceId}" src="{base}/r/nxt.mp4">
		</video>
	</div>
</div>
