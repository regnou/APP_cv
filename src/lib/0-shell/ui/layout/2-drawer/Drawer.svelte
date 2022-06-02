<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />
<!--  !!!!!!!! -->
<!--  !!!!!!!! 1 - drawer -->
<!--  !!!!!!!! -->
<!-- <div class="drawer-container"> -->
<!-- <Drawer variant="dismissible" bind:open> -->
<!-- <Drawer variant="modal" fixed={false} bind:open> -->
<!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->
<Drawer bind:this={drawer} variant={dynVariant} bind:open>
	<!-- !! drawer--header -->
	<Header>
		<Title>Axel R.</Title>
		<Subtitle>version 0.1.0</Subtitle>
	</Header>
	<!-- !! drawer--content (les mens du drawer) -->
	<Content>
		<Separator />
		<Group>
			<Subheader>Page</Subheader>
			<List>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Nos prix')}
					activated={active === 'Nos prix'}>
					<Text>Nos prix et services</Text>
				</Item>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Nos prix')}
					activated={active === 'Nos prix'}>
					<Text>Nos tecnologies</Text>
				</Item>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Nos prix')}
					activated={active === 'Nos prix'}>
					<Text>Notre équipe</Text>
				</Item>
			</List>
		</Group>
		<Separator />
		<Group>
			<Subheader />
			<Subheader>Page tmp</Subheader>
			<List>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Passer a la caisse')}
					activated={active === 'Passer a la caisse'}>
					<Text>product-detail</Text>
				</Item>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Page product-detail')}
					activated={active === 'Page product-detail'}>
					<Text>commande confirmée</Text>
				</Item>
			</List>
		</Group>
		<Separator />
		<Group>
			<Subheader />
			<Subheader>Menu</Subheader>
			<List>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Nos prix')}
					activated={active === 'Mon panier'}>
					<Text>Mon panier</Text>
				</Item>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Validation de la commande')}
					activated={active === 'Validation de la commande'}>
					<Text>Se connecter</Text>
				</Item>
			</List>
		</Group>
		<Separator />
	</Content>
</Drawer>

<!-- !! scrim -->
{#if isXs}
	<Scrim fixed={true} class="opacity-90 backdrop-blur-sm" />
{/if}
<!-- transition:fade={{ duration: 200 }} class="blur-panel z-40" -->

<!-- !!! app -->
<AppContent>
	<main>
		<!-- !!! top-app-bar -->
		<TopAppBar bind:active bind:open>
			<!-- <pre class="status">Active: {active}</pre>
			<br />
			<Button on:click={() => (open = !open)}><Label>Toggle Drawer</Label></Button> -->
			<!-- !!!!! SLOT -->
			<slot name="layout" slot="layout2" />
		</TopAppBar>

		<!-- <slot slot="layout" /> -->
	</main>
	<Footer />
</AppContent>

<!-- </div> -->
<script>
	import { browser } from '$app/env';
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import TopAppBar from '../1-top-app-bar/TopAppBar.svelte';
	import List, { Group, Subheader, Item, Text } from '@smui/list';
	import GridChecker from '../0-grid-checker/GridChecker.svelte';
	import Footer from '../3-footer/Footer.svelte';
	import Separator from '@smui/list/src/Separator.svelte';
	// import { mdiTruckRemove } from '@mdi/js';

	// let open = mdiTruckRemove; // cf: annexe reactive 1
	let open = false; // cf: annexe reactive 1
	let active = 'Gray Kittens';
	let dynVariant = 'dismissible'; // 'modal', 'dismissible'

	function setActive(value) {
		active = value;
	}

	// !! sm 640 | md 768   |    lg 1024 | xl 1280 | 2xl 1536
	const xs = '(max-width: 639px)';
	const sm = '(min-width: 640px) and (max-width: 767px)';
	const md = '(min-width: 768px) and (max-width: 1023px)';
	const lg = '(min-width: 1024px) and (max-width: 1079px)';
	const xl = '(min-width: 1080px) and (max-width: 1535px)';
	const xxl = '(min-width: 1536px) ';

	let isXs = matches(xs);
	let isSm = matches(sm);
	let isMd = matches(md);
	let isLg = matches(lg);
	let isXl = matches(xl);
	let isXxl = matches(xxl);

	let drawer;

	// annexe reactive 1
	$: {
		console.log('open: ', open);
		console.log('$1:', dynVariant);
		if (isXs) {
			dynVariant = 'modal';
		} else {
			dynVariant = 'dismissible';
		}
		console.log('$2:', dynVariant);
	}

	function handleResize(e) {
		isXs = matches(xs);
		isSm = matches(sm);
		isMd = matches(md);
		isLg = matches(lg);
		isXl = matches(xl);
		isXxl = matches(xxl);
	}

	function matches(query) {
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}

	// !! press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			open = !open;
		}
	}
</script>
