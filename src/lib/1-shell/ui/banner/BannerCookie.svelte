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

<script>
	// !! banner
	import Banner, {CloseReason} from '@smui/banner'
	import ComplexeWave from '$lib/1-shell/ui/0-svg/wave/complexeWave.svelte'
	import Hero from '$lib/1-shell/ui/hero/Hero.svelte'
	import CardList from '$lib/2-ecom/ui/list/CardList.svelte'
	// !! main
	import Button, {Icon, Label} from '@smui/button'
	import ImageList, {ImageAspectContainer, Image, Supporting} from '@smui/image-list'

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
</script>
