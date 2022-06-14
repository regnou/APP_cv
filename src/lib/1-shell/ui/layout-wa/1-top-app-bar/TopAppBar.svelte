<!-- !!!!!!  -->
<!-- !!!!!! 2 - top-app-bar -->
<!-- !!!!!!  -->
<!-- !! top-app-bar--header -->
<TopAppBar bind:this={topAppBar} variant="fixed" class="bg-wa-0">
	<Row>
		<!-- !!!!! SIDE: left -->
		<Section>
			<!-- -------- TODO CV -->
			<!-- <IconButton
				style="color:var(--wa-color-1)"
				class="material-icons"
				on:click={() => (open = !open)}
				>menu
			</IconButton> -->
			<!--  -->
			<Button on:click={() => console.log('p')} class="overflow-hidden">
				<Image
					class="aspect-square w-10 object-cover"
					src="/img/logo-min.jpg"
					alt="web agency logo" />
				<Label class="text-wa-2" title="Agence Web">Agence Web</Label>
				<!-- <Title class="text-wa-2" title="Agence Web">Agence Web</Title> -->
			</Button>
			<!--  -->
		</Section>
		<!-- !!!!! SIDE: right -->
		<Section align="end" toolbar>
			<!-- -------- TODO CV -->
			<!-- <BtnCart />
			<BtnLogin /> -->
			<!-- !!!! -->
			<!-- -------- TODO CV -->
			<!-- <IconButton
				style="color:var(--wa-color-2)"
				class="material-icons"
				aria-label="Bookmark this page">mail</IconButton> -->
		</Section>
	</Row>
</TopAppBar>

<!-- !! top-app-bar--content -->
<AutoAdjust {topAppBar}>
	<!-- !!!!! SLOT -->
	<slot name="layout2" />
</AutoAdjust>

<script>
	// !! top-app-bar
	import TopAppBar, {Row, Section, Title, AutoAdjust} from '@smui/top-app-bar'
	// let topAppBar: TopAppBarComponentDev;
	let topAppBar
	// new
	export let open = false
	// export let active;
	// !! top app bar
	import {mdiFormatColorFill, mdiWrench, mdiCurrencyUsd} from '@mdi/js'
	import Fab from '@smui/fab'
	import {Svg} from '@smui/common/elements'
	import Button, {Label} from '@smui/button'
	import IconButton, {Icon} from '@smui/icon-button'
	import BtnLogin from '../../btn-login/BtnLogin.svelte'
	import BtnCart from '$lib/2-ecom/ui/btn-cart/BtnCart.svelte'
	import {Image} from '@smui/image-list'
	let clicked = 'nothing yet'
</script>
