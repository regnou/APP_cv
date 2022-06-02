<Cell span={8} style=" background-color:var(--color-bg)" class="p-2">
	<!-- !!!!! SLOT -->
	<slot name="txt-1" />
</Cell>
<Cell span={3} class=" p-2  text-center" style=" background-color:var(--color-bg)">
	<!-- !!!!! SLOT -->
	<slot name="txt-2" />
</Cell>
<Cell span={1} class=" p-2  text-center" style=" background-color:var(--color-bg)">
	<!-- !!!!! SLOT -->
	<slot name="txt-3" />
</Cell>

<script>
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	// export let color;
</script>
