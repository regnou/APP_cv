<slot />

<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		console.table(['MOUNT LAYOUT-root']);
	});
</script>
