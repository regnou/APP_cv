<Card>
	<PrimaryAction on:click={() => clicked++}>
		<Media class="card-media-16x9" aspectRatio="16x9" />
		<Content class="mdc-typography--body2">
			<h2 class="mdc-typography--headline6" style="margin: 0;">Blog</h2>
			<h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">
				500 $
			</h3>
			Créez votre blog.
		</Content>
	</PrimaryAction>
	<Actions>
		<ActionButtons>
			<!-- <Button on:click={() => clicked++}>
				<Label>Acheter</Label>
			</Button> -->
			<!-- <Button on:click={() => clicked++}>
				<Label>Another</Label>
			</Button> -->
		</ActionButtons>
		<ActionIcons>
      <Button on:click={() => clicked++}>
				<Label>Acheter</Label>
			</Button>
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
		</ActionIcons>
	</Actions>
</Card>

<script>
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';

	let clicked = 0;
</script>
