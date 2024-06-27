<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo selection page
	 */
	import { cfgData, cfgEnv } from '$lib/mrx-demo-stores';
	import { base } from '$app/paths';
	// import type {*} from'@types/markdown-it';
	export let data;
	import DemoNav from '$lib/BannerNav.svelte';
	import { md } from '$lib/markdown-it';

	let boothHTML = md.renderInline(
		'NAB 2024 - see us at ' +
			'[W1931](https://nab24.mapyourshow.com/8_0/floorplan/?st=keyword&sv=w1931&hallID=W&selectedBooth=W1931)' +
			' on the Signiant booth in the _West Hall_.'
	);
	let modeHtml = '';
	if ($cfgEnv.name == 'development') {
		modeHtml = `<br><span class="ui red text"><strong>Development</strong> mode</span>`;
	}
</script>

<div class="ui center aligned wide container" style="margin-top:1em;">
	<div class="ui center aligned sixten wide grid">
		<div class="ui middle aligned two wide column"><DemoNav demoId={data.demoId} /></div>
		<div class="ui middle aligned fourteen wide column">
			<div class="ui center aligned fluid green message">
				<div class="ui grid">
					<div class="two wide center middle aligned column">
						<img
							class="left floated tiny ui image"
							src="{base}/logo/signiant-logo.png"
							alt="signiant logo"
						/>
					</div>
					<div class="twelve wide center middle aligned column">
						<div class="content">{@html boothHTML}{@html modeHtml}</div>
					</div>
					<div class="two wide center middle aligned column">
						<img class="right floated mini ui image" src="{base}/logo/mrx-logo.svg" alt="rexy" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="ui center aligned fluid link cards">
		{#each $cfgData.demo as cfg}
			<div class="ui horizontal card">
				<div class="image flexCardImg">
					<img src="{base}/{cfg.imageUrl}" alt={cfg.altText} style="" />
				</div>
				<div class="left attached content">
					<div class="header">
						<a href="{base}/{cfg.demoUrl}/">
							<small><span class="ui black text">{cfg.demoId + ': '}</span></small>
							{@html md.renderInline(cfg.title.toString())}
						</a>
					</div>
					<div class="meta">{@html md.renderInline(cfg.description)}</div>
					<div class="description">{@html md.renderInline(cfg.body)}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.flexCardImg {
		background-color: #eeeeee;
		display: flex;
		align-items: center;
		align-content: center;
	}
</style>
