<!-- !!!!!!!!! grid  -->
<!-- <GridChecker /> -->

<!--  !!!!!!!! drawer -->
<Drawer>
	<!-- !!!!! SLOT -->
	<slot slot="layout" />
</Drawer>

<script>
	import '$lib/0-shell/ui/0-css/0-all.css'; // !!!!!!! css
	import { onMount } from 'svelte';
	import GridChecker from '$lib/0-shell/ui/layout/0-grid-checker/GridChecker.svelte';
	import Drawer from '$lib/0-shell/ui/layout/2-drawer/Drawer.svelte';

	onMount(async () => {
		console.table(['MOUNT LAYOUT']);
	});
</script>
