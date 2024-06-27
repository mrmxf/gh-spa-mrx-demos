<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * insert a qr code for the paylod of this sponsor
	 */
	import QR from '@svelte-put/qr/svg/QR.svelte';
	export let data: string;
	export let logo: string;
</script>

<QR
	{data}
	moduleFill="black"
	{logo}
	anchorOuterFill="blue"
	anchorInnerFill="gray"
	shape="circle"
	logoRatio={2}
/>
