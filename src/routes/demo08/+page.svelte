<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo08 page layout
	 */
	import type { PageServerData } from './$types';
	import type { MrxMediaSource } from '$lib/mrx-demo-defs';
	export let data: PageServerData;

	//imported from +page.server.ts
	const demoId = data.demoId;
	const sources: MrxMediaSource[] = data.sources;

	import DemoBanner from '$lib/Banner.svelte';
	import Overview from '$lib/Overview.svelte';
	import Control from './Control08.svelte';
	import Explore from '$lib/ExplorePane.svelte';
	import Navigate from '$lib/Navigate.svelte';
	import Visualize from './Visualize08.svelte';
</script>

<div class="ui fluid purple segment">
	<DemoBanner {demoId} />
	<Overview {demoId} />

	<div class="ui orange segment">
		<div class="ui grid">
			<div class="row">
				<Navigate  {demoId} {sources} />
				<Control {demoId} />
				<Visualize {demoId} />
				<Explore {demoId} />
			</div>
		</div>
	</div>
	<!-- <svelte:component this={vvv} /> -->
</div>
