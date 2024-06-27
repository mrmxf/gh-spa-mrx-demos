<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo11 page layout
	 */
	import type { PageServerData } from './$types';
	import type { MrxMediaSource } from '$lib/mrx-demo-defs';
	export let data: PageServerData;

	//imported from +page.server.ts
	const demoId = data.demoId;
	const sources: MrxMediaSource[] = data.sources;

	import DemoPage from '$lib/DemoPage.svelte';
	import Control from '$lib/Control.svelte';
	import Visualize from '$lib/Visualize.svelte';
</script>

<DemoPage {demoId} {sources}>
	<Control {demoId} {sources} />
	<Visualize {demoId} />
</DemoPage>
