<script lang="ts">
  /** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
   *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
   * ------------------------------------------------------------------------
   */

  import { cfgData, MOBILE, SPIDX } from "$lib/mrx-demo-stores";

  import { md } from "$lib/markdown-it";
  export let demoId: number;

  let demoCfg = $cfgData.demo[demoId - 1];
  let clr: string[];

  // prevent an out of bounds display of description for non-demo pages
  $: description =
    demoId && demoId > 0 && demoId <= $cfgData.demo.length
      ? $cfgData.demo[demoId - 1].description
      : "";
  $: $SPIDX = $SPIDX;
  $: {
    clr = [];
    demoCfg.sponsorIds.forEach((v, i) => {
      clr[i] = $SPIDX == i ? "grey" : "";
    });
  }
</script>

<!-- --- segments defined in Banner.svelte--------------------------------- -->

{#if description}
  {#if $MOBILE}
    <h2>{@html md.renderInline(description)}</h2>
  {:else}
    <div
      class="ui basic segment"
      style="background-color: #f6e7ff;position:relative;"
    >
      <h2 class="ui header">
        {@html md.renderInline(description)}
      </h2>
      <div class="bottom">
        {#each demoCfg.sponsorIds as s, i}
          <button
            class="mini circular ui {clr[i]} button"
            on:click={() => SPIDX.set(i)}
          >
            {i+1}
          </button>
        {/each}
      </div>
    </div>
  {/if}
{/if}

<style>
  .bottom {
    bottom: 0;
    left: 0;
    text-align: right;
    position: absolute;
    margin-top: auto;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    padding: 2px;
  }
</style>
