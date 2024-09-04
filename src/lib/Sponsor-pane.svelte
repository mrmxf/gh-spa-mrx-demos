<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * display the sponsors of this demo
	 */
	import type { MrxSponsor } from "$lib/mrx-demo-defs";
	import { cfgData, sponsors, MOBILE, SPIDX } from "$lib/mrx-demo-stores";
	import { onMount } from "svelte";
	import QR from "./Sponsor-pane-qr.svelte";

	export let demoId: number;
	export let justLogo: boolean = false;

	//set banner vertical height
	let bvh = $cfgData.appearance.topHeight;
	let demoCfg = $cfgData.demo[demoId - 1];

	let demoSponsors: MrxSponsor[] = [];
	demoCfg.sponsorIds.forEach((sponsorId) => {
		$sponsors.forEach((s) => {
			if (s.id == sponsorId) demoSponsors.push(s);
		});
	});

	let dwellMilliseconds = $cfgData.appearance.sponsorDwellSecs * 1000;
	$SPIDX = 0;
	let sponsor: MrxSponsor;

	let interval: number;
	let setTimer = () => {
		$SPIDX += 1;
		$SPIDX = $SPIDX >= demoSponsors.length ? 0 : $SPIDX;
	};

	onMount(() => {
		interval = setInterval(setTimer, dwellMilliseconds);
		return () => {
			clearInterval(interval);
		};
	});
	// reset the sponsor if it is changed by another component
	$: {
		sponsor = demoSponsors[$SPIDX];
		clearInterval(interval);
		interval = setInterval(setTimer, dwellMilliseconds);
	}
	$: sponsorWho = sponsor.who ? sponsor.who : " ";
	$: sponsorTag = sponsor.tagline ? sponsor.tagline : " ";
</script>

{#if $MOBILE}
	{#if justLogo}
		<a href={sponsor.contactUrl} target="_blank">
			<div class="sLogo ui basic segment">
				<img
					class="ui top aligned tiny image"
					src={sponsor.logo}
					alt="sponsor"
				/>
			</div>
		</a>
	{:else}
		<p>
			<span class="ui purple text">Sponsor:</span>
			<strong>{sponsor.name}</strong>
			{#if sponsor.homeUrl}
				<a href={sponsor.homeUrl} target="_blank">
					<div class="ui label">
						<i class="home icon"></i>
						<i class="external alternate small blue icon"></i>
					</div>
				</a>
			{/if}
			{#if sponsor.contactUrl}
				<a href={sponsor.contactUrl} target="_blank">
					<div class="ui small label">
						<i class="envelope outline icon"></i>
						<i class="external alternate small blue icon"></i>
					</div>
				</a>
			{/if}
		</p>
	{/if}
{:else}
	<div class="ui horizontal basic segments clamped" style="width:35vw;height:{bvh};">
		<div class="segment clamped" style="height:{bvh};">
			<div class="ui horizontal segments clamped" style="margin:0 auto;height:{bvh};">
				<div
					class="ui center middle aligned segment clamped"
					style="width:12vw;"
				>
					<a
						class="clamped"
						href={sponsor.contactUrl}
						target="_blank"
					>
						<img
							class="clamped"
							src={sponsor.logo}
							alt="sponsor"
							style="display:inline-block;object-fit:contain;min-width:50px;min-height:50px;"
						/>
					</a>
				</div>
				<div
					class="ui segment clamped"
					style="overflow: scroll-vertical;width:23vw;"
				>
					<h4 class="header">{sponsor.name}</h4>
					<p class="sTag">
						<span class="ui blue text">{sponsorTag}</span>
					</p>
					<p class="sWho">
						<span class="ui grey text">{sponsorWho}</span>
						{#if sponsor.homeUrl}
							<a href={sponsor.homeUrl} target="_blank">
								<div class="ui small centered label">
									<i class="home icon"></i>
								</div>
							</a>
						{/if}
						{#if sponsor.contactUrl}
							<a href={sponsor.contactUrl} target="_blank">
								<div class="ui small centered label">
									<i class="envelope outline icon"></i>
								</div>
							</a>
						{/if}
					</p>
				</div>
			</div>

			<div class="segment"></div>
		</div>
		<div
			class="ui segment"
			style="width:10vh;min-width:10vh;max-height:100%;"
		>
			<QR data={sponsor.qrdata} logo={sponsor.logo} />
		</div>
	</div>
{/if}

<style>
	.sTag {
		margin-top: -1.4em;
		font-size: 80%;
	}
	.sWho {
		margin-top: -0.8em;
		font-size: 90%;
		line-height: 1.1em;
	}
	.ctr {
		text-align: center;
	}
	.clamped {
		max-width: 100%;
		max-height: 100%;
		margin: 0 auto;
		overflow: hidden;
	}
</style>
