<script lang="ts">
	/**
	 * This is the navigation sidebar for the metarex demos
	 */

	import { cfgData, cfgEnv } from '$lib/mrx-demo-stores';
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { md } from '$lib/markdown-it';

	export let demoId;
	let up = true;

	let host: string;
	let protocol: string;
	let fullBase: string;
	let referrer: string;
	let next: number;
	let prev: number;

	const buttonClass = 'ui label';

	let mrxApp: HTMLElement | null;

	if (!demoId) {
		//if the currentDemoIndex is not set, then we're at the root page
		next = 1;
		prev = 12;
		up = false;
	} else {
		next = demoId == 12 ? 1 : demoId + 1;
		prev = demoId == 1 ? 12 : demoId - 1;
	}
	let nextDemoId = next > 9 ? `demo${next}` : `demo0${next}`;
	let prevDemoId = prev > 9 ? `demo${prev}` : `demo0${prev}`;
	onMount(() => {
		host = window.location.host;
		protocol = window.location.protocol;
		fullBase = `${protocol}//${host}/`;
		if (document.referrer) referrer = document.referrer;
		else referrer = '..';

		mrxApp = document.getElementById('mrxApp');
	});

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});
	let demoCfg = $cfgData.demo[demoId - 1];
	let modeHtml = '';
	if ($cfgEnv.name == 'development') {
		modeHtml = `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ui red text"><strong>Dev</strong> mode</span>`;
	}

	function openFullscreen() {
		if (!mrxApp) return;
		if (mrxApp.requestFullscreen) {
			mrxApp.requestFullscreen();
			// @ts-ignore: ts(2551)
		} else if (mrxApp.webkitRequestFullscreen) {
			/* Safari */
			// @ts-ignore: ts(2551)
			mrxApp.webkitRequestFullscreen();
			// @ts-ignore: ts(2551)
		} else if (mrxApp.msRequestFullscreen) {
			/* IE11 */
			// @ts-ignore: ts(2551)
			mrxApp.msRequestFullscreen();
		}
	}
</script>

<div class="ui grid">
	<div class="ui two wide stretched column">
		<div class="segment">
			<div class="ui compact vertical icon menu">
				<a class="center aligned item" href={nextDemoId}>
					<i class="arrow right icon"></i>
				</a>

				<a class="center aligned item" href={prevDemoId}>
					<i class="arrow left icon"></i>
				</a>

				<a class="center aligned item" href={fullBase}>
					<i class="home icon"></i>
				</a>

				<!-- <a class="center aligned item" href={'#'} on:click={openFullscreen}>
					<i class="expand icon"></i>
				</a> -->
			</div>
		</div>
	</div>
	{#if $cfgData.demo[demoId - 1]}
		<div class="ui fourteen wide left middle aligned stretched column">
			<div class="ui segment">
				<h1 class="ui header">
					<span class="mini left floating ui orange  label">
						<h4>{demoId}</h4>
					</span>
					{@html md.renderInline($cfgData.demo[demoId - 1].description)}
					{@html modeHtml}
				</h1>
			</div>
		</div>
	{/if}
</div>
