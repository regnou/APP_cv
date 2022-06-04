<div class="">
	<!-- <div class="animate-charcter  txt font-quicksand font-extrabold">{title}</div> -->
	<!--  -->
	<!-- <div class="txt font-extralight ">{title}</div> -->
	<!-- <div class="fat font-extrabold  txt font-quicksand ">{title}</div> -->
	<!-- <div class="eleguant font-extralight  txt font-quicksand ">{title}</div> -->
	<div class="letterpress  cat-label--big  font-quicksand font-extrabold sm:text-6xl">
		{title}
	</div>
	<!-- <div class="troisD  txt font-quicksand font-extrabold">{title}</div> -->
	<!-- <div class="txt font-economica">{title}</div> -->
</div>

<style>
	.stylish {
		@apply font-quicksand font-extrabold;
	}
	.letterpress {
		text-shadow: 0px 1px 1px rgba(255, 255, 2555, 0.75), 0px -1px 1px rgba(0, 0, 0, 0.75);
		/* text-shadow: h-shadow v-shadow blur color;*/
	}
	.cat-label--big {
		@apply text-4xl ;
		/* @apply py-10 px-10 text-center text-xl uppercase; */
		/* !! fat */
		/* !! eleguant */
		@apply text-warm-gray-700;
		/* !! 3d */
		/* @apply text-gray-200 bg-gray-500; */
		/* !! letterpress */
		/* @apply bg-warm-gray-300  text-warm-gray-400; */
	}
</style>

<script>
	export let title; // !!
</script>
