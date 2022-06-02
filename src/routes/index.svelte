<svelte:head>
	<!-- !!!! SEO -->
	<title>Axel Regnoult</title>
	<meta name="description" content="CV Axel Regnoult ingénieur en informatique" />
</svelte:head>

<!-- !! banner : accept or refuse cookies -->
<!-- <BannerCookie/> -->

<!--  <pre class="status">Active: {active}</pre> -->
<!-- <br /> -->
<!-- !! hero-wave -->
<!-- <ComplexeWave />
<Hero img="img/page-store-home/banner.png" label="Axel Regnoult" msg1="" />
<div class="rotate-180">
	<ComplexeWave />
</div> -->
<!-- !! card -->
<!-- <CardList /> -->
<!-- !! paper -->
<LayoutGrid>
	<!-- <Cell span={12}>HOLA</Cell> -->
	<Cell span={6}>
		<Paper variant="unelevated">
			<Title>Axel Regnoult</Title>
			<!-- <Subtitle>This is a sheet of paper.</Subtitle> -->
			<Content
				>1 chemin St Patrice
				<br />
				04860 Pierrevert
				<br />
				France
			</Content>
		</Paper>
	</Cell>
	<!-- !!!! -->
	<Cell span={6}>
		<Paper variant="unelevated" class="text-right">
			<Title>Ingénieur Javascript</Title>
			<!-- <Subtitle>This is an unelevated sheet of paper.</Subtitle> -->
			<Content>
				Disponibilité: immédiate
				<br />
				T.J.M.: 500 €
				<br />
				Expérience: > 10 ans
				<br />
				Travaille à distance: Oui
			</Content>
		</Paper>
	</Cell>

	<!-- !!!! -->
	<!-- !!!! -->
	<Cell span={12}>
		<!-- <Label >Tecnologies</Label> -->
		<Category title="Javascript Engineer" />
	</Cell>

	<!-- !!!! -->
	<!-- !!!! -->
	{#each XPS_JSON as xp}
		<Xp --color-bg={xp.color}>
			<p slot="txt-1">{@html xp.txt_1}</p>
			<p slot="txt-2">{@html xp.txt_2}</p>
			<p slot="txt-3">{@html xp.txt_3}</p>
		</Xp>
	{/each}

	<Cell span={12}>
		<!-- <Label >Tecnologies</Label> -->
		<Category title="Tecnologies" />
	</Cell>
</LayoutGrid>

<!-- !! card -->
<CardList />

<!-- !! main -->
<!-- <Button on:click={() => (open = !open)}><Label>Toggle Drawer</Label></Button> -->
<!-- <LoremIpsum /> -->

<!-- <DemoGrid /> -->
<script>
	import XPS_JSON from '$lib/cv/ui/block-xp/xp.json';
	// !! paper
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import BannerCookie from '$lib/0-shell/ui/banner/BannerCookie.svelte';
	import Category from '$lib/0-shell/ui/category/Category.svelte';
	import Xp from '$lib/cv/ui/block-xp/Xp.svelte';
</script>
