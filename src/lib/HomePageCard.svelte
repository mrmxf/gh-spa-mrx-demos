<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * demo selection page
	 */
	import type { MrxDemoCfg } from "$lib/mrx-demo-defs";
	import { cfgData, cfgEnv } from '$lib/mrx-demo-stores';
	import { base } from '$app/paths';
	// import type {*} from'@types/markdown-it';
	export let cfg: MrxDemoCfg;
	import { md } from '$lib/markdown-it';

</script>

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

<style>
	.flexCardImg {
		background-color: #eeeeee;
		display: flex;
		align-items: center;
		align-content: center;
	}
</style>
