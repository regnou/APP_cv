<svelte:window
	bind:innerWidth={iw}
	bind:innerHeight={ih}
	bind:outerHeight={oh}
	bind:outerWidth={ow}
/>

<div class="relative z-10">
	<!-- !!!!!!!!! 4dp and 8dp DP grilles -->
	<!-- !!!! 8 DP -->
	{#if true}
		<div class="fixed inset-0 grid grid-flow-col " style="gap:7px;">
			{#each Array(iw) as _unused, i}
				<div class="h-full  opacity-50 " style="width: 0px; border-right:1px solid gray " />
			{/each}
		</div>
	{/if}
	{#if true}
		<div class="fixed inset-0 grid grid-flow-row " style="gap:7px;">
			{#each Array(ih) as _unused, i}
				<div class="w-full  opacity-50" style="height: 0px; border-top:1px solid gray;" />
			{/each}
		</div>
	{/if}

	<!-- !!!! 4 DP -->
	{#if true}
		<div class="fixed inset-0 grid grid-flow-col " style="gap:3px;">
			{#each Array(iw) as _unused, i}
				<div class="h-full  opacity-50 " style="width: 0px; border-right:1px solid gray " />
			{/each}
		</div>
	{/if}
	{#if true}
		<div class="fixed inset-0 grid grid-flow-row " style="gap:3px;">
			{#each Array(ih) as _unused, i}
				<div class="w-full  opacity-50" style="height: 0px; border-top:1px solid gray;" />
			{/each}
		</div>
	{/if}
</div>

<script>
	// !!
	// let arrw;
	// let arrh;
	let iw
	let ih
	let ow
	let oh
	// !!
	// $: {
	// console.log('debug screen : ', iw, ih, ow, oh); !!!!!
	// arrw = new Array(iw);
	// arrh = new Array(ih);
	// }
</script>
