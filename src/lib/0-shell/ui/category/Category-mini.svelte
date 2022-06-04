<div
	class="letterpress cat-label--big w-max bg-gray-300  p-2  font-quicksand font-extrabold sm:text-6xl">
	{title}
</div>

<style>
	.letterpress {
		text-shadow: 0px 1px 1px rgba(255, 255, 2555, 0.75), 0px -1px 1px rgba(0, 0, 0, 0.75);
	}
	.cat-label--big {
		@apply text-center text-3xl;
		/* !!!! eleguant */
		/* @apply text-warm-gray-700; */
		/* !!!! 3d */
		/* @apply text-gray-200 bg-gray-500; */
		/* !!!! letterpress */
		@apply bg-warm-gray-300  text-warm-gray-400;
	}
</style>

<script>
	export let title; // !!
</script>
