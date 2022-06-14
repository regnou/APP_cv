<!-- -0 -->
<!-- -0 PROTECTIVE LAYOUT -->
<!-- -0 -->
{#if user}
	{@debug}
	<slot />
{:else}
	{@debug}
	<div class="">LOADING...</div>
{/if}

<script>
	import {onMount} from 'svelte'
	import {goto} from '$app/navigation'
	import {get} from 'svelte/store'
	import Suser from '../../store/authStore'

	let user

	onMount(async () => {
		console.log('onmount protective')
		// I can do a PREVENTIVE LAYOUT, to TPL this code
		user = get(Suser)
		// 0
		if (!user) {
			await goto('/signin')
		}
	})
</script>
