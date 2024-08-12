<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * display the sponsors of this demo
	 */
	import type { MrxSponsor } from '$lib/mrx-demo-defs';
	import { cfgData, sponsors } from '$lib/mrx-demo-stores';
	import { onMount } from 'svelte';
	import QR from './BannerSponsors-qr.svelte';

	export let demoId: number;

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

	let sponsorWho = sponsor.who ? sponsor.who : '&nbsp;';
	let sponsorTag = sponsor.tagline ? sponsor.tagline : '&nbsp;';

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
</script>

<div class="ui stackable equal width grid">
	<div class="stretched row">
		<div class="ui middle aligned stackable column">
			<div class="ui segment">
				<h4 class="header">{sponsor.name}</h4>
				<p class="sTag"><span class="ui blue text">{sponsorTag}</span></p>
				<p class="sWho"><span class="ui grey text">{sponsorWho}</span></p>
				<p />
				<div class="ui small horizontal equal width grid">
					{#if sponsor.homeUrl}
						<div class="column">
							<a href={sponsor.homeUrl} target="_blank">
								<div class="ui fluid centered label">
									<i class="home icon"></i>
									<i class="external alternate small blue icon"></i>
								</div>
							</a>
						</div>
					{/if}
					{#if sponsor.contactUrl}
						<div class="column">
							<a href={sponsor.contactUrl} target="_blank">
								<div class="ui small fluid centered label">
									<i class="envelope outline icon"></i>
									<i class="external alternate small blue icon"></i>
								</div>
							</a>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="ui center middle aligned stackable column">
			<div class="ui horizontal equal width segments">
				<div class="ui center middle aligned segment">
					<img class="ui image bannerLogo" src={sponsor.logo} alt="sponsor" />
				</div>
				<div class="ui middle aligned segment">
					<QR data={sponsor.qrdata} logo={sponsor.logo} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.bannerLogo {
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
</style>
