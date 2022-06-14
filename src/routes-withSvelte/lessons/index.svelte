<svelte:head>
	<title>{lessons.length} lessons just for you!</title>
</svelte:head>

<main>
	<h1 class="decoration-primary-400 mb-8 text-4xl underline decoration-wavy">Lessons</h1>

	<ul>
		{#each lessons as { attributes, href }}
			<li>
				<Card>
					<a sveltekit:prefetch {href}>{attributes.title}</a>
				</Card>
			</li>
		{/each}
	</ul>
</main>

<script lang="ts">
	import Card from '$lib/components/Card.svelte'

	type Lesson = {
		attributes: {
			title: string
			date: string
			videoUrl: string
		}
		href: string
	}
	export let lessons: Lesson[]
</script>
