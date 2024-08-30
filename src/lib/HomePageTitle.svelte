<script lang="ts">
    /** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
     *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
     * ------------------------------------------------------------------------
     * demo selection page
     */
    import type { MrxDemoCfg } from "$lib/mrx-demo-defs";
    import { cfgData, cfgEnv } from "$lib/mrx-demo-stores";
    import { base } from "$app/paths";
    // import type {*} from'@types/markdown-it';

    import { md } from "$lib/markdown-it";

    let boothHTML = md.render($cfgData.home.titleMd);
</script>

<div class="ui segment">
    <div class="ui center aligned fluid green message">
        <div class="content">
            {@html boothHTML}
        </div>
    </div>
</div>
