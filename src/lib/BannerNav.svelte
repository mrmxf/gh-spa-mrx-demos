<script lang="ts">
	/**
	 * This is the navigation sidebar for the metarex demos
	 */

	 import { MOBILE } from "$lib/mrx-demo-stores";
	import { afterNavigate } from "$app/navigation";
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import { dev as DEV } from "$app/environment";

	// @ts-ignore ts(6137)
	import type { JQueryStatic } from "@types/jquery";
	export let demoId;

	let up = true;
	let jquery: JQueryStatic | null = null;
	let host: string;
	let protocol: string;
	let fullBase: string;
	let referrer: string;
	let next: number;
	let prev: number;
	let description = "";

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

	let dev = { btn: "", txt1: "", txt2: "" };
	if (DEV) {
		dev = { btn: "red", txt1: "DEV", txt2: "MODE" };
	}

	// //use the fomantic javascript to redraw the contents of the selector
	// if (jquery)
	// 	jquery('#burgerMenu').dropdown({
	// 		action: 'activate',
	// 		onChange: (v: string, t: string, s: object) => selectionChanged(v, t, s),
	// 		values: values
	// 	});
</script>

<div class="titlerow">
	<div class="ui vertical menu" style="display:flex;width:5rem;">
		<div id="burger" class="ui {dev.btn} basic icon button">
			{dev.txt1}<br /><i class="hamburger icon"></i>
		</div>
		{#if !$MOBILE}
		<div id="prev" class="ui {dev.btn} basic icon button">
			<a class="center aligned item" href={nextDemoId}>
				<i class="arrow right icon"></i>
			</a>
		</div>
		<div id="prev" class="ui {dev.btn} basic icon button">
			<a class="center aligned item" href={prevDemoId}>
				<i class="arrow left icon"></i>
			</a>
		</div>
		{/if}
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
	</div>

</div>

<style>
	.titlerow {
		display: flex;
		align-items: flex-start;
		height:100%;
	}
	.flexBannerWrapper {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: flex-start;
		gap: 1em 1em; /* row, column gap */
	}
	.flexMenu {
		display: flex;
		flex: none;
	}
	.flexTitle {
		display: flex;
		flex-grow: 4;
		max-width: 50%;
	}
</style>
