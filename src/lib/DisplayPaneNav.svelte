<script lang="ts">
  /** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
   *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
   * ------------------------------------------------------------------------
   */

  import { MODE, PANEL, cfgData } from "$lib/inc/store-misc";
  import { base } from "$app/paths";
  import { MrxMode, type MrxDemoFlow } from "$lib/inc/defs";

  export let demoId: number;
  let labels: string[] = [];

  let demoCfg = $cfgData.demo[demoId - 1];

  $: if ($MODE == MrxMode.FlowView) {
    demoCfg.flowPanels.forEach((p) => {
      labels.push(p.mnu);
    });
  } else {
    labels = ["Try the demo - click on a source"];
  }
</script>

<!-- --- mobile variant has fewer segments--------------------------------- -->
<div class="ui pointing menu">
  <a class="active item" href="#">
    <div class="ui buttons">
      <button class="ui button" on:click={() => ($MODE = MrxMode.FlowView)}
        >Demo Flow</button
      >
      <div class="or"></div>
      <button
        class="ui positive button"
        on:click={() => ($MODE = MrxMode.TryItView)}>Try it</button
      >
    </div>
  </a>
  {#if $MODE == MrxMode.FlowView}
    {#each labels as lbl, i}
      <a class="item" href={"#"} on:click={() => ($PANEL = i)}> {lbl} </a>
    {/each}
  {:else}
    {#each labels as lbl, i}
      <a class="item" href={"#"} on:click={() => ($PANEL = i)}> {lbl} </a>
    {/each}
  {/if}
</div>

<style>
  .ui.button:first-child {
    color: white;
    background-color: #4f702a;
  }
  .ui.button:last-child {
    color: white;
    background-color: #c2a649;
  }
</style>
