<svelte:head>
	<!-- !!!! SEO -->
	<title>L'Agence Web</title>
	<meta name="description" content="L'Agence Web experte en création de sites" />
</svelte:head>

<!-- !! banner : accept or refuse cookies -->
<Banner
	class=""
	bind:open
	bind:centered
	bind:mobileStacked
	on:SMUIBanner:closed={handleBannerClosed}
>
	<Icon slot="icon" class="material-icons">privacy_tip</Icon>

	<Label slot="label">Nous utilisons des cookies 🍪 pour personnaliser votre expérience.</Label>
	<svelte:fragment slot="actions">
		<Button secondary>Réglages</Button>
		<Button>Accepter</Button>
	</svelte:fragment>
</Banner>
<!--  <pre class="status">Active: {active}</pre> -->
<!-- <br /> -->
<!-- !! hero-wave -->
<ComplexeWave />
<Hero img="img/page-store-home/banner.png" label="L'Agence Web" msg1="" />
<div class="rotate-180">
	<ComplexeWave />
</div>
<!-- !! card -->
<CardList />
<!-- !! paper -->
<LayoutGrid>
	<Cell span={12}>HOLA</Cell>
	<Cell span={4}>
		<Paper>
			<Title>Paper</Title>
			<Subtitle>This is a sheet of paper.</Subtitle>
			<Content>Paper is used to build an elevated surface.</Content>
		</Paper>
	</Cell>
	<Cell span={4}>
		<Paper variant="unelevated">
			<Title>Unelevated Paper</Title>
			<Subtitle>This is an unelevated sheet of paper.</Subtitle>
			<Content>Unelevated paper is used to build a surface.</Content>
		</Paper>
	</Cell>
	<Cell span={4}>
		<Paper variant="outlined">
			<Title>Outlined Paper</Title>
			<Subtitle>This is an outlined sheet of paper.</Subtitle>
			<Content>Outlined paper is used to build a container.</Content>
		</Paper>
	</Cell>
</LayoutGrid>

<!-- !! main -->
<!-- <Button on:click={() => (open = !open)}><Label>Toggle Drawer</Label></Button> -->
<!-- <LoremIpsum /> -->

<!-- <DemoGrid /> -->
<script>
	// !! main
	import Button, {Icon, Label} from '@smui/button'
	import ImageList, {ImageAspectContainer, Image, Supporting} from '@smui/image-list'
	// !! banner
	import Banner, {CloseReason} from '@smui/banner'
	import ComplexeWave from '$lib/1-shell/ui/0-svg/wave/complexeWave.svelte'
	import Hero from '$lib/1-shell/ui/hero/Hero.svelte'
	import CardList from '$lib/2-ecom/ui/list/CardList.svelte'
	let open = true
	let centered = false
	let mobileStacked = true
	const closedReasons = {
		[CloseReason.PRIMARY]: 'Primary',
		[CloseReason.SECONDARY]: 'Secondary',
		[CloseReason.UNSPECIFIED]: 'Unspecified'
	}
	let closedReason = 'None yet.'
	function handleBannerClosed(event) {
		closedReason = closedReasons[event.detail.reason]
	}
	// !! paper
	import Paper, {Title, Subtitle, Content} from '@smui/paper'
	import LayoutGrid, {Cell} from '@smui/layout-grid'
</script>
