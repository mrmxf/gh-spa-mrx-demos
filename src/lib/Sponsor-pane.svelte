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

	let sponsorWho = sponsor.who ? sponsor.who : "&nbsp;";
	let sponsorTag = sponsor.tagline ? sponsor.tagline : "&nbsp;";

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
	$: sponsorPane = `width:${Math.floor($pageW * 0.45)}px;max-height:100%;`;
	$: spLogo = `width:${Math.floor($pageW * 0.45 * 0.3)}px;height:${Math.floor($pageW * 0.45 * 0.3)}px;`;
	$: spCard = `width:70%;max-height:100%;`;
	$: spQR = `width:30%;;max-height:100%;`;
</script>

{#if $MOBILE}
	{#if justLogo}
		<a href={sponsor.contactUrl} target="_blank">
			<div class="ui basic segment">
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
	<div class="ui horizontal segments" style={sponsorPane}>
		<div class="fluid segment" style={spCard}>
			<div class="ui horizontal segments">
				<div class="ui center middle aligned segment" style={spLogo}>
					<a href={sponsor.contactUrl} target="_blank">
						<img
							class="ui image bLogo"
							src={sponsor.logo}
							alt="sponsor"
						/>
					</a>
				</div>
				<div class="ui segment" style="spText">
					<h4 class="header">{sponsor.name}</h4>
					<p class="sTag">
						<span class="ui blue text">{sponsorTag}</span>
					</p>
					<p class="sWho">
						<span class="ui grey text">{sponsorWho}</span>
					</p>
					<p />
				</div>
			</div>

			<div class="segment">
				<div class="ui horizontal basic equal width segments">
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
						<div class="ctr segment">
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
		<div class="ui segment" style={spQR}>
			<QR data={sponsor.qrdata} logo={sponsor.logo} />
		</div>
	</div>
{/if}

<style>
	.bLogo {
		object-fit: cover;
		max-height: 100%;
	}
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
</style>
