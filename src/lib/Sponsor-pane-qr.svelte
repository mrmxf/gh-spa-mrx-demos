<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * insert a qr code for the payload of this sponsor
	 */
	export let data: string;
	export let logo: string;

	import { createQrSvgDataUrl, type QRConfig } from "@svelte-put/qr";

	const config: QRConfig = {
		data: data,
		moduleFill: "black",
		anchorOuterFill: "blue",
		anchorInnerFill: "gray",
		shape: "circle",
		logoRatio: 2,
	};

	const dataURL = createQrSvgDataUrl(config);
</script>

<!-- <div class="wrapper">
	{@html svgString}
</div> -->
<img class="qrFill" src={dataURL} alt="qr code" />

<style>
	.qrFill {
		max-height: 100%;
		max-width: 100%;
	}
</style>
