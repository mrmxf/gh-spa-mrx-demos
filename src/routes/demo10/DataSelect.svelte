<script lang="ts">
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * -----------------------------------------------------------------------
	 * data selector for sub-sources
	 * bind the dropdown selection value to the store `$selectedServiceIndex`
	 */
	import { source } from '$lib/mrx-demo-stores';
	import { selectedServiceIndex } from './control10-stores';
</script>

{#if $source &&  $source.serviceData}
	<select class="ui fluidscrolling selection dropdown" bind:value={$selectedServiceIndex}>
		{#each $source.serviceData as opt, index}
			{#if opt.id}
				<option class="item" value={index}>{opt.id}</option>
			{/if}
		{/each}
	</select>
{/if}
