<!-- !!!!! layout grid  -->
<LayoutGrid>
	{#each Array(9) as _unused, i}
		<Cell>
			<div class="demo-cell">Cell {i + 1}</div>
		</Cell>
	{/each}
</LayoutGrid>

<style>
	.demo-cell {
		@apply bg-red-300;
		/*
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--mdc-theme-secondary, #333);
		color: var(--mdc-theme-on-secondary, #fff); */
	}
</style>

<script>
	import LayoutGrid, {Cell} from '@smui/layout-grid'
</script>
