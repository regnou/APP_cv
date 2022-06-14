<!-- style="	background-image: linear-gradient(
			45deg,
			hsl(240deg 100% 20%) 0%,
			hsl(289deg 100% 21%) 11%,
			hsl(315deg 100% 27%) 22%,
			hsl(329deg 100% 36%) 33%,
			hsl(337deg 100% 43%) 44%,
			hsl(357deg 91% 59%) 56%,
			hsl(17deg 100% 59%) 67%,
			hsl(34deg 100% 53%) 78%,
			hsl(45deg 100% 50%) 89%,
			hsl(55deg 100% 50%) 100%
		);" -->
<!-- <div class=""><Firebase /></div>
	<div class=""><Css /></div>
	<div class=""><Firestore /></div>
	<div class=""><Ganalytics /></div>
	<div class=""><Gcloud /></div>
	<div class=""><Gcp /></div>
	<div class="animate-pulse"><Stripe /></div>
	<div class="animate-bounce"><Svelte /></div>
	<div class=""><Glambda /></div>
	<div class=""><Glocals /></div>
	<div class=""><Gmap /></div>

	<div class=""><Html /></div>
	<div class=""><Jest /></div>
	<div class=""><Js /></div>
	<div class="animate-spin"><Node /></div>
	<div class=""><Playwright /></div>
	<div class=""><Pupp /></div>
	<div class=""><Storybook /></div> -->

<!-- style="background: #ee9ca7;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		" -->
<Card class="h-full ">
	<PrimaryAction on:click={() => clicked++}>
		<!-- aspectRatio="16x9" -->
		<Media style={bg} class="card-media-16x9  animate-fast-gradient p-2">
			<!-- <img src="" alt=""> -->
			<!-- <div class="">< /></div> -->
			<!-- <Wordpress /> -->
			<Factory type={skill.type} />
			<!-- <div class=""><Woocommerce /></div> -->
		</Media>
		<Content class="mdc-typography--body2">
			<h2 class="mdc-typography--headline6 text-blue-600 " style="margin: 0;">
				{skill.txt_1}
			</h2>
			<h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">
				{skill.txt_2}
			</h3>
		</Content>
	</PrimaryAction>
	<!-- <Actions> -->
	<!-- <ActionButtons> -->
	<!-- <Button on:click={() => clicked++}>
				<Label>Acheter</Label>
			</Button> -->
	<!-- <Button on:click={() => clicked++}>
				<Label>Another</Label>
			</Button> -->
	<!-- </ActionButtons> -->
	<!-- <ActionIcons> -->
	<!-- <Button on:click={() => clicked++}> -->
	<!-- <Label>Acheter</Label> -->
	<!-- </Button> -->
	<!-- <IconButton
				on:click={() => clicked++}
				toggle
				aria-label="Add to favorites"
				title="Add to favorites">
				<Icon class="material-icons" on>favorite</Icon>
				<Icon class="material-icons">favorite_border</Icon>
			</IconButton> -->
	<!-- <IconButton class="material-icons" on:click={() => clicked++} title="Share"
				>share</IconButton>
			<IconButton class="material-icons" on:click={() => clicked++} title="More options"
				>more_vert</IconButton> -->
	<!-- </ActionIcons> -->
	<!-- </Actions> -->
</Card>

<style>
	/* .grad--1 {
		background-image: linear-gradient(
			45deg,
			hsl(240deg 100% 20%) 0%,
			hsl(289deg 100% 21%) 11%,
			hsl(315deg 100% 27%) 22%,
			hsl(329deg 100% 36%) 33%,
			hsl(337deg 100% 43%) 44%,
			hsl(357deg 91% 59%) 56%,
			hsl(17deg 100% 59%) 67%,
			hsl(34deg 100% 53%) 78%,
			hsl(45deg 100% 50%) 89%,
			hsl(55deg 100% 50%) 100%
		);
	} */
</style>

<script>
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card'
	import Button, {Label} from '@smui/button'
	import IconButton, {Icon} from '@smui/icon-button'
	import Wordpress from '$lib/1-shell/ui/0-svg/tec-logo/wordpress.svelte'
	import Factory from '$lib/1-shell/ui/0-svg/tec-logo/FACTORY.svelte'

	let clicked = 0
	// !! skill
	export let skill
	export let bg
</script>
