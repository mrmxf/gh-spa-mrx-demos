<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * display the sponsors of this demo
	 */
	import type { MrxSponsor } from "$lib/mrx-demo-defs";
	import { cfgData, sponsors, MOBILE, pageW } from "$lib/mrx-demo-stores";
	import { onMount } from "svelte";
	import QR from "./Sponsor-pane-qr.svelte";

	export let demoId: number;
	export let justLogo: boolean = false;

	let demoCfg = $cfgData.demo[demoId - 1];

	let demoSponsors: MrxSponsor[] = [];
	demoCfg.sponsorIds.forEach((sponsorId) => {
		$sponsors.forEach((s) => {
			if (s.id == sponsorId) demoSponsors.push(s);
		});
	});

	let dwellMilliseconds = $cfgData.appearance.sponsorDwellSecs * 1000;
	let index = 0;
	let sponsor: MrxSponsor = demoSponsors[index];

	onMount(() => {
		const interval = setInterval(() => {
			index += 1;
			index = index == demoSponsors.length ? 0 : index;
			sponsor = demoSponsors[index];
		}, dwellMilliseconds);

		return () => {
			clearInterval(interval);
		};
	});
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
	<div class=" ui horizontal segments clamped">
		<div class=" fluid segment clamped">
			<div class=" ui horizontal segments clamped" style="margin: 0 auto;">
				<div class=" ui center middle aligned segment clamped">
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
				<div class=" ui segment clamped">
					<h4 class="header">{sponsor.name}</h4>
					<p class="sTag">
						<span class="ui blue text">{sponsorTag}</span>
					</p>
					<p class="sWho">
						<span class="ui grey text">{sponsorWho}</span>
					</p>
					<div class="ui horizontal basic equal width segments" style="margin: 0 auto;">
						{#if sponsor.homeUrl}
							<div class="ctr segment">
								<a href={sponsor.homeUrl} target="_blank">
									<div class="ui centered label">
										<i class="home icon"></i>
										<i class="external alternate blue icon"></i>
									</div>
								</a>
							</div>
						{/if}
						{#if sponsor.contactUrl}
							<div class="ctr segment" style="max-height:100%">
								<a href={sponsor.contactUrl} target="_blank">
									<div class="ui small centered label">
										<i class="envelope outline icon"></i>
										<i class="external alternate blue icon"></i>
									</div>
								</a>
							</div>
						{/if}
					</div>

				</div>
			</div>

			<div class="segment">
			</div>
		</div>
		<div class="ui segment" style="width:30%;max-height:100%;">
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
	}
	.cover {
		object-fit: contain;
	}
</style>
