<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * generic static navigation
	 */

	import type { MrxMediaSource } from "$lib/mrx-demo-defs";
	import { source } from "$lib/mrx-demo-stores";
	import { base } from "$app/paths";

	export let sources: MrxMediaSource[];
	export let thumbSize = "small";
	export let forcePortrait = false;

	let color = "green";

	let selectedSrc = "none";

	let navClick = (id: string) => {
		selectedSrc = id;
		sources.forEach((src) => {
			if (src.id == id) {
				source.set(src);
			}
		});
	};
</script>

{#if forcePortrait}
<p>Thin</p>
{:else}
<div class="ui {thumbSize} images">
	{#each sources as src}
		<div
			class="ui {src.id == selectedSrc
				? 'inverted ' + color
				: ''} center middle aligned segment"
			style="padding:2px;"
		>
			{#if src.srcUrl.slice(-4) == ".mp4"}
				<a href={"#"} on:click={() => navClick(src.id)} id={src.id}>
					<video class=" ui image autoplay loop muted">
						<source src="{base}/{src.srcUrl}" />
						<track kind="captions" />
					</video>
				</a>
			{:else}
				<a href={"#"} on:click={() => navClick(src.id)} id={src.id}>
					<img
						class="ui image"
						src="{base}/{src.srcUrl}"
						alt={src.id}
					/>
				</a>
			{/if}
		</div>
	{/each}
</div>
{/if}