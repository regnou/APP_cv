<div class=" mx-auto max-w-screen-lg text-center">
	<div class="animate-charcter px-10 font-quicksand  font-normal ">
		{label}
	</div>
	<div class="px-10 text-2xl font-bold">{msg1}</div>
</div>
<!-- <div type="img" class=" relative">
	<img
		style="height: calc(100vh / 3)"
		class="absolute top-0 left-0 right-0 object-cover "
		alt=""
		src={img} />
</div> -->

<!-- <div class="absolute bottom-0 left-0 right-0 z-20 h-10 opacity-50">
		<WaveMini />
	</div> -->

<!-- <img
		style="background: radial-gradient(
		ellipse at center,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0) 37%,
		rgba(0, 0, 0, 0.65) 100%
	),
	url({img}) no-repeat center center scroll;
	height: calc(100vh / 2)"
	class="shad w-full object-cover " alt="" /> -->
<style>
	.animate-charcter {
		/* font-family: 'Economica', sans-serif !important; */
		text-transform: uppercase;
		background-image: linear-gradient(
			-225deg,
			#231557 0%,
			#44107a 29%,
			#ff1361 67%,
			#fff800 100%
		);
		background-size: auto auto;
		background-clip: border-box;
		background-size: 200% auto;
		color: #fff;
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: textclip 2s linear infinite;
		display: inline-block;
		/* @apply text-3xl;  */
		/* font-size: 70px; */
		font-size: 50px;
		/* font-size: 100px; */
	}
	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}

	/* .zoom {
		max-height: 200px;
		overflow-y: hidden;
		width: 300px;
	}
	.zoom:hover {
		max-height: 600px;
		overflow-y: scroll;
	} */
	/* .shad { */
	/*
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0,
			0, 0, 0.3) 0px 18px 36px -18px inset; */
	/* } */
</style>

<script>
	// import WaveMini from '$lib/shell/ui/0-svg/wave/WaveMini.svelte';

	export let img; // !!
	export let label; // !!
	export let msg1; // !!
</script>
