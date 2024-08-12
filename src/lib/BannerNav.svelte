<script lang="ts">
	/**
	 * This is the navigation sidebar for the metarex demos
	 */

	import {
		cfgData,
		cfgEnv,
		pageW,
		pageH,
		pageAR,
	} from "$lib/mrx-demo-stores";
	import { afterNavigate } from "$app/navigation";
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import { md } from "$lib/markdown-it";
	// @ts-ignore ts(6137)
	import type { JQueryStatic } from "@types/jquery";
	import Sponsors from "$lib/BannerSponsors.svelte";
	export let demoId;
	export let mobile = false;

	let up = true;
	let jquery: JQueryStatic | null = null;
	let host: string;
	let protocol: string;
	let fullBase: string;
	let referrer: string;
	let next: number;
	let prev: number;

	const buttonClass = "ui label";

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
		else referrer = "..";

		// initialize the fomantic popup code
		// @ts-ignore ts(2339)
		jquery = window.$;
		jquery("#burger").popup({
			inline: "true",
			position: "bottom right",
			hoverable: true,
			delay: {
				show: 100,
				hide: 800,
			},
		});
		mrxApp = document.getElementById("mrxApp");
	});

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});

	let modeHtml = "";
	let mobileModeHtml = "";
	if ($cfgEnv.name == "development") {
		modeHtml = `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ui red text"><strong>Dev</strong> mode</span>`;
		mobileModeHtml = `<small><span class="ui red text"><strong>Dev:</strong></span></small>`;
	}

	// //use the fomantic javascript to redraw the contents of the selector
	// if (jquery)
	// 	jquery('#burgerMenu').dropdown({
	// 		action: 'activate',
	// 		onChange: (v: string, t: string, s: object) => selectionChanged(v, t, s),
	// 		values: values
	// 	});
</script>

{#if mobile}
<div class="titlerow">
	<div id="burger" class="ui basic icon button">
		<i class="hamburger icon"></i>
	</div>
	<div class="ui popup">
		<a class="center aligned item" href={nextDemoId}>
			<i class="arrow right icon"></i> next demo
		</a>
		<br />
		<a class="center aligned item" href={prevDemoId}>
			<i class="arrow left icon"></i> previous demo
		</a>
		<br />
		<a class="center aligned item" href="/">
			<i class="home icon"></i> home
		</a>
		<br />
		<a class="center aligned item" href="/app/register">
			<i class="id card outline icon"></i> Register
		</a>
		<br />
		<a class="center aligned item" href="/app/demos">
			<i class="play circle outline icon"></i> Demos
		</a>
		<br />
		<a class="center aligned item" href="/contact">
			<i class="mail icon"></i> Contact
		</a>
	</div>
	<div class= "ui segment">
		<h2 class="ui header">
			{@html mobileModeHtml}
			{@html md.renderInline($cfgData.demo[demoId - 1].description)}
		</h2>

		<Sponsors {demoId} mobile={true} />
	</div>
</div>
{:else}
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
						<span class="mini left floating ui orange label">
							<h4>{demoId}</h4>
						</span>
						{@html md.renderInline(
							$cfgData.demo[demoId - 1].description,
						)}
						{@html modeHtml}
					</h1>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.titlerow {
		display: flex;
		align-items: flex-start
	}
</style>
