<!-- {#await promise} -->
<!-- <div class=""> -->
<!-- <LoaderIcon /> -->
<!-- </div> -->
<!-- {:then rien} -->
<!-- : root is not a link -->
{#if docId === 'DRAWER_NAME'}
	<!-- NOTHING -->
	<!-- : folder -->
	<!-- PAS DE FOLDER pour le moment -->
	<!-- {:else if menu.substring(0, 3) === 'L2-'}
	<button
		on:click={async () => {
			await toggle();
		}}
		class:isOpen
		class="relative flex w-full place-items-center
 ">
		{#if isOpen}
			<OpenIcon />
		{:else}
			<CloseIcon />
		{/if}
		{#if isOpen}
			{#await promiseMenus}
				<div class="absolute top-0 bottom-0 right-0">
					<LoaderIcon />
				</div>
			{/await}
		{/if}
	</button> -->
{:else}
	<!-- : file -->
	<div>
		<!-- class:menu--isActive={$page.url.pathname.substring(
			$page.url.pathname.length - title.length - 2,
			$page.url.pathname.length
		) ===
			title + '--'} -->
		<!-- href={'/store/' + docId + '?vue=iframe&zoom=3'} -->
		{#if menu === 'home'}
			<a
				class:menu--isActive={menuLevelsSelected.length === 3 && menu === 'home'}
				class="menu relative flex  place-items-center"
				href="/admin/ax"
			>
				{menu}
			</a>
		{:else}
			<a
				class:menu--isActive={menuLevelsSelected[3] === menu}
				class="menu relative flex  place-items-center"
				href={'/' +
					menuLevelsSelected[1] +
					'/' +
					menuLevelsSelected[2] +
					'/' +
					// menuLevelsSelected[3] +
					// '/' +
					menu}
			>
				{menu}
			</a>
		{/if}
	</div>
{/if}
<!-- -2 -->
<!-- : children -->
{#if isOpen}
	<div>
		{#if promiseMenus}
			{#each promiseMenus as menu}
				<svelte:self {menu} docId={docId + menu + '--'} />
			{/each}
		{/if}
	</div>
{/if}

<!-- {/await} -->
<style>
</style>

<script>
	import {onMount} from 'svelte'
	import {page} from '$app/stores'
	// icon
	// util
	import {getUrlLevelStructures} from '$lib/shell/utils/getUrlLevelStructures'
	import {afterNavigate} from '$app/navigation'
	// db
	// -0
	// I will not use a database for a simple menu
	// let promise = getData();
	// let menuLevelsSelected = []; // I need to initialise it or i cannot SSG
	let menuLevelsSelected = getUrlLevelStructures($page.url.pathname)
	let promiseMenus = [
		'home',
		'account',
		'account-detail',
		'address',
		'payment-method',
		'sign-out'
	] // -3
	export let menu
	export let isOpen = false //4
	export let docId //4
	$: console.log('debug $: docId : ', docId)
	// -0
	async function toggle() {
		isOpen = !isOpen
		// promise = getData();
	}

	// async function getData() {
	// 	if (isOpen) {
	// 		console.log('inside getData');
	// 		// !!! important, because of recursion, it will try to access to all elements
	// 		const COLLECTION = 'CLIENT_ADMIN_MENU';
	// 		let entity = await get(COLLECTION, docId, '@-Drawer/menu'); // 2
	// 		menus = entity.dto.arr; //4
	// 	}
	// }
	onMount(async () => {
		console.table(['MOUNT MENU'])
	})

	afterNavigate(({from, to}) => {
		menuLevelsSelected = getUrlLevelStructures($page.url.pathname)
	})
</script>
