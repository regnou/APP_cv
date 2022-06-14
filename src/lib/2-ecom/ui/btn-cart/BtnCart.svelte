<div
	class={Object.keys(anchorClasses).join(' ')}
	use:Anchor={{
		addClass: (className) => {
			if (!anchorClasses[className]) {
				anchorClasses[className] = true
			}
		},
		removeClass: (className) => {
			if (anchorClasses[className]) {
				delete anchorClasses[className]
				anchorClasses = anchorClasses
			}
		}
	}}
	bind:this={anchor}
>
	<!-- !! le btn -->
	<IconButton
		on:click={() => surface.setOpen(true)}
		style="color:var(--wa-color-1)"
		class="material-icons"
		aria-label="Print this page">shopping_cart</IconButton
	>

	<!-- !! le dropdown-menu -->
	<MenuSurface
		anchorCorner="BOTTOM_LEFT"
		bind:this={surface}
		anchor={false}
		bind:anchorElement={anchor}
	>
		<List threeLine nonInteractive>
			<Item>
				<Text>
					<PrimaryText>x1 Blog</PrimaryText>
					<SecondaryText>500 €</SecondaryText>
					<SecondaryText>Tecnologies: Wordpress</SecondaryText>
				</Text>
			</Item>
			<Item>
				<Text>
					<PrimaryText>x1 E-commerce</PrimaryText>
					<SecondaryText>1 000 €</SecondaryText>
					<SecondaryText title="Tecnologies: Wordpress + WooCommerce"
						>Tecnologies: Wordpress + WooCommerce</SecondaryText
					>
				</Text>
			</Item>
			<Item>
				<Text>
					<PrimaryText>x1 App</PrimaryText>
					<SecondaryText>Tecnologies: Sveltekit + Firebase + Tailwind</SecondaryText>
					<SecondaryText>500 €</SecondaryText>
				</Text>
			</Item>
			<Separator />
			<Item>
				<Text>
					<PrimaryText>1 500 €</PrimaryText>
					<SecondaryText>TOTAL T.T.C</SecondaryText>
				</Text>
			</Item>
		</List>
		<!-- <ImageList class="grid aspect-square h-full w-40 grid-cols-1 gap-2  ">
			{#each Array(4) as _unused, i}
				<ImageListItem>
					<ImageAspectContainer>
						<Image src="/img/avatar.jpg" alt="Image" />
					</ImageAspectContainer>
				</ImageListItem>
			{/each}
		</ImageList> -->
	</MenuSurface>
</div>

<!-- <div class="flex items-center  gap-2 px-5 pt-3 pb-5 font-quicksand ">
  <Svelte />
  <div class="flex flex-col">
    <div class="font-bold">Application</div>
    <div class="mt-1 text-xs text-gray-600">500 €</div>
  </div>
</div> -->
<!-- !!!!!! -->
<!-- <Item>
  <ImageAspectContainer>
    <Image
      src="https://place-hold.it/190x190?text=square&fontsize=23"
      alt="Image {i + 1}"
    />
  </ImageAspectContainer>
  <Supporting>
    <Label>Image {i + 1}</Label>
  </Supporting>
</Item> -->

<!-- <pre class="status">Clicked: {clicked}</pre> -->
<script>
	let anchor
	let anchorClasses = {}
	// !! menu surface
	import MenuSurface from '@smui/menu-surface'
	import {Item as ImageListItem} from '@smui/image-list'
	import {Anchor} from '@smui/menu-surface'
	import IconButton from '@smui/icon-button/src/IconButton.svelte'
	import ImageList, {ImageAspectContainer, Image, Supporting} from '@smui/image-list'
	let surface
	// !! list
	import List, {Item, Separator, Text, PrimaryText, SecondaryText} from '@smui/list'
</script>
