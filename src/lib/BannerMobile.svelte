<script lang="ts">
    /** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
     *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
     * ------------------------------------------------------------------------
     * mobile banner - stacked
     */
    export let demoId: number;
    export let forcePortrait: boolean = false;

    import DemoNav from "$lib/BannerNav.svelte";

    let bnColor = "black";
</script>

<!-- --- grid defined in +page.svelte-------------------------------------- -->
<div class="sixteen wide column">
    <div class=" row">
        <div class=" stackable center middle aligned column">
            <div class="ui {bnColor} segment overviewSeg">
                <DemoNav {demoId} mobile={true} />
            </div>
        </div>
    </div>
</div>

<style>
    .banner {
        min-height: 20vh;
    }
</style>
