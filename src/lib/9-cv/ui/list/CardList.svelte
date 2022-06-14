<LayoutGrid>
	{#each Object.entries(SKILLs_JSON) as [key, val] (key)}
		<Cell span={12}>
			<CategoryMini title={key} />
		</Cell>
		{#each val.list as skill, i}
			<Cell span={2}>
				<Card {skill} bg={val.bg} />
			</Cell>
		{/each}
	{/each}
</LayoutGrid>

<script>
	// !! card
	import LayoutGrid, {Cell} from '@smui/layout-grid'
	import Card from './Card.svelte'
	// !! json
	import SKILLs_JSON from '$lib/9-cv/ui/list/SKILLS.json'
	import CategoryMini from '$lib/1-shell/ui/category/Category-mini.svelte'
</script>
