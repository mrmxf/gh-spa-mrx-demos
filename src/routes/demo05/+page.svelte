<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo05 page layout
	 */
	import type { PageServerData } from './$types';
	import type { MrxMediaSource } from '$lib/inc/defs';

	export let data: PageServerData;

	//imported from +page.server.ts
	const demoId = data.demoId;
	const sources: MrxMediaSource[] = data.sources;

	import DemoPage from '$lib/DemoPage.svelte';
	import Control from './Control05.svelte';
	import Visualize from './Visualize05.svelte';
</script>

<DemoPage {demoId} {sources}>
	<Control {demoId} />
	<Visualize {demoId} />
</DemoPage>
