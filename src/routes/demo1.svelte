<Button on:mousedown={handleClick}>
	<!-- <Icon class="material-icons">thumb_up</Icon> -->
	<!-- <IconButton aria-label="Demo Site" on:mousedown={handleClick}> -->
	<Icon component={Svg} viewBox="0 0 24 24">
		<path fill="currentColor" d={mdiAccountVoice} />
	</Icon>
	<!-- </IconButton> -->
	<Label>Click Me</Label>
</Button>

<!-- <div class="flex items-center">
	<IconButton aria-label="Demo Site" on:mousedown={handleClick}>
		<Icon component={Svg} viewBox="0 0 24 24">
			<path fill="currentColor" d={mdiThumbUp} />
		</Icon>
	</IconButton>
	Click Me 2
</div> -->

<p class="mdc-typography--body1">
	{#if clicked}
		You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}. You can
		<a on:click={reset} href="/">reset it</a>.
	{:else}
		<span class="grayed">You haven't clicked the button.</span>
	{/if}
</p>

<style>
	.grayed {
		opacity: 0.6;
	}
</style>

<script>
	import Button, { Label, Icon } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';
	import { mdiGithub, mdiWeb, mdiThumbUp, mdiAccountVoice } from '@mdi/js';

	let clicked = 0;

	function handleClick(event) {
		// event = event as MouseEvent;
		if (event.button === 0) {
			clicked++;
		}
	}

	function reset() {
		clicked = 0;
	}
</script>
