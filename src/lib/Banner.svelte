<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 */
	export let demoId: number;
	import Sponsors from '$lib/BannerSponsors.svelte';
	import DemoNav from '$lib/BannerNav.svelte';

	let bnColor = 'black';
</script>

<!-- --- grid defined in +page.svelte-------------------------------------- -->
<div class="sixteen wide column">
	<div class="stretched row">
		<div class="ui equal width stackable grid">
			<div class=" stackable center middle aligned column">
				<div class="ui {bnColor} segment overviewSeg">
					<DemoNav {demoId} />
				</div>
			</div>
			<div class=" stackable center middle aligned column">
				<div class="ui {bnColor} segment overviewSeg">
					<Sponsors {demoId} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.banner {
		min-height: 20vh;
	}
</style>
