<a
	{href}
	sveltekit:prefetch={prefetch}
	class="from-prime to-primary-600 text-white dark:shadow-prime/20 relative block rounded bg-gradient-to-br px-6 py-4 text-2xl font-thin no-underline shadow transition-shadow hover:bg-gradient-to-tl hover:shadow-lg active:top-[-1px] md:text-3xl"
>
	<slot />
</a>

<script lang="ts">
	export let href: string
	export let prefetch: true | null = null
</script>
