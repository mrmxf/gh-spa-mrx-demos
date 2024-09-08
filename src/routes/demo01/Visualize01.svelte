<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 */

	import { cfgData } from '$lib/inc/store-misc';
	import { base } from '$app/paths';
	import { source } from '$lib/inc/store-misc';

	export let demoId: number;

	// remove warning that demoId is unused
	demoId = demoId

	let width = $cfgData.appearance.visualize.width;
	let color = $cfgData.appearance.visualize.color;
</script>

<div class="{width} wide column">
	<div class="ui middle aligned {color} message" style="height:100%">
		Visualize: {$source ? $source.id : ''}
		<img class="ui fluid image" src="{base}/demo01/signiant-jet.png" alt="signiant jet" />
		{#if $source && $source.srcUrl.length > 0}
			<div class="ui message">Insert transfer graph here</div>
		{/if}
	</div>
</div>
