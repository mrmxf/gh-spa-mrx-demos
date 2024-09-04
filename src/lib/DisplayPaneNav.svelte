<script lang="ts">
  /** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
   *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
   * ------------------------------------------------------------------------
   */

  import { MODE, PANEL, cfgData } from "$lib/mrx-demo-stores";
  import { base } from "$app/paths";
  import { MrxMode, type MrxDemoFlow } from "$lib/mrx-demo-defs";

  export let demoId: number;
  let labels: string[] = [];

  let demoCfg = $cfgData.demo[demoId - 1];

  $: if ($MODE == MrxMode.DemoFlow) {
    //make an array of panels for this demo
    let panels: MrxDemoFlow[] = [];
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
      <button class="ui button" on:click={() => ($MODE = MrxMode.DemoFlow)}
        >Demo Flow</button
      >
      <div class="or"></div>
      <button
        class="ui positive button"
        on:click={() => ($MODE = MrxMode.DemoTryIt)}>Try it</button
      >
    </div>
  </a>
  {#if $MODE == MrxMode.DemoFlow}
    {#each labels as lbl, i}
      <a class="item" href="#" on:click={() => ($PANEL = i)}> {lbl} </a>
    {/each}
  {:else}
    {#each labels as lbl, i}
      <a class="item" href="#" on:click={() => ($PANEL = i)}> {lbl} </a>
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
