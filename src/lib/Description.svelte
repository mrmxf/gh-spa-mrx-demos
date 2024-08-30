<script lang="ts">
    /** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
     *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
     * ------------------------------------------------------------------------
     */

    import { cfgData, MOBILE, DBG } from "$lib/mrx-demo-stores";

    import { md } from "$lib/markdown-it";

    export let demoId: number;

    // prevent an out of bounds display of description for non-demo pages
    $: description =
        demoId && demoId > 0 && demoId <= $cfgData.demo.length
            ? $cfgData.demo[demoId - 1].description
            : "";
</script>

<!-- --- segments defined in Banner.svelte--------------------------------- -->

{#if description}
    {#if $MOBILE}
        <h2>{@html md.renderInline(description)}</h2>
    {:else}
        <div class="ui basic segment" style="background-color: #f6e7ff;">
            <h2 class="ui header">
                {@html md.renderInline(description)}
            </h2>
        </div>
    {/if}
{/if}
