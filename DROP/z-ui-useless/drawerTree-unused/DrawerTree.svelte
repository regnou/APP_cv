<!-- note: isOpen IS TRUE -->
<Menu menu={COLLECTION} docId={DOCUMENT_ID} isOpen={true} />

<script>
	import {onMount} from 'svelte'
	import Menu from './Menu.svelte'

	onMount(async () => {
		console.table(['MOUNT DRAWER'])
	})

	const COLLECTION = 'CLIENT_ADMIN_MENU'
	const DOCUMENT_ID = 'DRAWER_NAME'
</script>
