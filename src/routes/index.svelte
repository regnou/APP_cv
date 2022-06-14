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
	<!-- <Cell span={12}>
		<Paper  class=""  elevation={8} >popo</Paper>
	</Cell> -->
	<!-- !!!!!! top-left -->
	<!-- <Cell span={12}>HOLA</Cell> -->
	<Cell span={4}>
		<Paper elevation={8}>
			<Title>Axel REGNOULT</Title>
			<!-- <Subtitle>This is a sheet of paper.</Subtitle> -->
			<Content
				>1 chemin St Patrice
				<br />
				04860 Pierrevert
				<br />
				France
				<br />
				<br />
				<div class="text-gray-500">Célibataire, 37 ans (15/11/1985)</div>
				<br />
				<div class="flex flex-col gap-2">
					<div class="flex gap-2">
						<Icon class="material-icons" aria-label="mail">mail</Icon>
						<a href="mailto:regnou.a@gmail.com">regnou.a@gmail.com</a>
					</div>
					<div class="flex gap-2">
						<Icon class="material-icons" aria-label="call">call</Icon>
						<a target="_blank" href="https://wa.me/59163043488"
							>+591 630 43 488 (whatsapp)</a>
					</div>
					<br />
					<!-- !! -->

					<div class="flex gap-2">
						<div
							class=" h-6 w-6 rounded-full bg-black transition duration-200 ease-in-out hover:scale-125 hover:bg-red-500">
							<FunGh />
						</div>
						<a target="_blank" href="https://github.com/regnou">github.com/regnou</a>
					</div>
					<div class="flex gap-2">
						<div
							class=" h-6 w-6 rounded-full bg-black transition duration-200 ease-in-out hover:scale-125 hover:bg-green-500">
							<FunLinkedin />
						</div>
						<a target="_blank" href="https://www.linkedin.com/in/regnou"
							>linkedin.com/in/regnou</a>
					</div>
					<div class="flex items-center gap-2 ">
						<div class="text-xl">🌐</div>
						<a target="_blank" href="https://www.web-agency.app" class="font-bold"
							>www.web-agency.app</a>
					</div>
				</div>
			</Content>
		</Paper>
	</Cell>
	<!-- !!!!!! top-right -->
	<Cell span={8}>
		<Paper variant="unelevated" class="effect5 text-right">
			<Title>-</Title>
			<!-- <Subtitle>This is an unelevated sheet of paper.</Subtitle> -->
			<Content>
				Disponibilité: immédiate
				<br />
				T.J.M.: 500 €
				<br />
				Expérience: > 10 ans
				<br />
				Travaille à distance: Oui
				<br />
				<!-- <div class="h-10 w-10">
					<div class="animate-spin bg-yellow-300">
						<div class="flex h-16 w-16 items-center justify-center rounded-full">
							<span class="text-2xl">🇫🇷</span>
						</div>
					</div>
				</div> -->
				Langues: 🇫🇷 🇺🇸 🇪🇸 🇧🇷
				<!-- </div> -->
			</Content>
		</Paper>
	</Cell>

	<!-- !!!! -->
	<!-- !!!! debut du CV -->
	<Cell span={12} class="mt-10">
		<!-- <Label >Tecnologies</Label> -->
		<Category title="Ingénieur Javascript" />
	</Cell>
	<!-- !!!! -->
	<!-- !!!! Experiences -->
	{#each XPs_JSON as xp}
		<Xp --color-bg={xp.color}>
			<p slot="txt-1">{@html xp.txt_1}</p>
			<p slot="txt-2">{@html xp.txt_2}</p>
			<p slot="txt-3">{@html xp.txt_3}</p>
		</Xp>
	{/each}

	<Cell span={12} class="mt-20">
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
<style>
	/* !! effect 5 est un effet d ombre qui ne marche pas */
	.effect5 {
		/* position: relative; */
		background-color: red !important;
	}
	.effect5:before,
	.effect5:after {
		z-index: -1;
		position: absolute;
		content: '';
		bottom: 25px;
		left: 10px;
		width: 50%;
		top: 80%;
		max-width: 300px;
		background: #777;
		-webkit-box-shadow: 0 35px 20px #777;
		-moz-box-shadow: 0 35px 20px #777;
		box-shadow: 0 35px 20px #777;
		-webkit-transform: rotate(-8deg);
		-moz-transform: rotate(-8deg);
		-o-transform: rotate(-8deg);
		-ms-transform: rotate(-8deg);
		transform: rotate(-8deg);
	}
	.effect5:after {
		-webkit-transform: rotate(8deg);
		-moz-transform: rotate(8deg);
		-o-transform: rotate(8deg);
		-ms-transform: rotate(8deg);
		transform: rotate(8deg);
		right: 10px;
		left: auto;
	}
</style>

<script>
	// !! json
	import XPs_JSON from '$lib/9-cv/ui/block-xp/XP.json'
	// !! paper
	import Paper, {Title, Subtitle, Content} from '@smui/paper'
	import LayoutGrid, {Cell} from '@smui/layout-grid'
	import BannerCookie from '$lib/1-shell/ui/banner/BannerCookie.svelte'
	import Category from '$lib/1-shell/ui/category/Category.svelte'
	import Xp from '$lib/9-cv/ui/block-xp/Xp.svelte'
	// !! card
	import CardList from '$lib/9-cv/ui/list/CardList.svelte'
	import IconButton from '@smui/icon-button/src/IconButton.svelte'
	import {Icon} from '@smui/common'
	import FunGh from '$lib/1-shell/ui/0-svg/social/FunGh.svelte'
	import FunLinkedin from '$lib/1-shell/ui/0-svg/social/FunLinkedin.svelte'
	//
</script>
