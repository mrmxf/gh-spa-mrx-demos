<script lang="ts">
    /** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
     *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
     * ------------------------------------------------------------------------
     * demo page template for most pages
     */
    import { pageW, pageH, pageAR, DBG, MOBILE } from "$lib/mrx-demo-stores";
</script>

{#if $DBG}
    <div class="ui fluid red message">
        {#if $MOBILE}
            <span class="ui red text"><strong>MOBILE</strong></span>
        {/if}
        <span class="ui black text"><strong>DEBUG</strong></span>:
        <span class="ui blue text">Page {$pageW}x {$pageH} @ {$pageAR}</span>
    </div>
{/if}
