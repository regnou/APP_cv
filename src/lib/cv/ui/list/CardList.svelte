<LayoutGrid>
	{#each Array(9) as _unused, i}
		<Cell span={2}>
			<!-- <div class="demo-cell">Cell {i + 1}</div> -->
			<Card />
		</Cell>
	{/each}
</LayoutGrid>

<script>
	// !! card
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Card from '$lib/ecom/ui/list/Card.svelte';
</script>
