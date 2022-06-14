<!-- -0 -->
<!-- -0 PAGE LOADER -->
<!-- -0 -->
<div class=" progress-bar">
	<div class=" progress-sliver" style={`--width: ${$progress * 100}%`} />
</div>

<style>
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		/* height: 0.5rem; */
		@apply h-1;
		@apply z-50;
	}
	.progress-sliver {
		width: var(--width);
		/* background-color: #f8485e; */
		background-color: var(--bg-color);
		height: 100%;
	}
</style>

<script>
	import {onDestroy, onMount} from 'svelte'
	import {tweened} from 'svelte/motion'
	import {cubicOut} from 'svelte/easing'
	// 2 TODO - Ishould not reference my code like this... it is coupled with the layout
	import navigationState from '/src/stores/navigationState'

	// export let color = "black";
	// console.dir(navigationState);

	const progress = tweened(0, {
		duration: 3500,
		easing: cubicOut
	})

	onMount(() => {
		console.log('on mount : progress bar: progress.set(0.7);')
		progress.set(0.7)
	})

	// 0
	const unsubscribe = navigationState.subscribe((state) => {
		if (state === 'loaded') {
			console.log('before-destroy:: progress.set(1, { duration: 1000 });')
			progress.set(1, {duration: 1000})
		}
		// else if (state === "loading") {
		// 	console.log("destroy: loading : progress.set(0);");
		// 	progress.set(0);
		// }
	})

	onDestroy(() => {
		console.log('on destroy : progress bar => call unsubscribe')
		unsubscribe()
	})
</script>
