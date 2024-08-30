<script lang="ts">
	import { onMount } from 'svelte';
	/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
	 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
	 * ------------------------------------------------------------------------
	 * Explore tabs - selection header and body components
	 */
	import { DBG, exploreTabs, activeExploreTabNumber } from '$lib/mrx-demo-stores';
	// @ts-ignore ts(6137)
	import type { JQueryStatic } from '@types/jquery';
	import { MrxExploreIcon } from './mrx-demo-defs';

	let jquery: JQueryStatic | null = null;
	let numTabs: number;

	function updateActiveIndex(increment: number) {
		$activeExploreTabNumber += increment;
		if ($activeExploreTabNumber > $exploreTabs.length) $activeExploreTabNumber = 1;
		if ($activeExploreTabNumber < 1) $activeExploreTabNumber = $exploreTabs.length;
		setTabs();
	}
	function selectionChanged(value: string, text: string, selectedItem: object) {
		// custom action
		// console.log(`value=${value}, text=${text}, selectedItem=${typeof selectedItem}`);
		$activeExploreTabNumber = Number(value);
	}

	const setTabs = () => {
		let values: object[] = [];
		$exploreTabs.forEach((tab, i) => {
			tab.icon = 'file outline';
			if (tab.type in MrxExploreIcon) tab.icon = MrxExploreIcon[tab.type];

			values.push({
				name: tab.title,
				value: i + 1,
				icon: tab.icon,
				selected: i + 1 == $activeExploreTabNumber
			});
		});
		//use the fomantic javascript to redraw the contents of the selector
		if (jquery)
			jquery('#explore').dropdown({
				action: 'activate',
				onChange: (v: string, t: string, s: object) => selectionChanged(v, t, s),
				values: values
			});
	};

	onMount(() => {
		// initialize the fomantic dropdown code
		// @ts-ignore ts(2339)
		jquery = window.$;
		setTabs();
	});
	$: if (numTabs !== $exploreTabs.length) {
		numTabs = $exploreTabs.length;
		setTabs();
	}
	$: activeTab = $activeExploreTabNumber;
</script>

<div class="ui grid" style="margin-top:-1.6em;">
	<div class="row">
		<div class="ui two wide column">
			<button class="ui left floating icon button" on:click={() => updateActiveIndex(-1)}>
				<i class="left arrow icon"></i>
			</button>
		</div>
		<div class="ui two wide column">
			<button class="ui right floating icon button" on:click={() => updateActiveIndex(+1)}>
				<i class="right arrow icon"></i>
			</button>
		</div>
		<div class="ui two wide column">
			<button class="ui right floating icon button" on:click={() => updateActiveIndex(+1)}>
				<small>{activeTab}/{numTabs}</small>
			</button>
		</div>
		<div class="ui ten wide center aligned column">
			<div id="explore" class="ui fluid selection dropdown">
				<div class="text"></div>
				<i class="dropdown icon"></i>
			</div>
		</div>
	</div>
</div>

{#if $DBG}
	<div class="ui fluid center middle aligned label">
		$DBG(tabIndex={$activeExploreTabNumber} of
		{$exploreTabs.length} tabs)
	</div>
{/if}
<slot />
