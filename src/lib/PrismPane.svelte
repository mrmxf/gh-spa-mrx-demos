<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * The app header preloads all the extensions & style sheets
	 */
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { MrxExploreCodeAlias, MrxExploreEnum, MrxExploreEnumNames } from '$lib/mrx-demo-defs';
	import Prism from 'prismjs';
	import { AutoLoader } from 'svelte-prism-autoloader';

	export let langIndex: MrxExploreEnum;
	export let code: string | null | undefined;

	let lang: string = 'javascript';
	let prismCode: string;

	onMount(() => {
		// Prism.plugins.autoloader.languages_path = 'prism-languages/';
		Prism.highlightAll();
	});

	$: {
		// some types e.g. GPX display with the XML highlighter - use an alias
		lang =
			langIndex in MrxExploreCodeAlias // @ts-ignore ts(2538)
				? 'language-' + MrxExploreEnumNames[MrxExploreCodeAlias[langIndex]]
				: 'language-' + MrxExploreEnumNames[langIndex];
	}
</script>

<AutoLoader languagesPath="prism-languages/" useMinified autoHighlightAll />
<pre class="pPrism"><code class="{lang} cPrism">{code}</code></pre>

<style>
	.pPrism {
		margin: -1.1em;
		padding: 0.2em 0em 4em;
		height: 100%;
		overflow: scroll;
	}
	.cPrism {
		overflow-x: visible;
		font-size: 0.8em;
	}
</style>
