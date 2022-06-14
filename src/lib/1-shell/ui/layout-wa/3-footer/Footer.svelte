<LayoutGrid class="bg-gray-200">
	<Cell span={12} class="flex gap-5">
		<div class="">Suivez-nous sur:</div>
		<!-- <FacebookSvg /> -->
		<LinkedinSvg />
		<!-- <TwitterSvg /> -->
		<YtSvg />
	</Cell>
	<Cell span={12}>
		<div class="border-gray-500 border-b" />
	</Cell>

	<!-- !! col 1 -->
	<Cell>
		<Group>
			<Subheader class="font-bold">Site</Subheader>
			<List class="max-w-xs border-l border-blue-gray-800">
				<Item on:SMUI:action={() => (clicked = 'E-commerce')}>
					<Text>Se connecter</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = 'Portfolio')}>
					<Text>S'inscrire</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = 'Sitemap')}>
					<Text>Sitemap</Text>
				</Item>
			</List>
		</Group>
	</Cell>
	<!-- !! col 2 -->
	<Cell>
		<Group>
			<Subheader class="font-bold">Services</Subheader>
			<List class="max-w-xs border-l border-blue-gray-800">
				<Item on:SMUI:action={() => (clicked = 'Prix')}>
					<Text>Prix</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = 'A propos de nous')}>
					<Text>A propos de nous</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = 'Contact')}>
					<Text>Contact</Text>
				</Item>
			</List>
		</Group>
	</Cell>
	<!-- !! col 3 -->
	<Cell>
		<Group>
			<Subheader class="font-bold">Legal</Subheader>
			<List class="max-w-xs border-l border-blue-gray-800">
				<Item on:SMUI:action={() => (clicked = 'To Kill a Mockingbird')}>
					<Text>Mentions légales</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = 'The Great Gatsby')}>
					<Text>C.G.U.</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = '1984')}>
					<Text>C.G.H.</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = 'Catch-22')}>
					<Text>C.G.V.</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = "Alice's Adventures in Wonderland")}>
					<Text>Politique de confidentialité</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = "Alice's Adventures in Wonderland")}>
					<Text>Politique des cookies</Text>
				</Item>
				<Item on:SMUI:action={() => (clicked = "Alice's Adventures in Wonderland")}>
					<Text class="underline">Réglage des cookies</Text>
				</Item>
			</List>
		</Group>
	</Cell>

	<Cell span={12}>
		<div class="border-gray-500 border-b" />
	</Cell>

	<Cell span={4} class="flex items-center ">
		<!-- <Button on:click={() => clicked++} href="http://example.com" target="_blank"> -->
		<Label>Copyright © 2022 Axel Regnoult</Label>
		<!-- </Button> -->
	</Cell>
	<Cell span={8}>
		<List class="flex place-content-end">
			<!-- <Item on:SMUI:action={() => (clicked = 'E-commerce')}>
        <Text>Conditions Générales de Vente</Text>
      </Item>
      <Item on:SMUI:action={() => (clicked = 'Portfolio')}>
        <Text>Conditions Générales d'Utilisation</Text>
      </Item>
      <Item on:SMUI:action={() => (clicked = 'Sitemap')}>
        <Text>Politique de Confidentialité</Text>
      </Item> -->
			<Button on:click={() => clicked++} href="http://example.com" target="_blank">
				<Label>Conditions Générales de Vente</Label>
			</Button>
			<Button on:click={() => clicked++} href="http://example.com" target="_blank">
				<Label>Conditions Générales d'Utilisation</Label>
			</Button>
			<Button on:click={() => clicked++} href="http://example.com" target="_blank">
				<Label>Politique de Confidentialité</Label>
			</Button>
		</List>
	</Cell>
</LayoutGrid>

<script>
	// !! footer grid
	import LayoutGrid, {Cell} from '@smui/layout-grid'
	import List, {Group, Item, Subheader, Text} from '@smui/list'
	import LinkedinSvg from '../../0-svg/social/LinkedinSvg.svelte'
	import YtSvg from '../../0-svg/social/YtSvg.svelte'
	import Button, {Label} from '@smui/button'
	import IconButton, {Icon} from '@smui/icon-button'
</script>
