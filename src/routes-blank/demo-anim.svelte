<svelte:window
	bind:innerWidth={iw}
	bind:innerHeight={ih}
	bind:outerHeight={oh}
	bind:outerWidth={ow} />

<!-- !!!!!! header-->
<div class="fixed top-0 left-0 z-10 h-10 w-full bg-blue-400 ">
	<!-- <button
		on:click={() => {
			isVisible = !isVisible;
		}}
		>isVisible: {isVisible}
	</button> -->
	<label class="float-right text-4xl">
		<input type="checkbox" bind:checked={visible} />
		visible
	</label>
</div>
<div class="h-10" />

<!-- !!!!!!!!! 4dp and 8dp DP grilles -->
<!-- 8 DP -->
{#if true}
	<div class="fixed inset-0 grid grid-flow-col " id="surface-colums" style="gap:7px;">
		{#each arrw as o}
			<div class="h-full  opacity-50 " style="width: 0px; border-right:1px solid gray " />
		{/each}
	</div>
{/if}
{#if true}
	<div class="fixed inset-0 grid grid-flow-row " id="surface-rows" style="gap:7px;">
		{#each arrh as o}
			<div class="w-full  opacity-50" style="height: 0px; border-top:1px solid gray;" />
		{/each}
	</div>
{/if}

<!-- 4 DP -->
{#if true}
	<div class="fixed inset-0 grid grid-flow-col " id="surface-colums" style="gap:3px;">
		{#each arrw as o}
			<div class="h-full  opacity-50 " style="width: 0px; border-right:1px solid gray " />
		{/each}
	</div>
{/if}
{#if true}
	<div class="fixed inset-0 grid grid-flow-row " id="surface-rows" style="gap:3px;">
		{#each arrh as o}
			<div class="w-full  opacity-50" style="height: 0px; border-top:1px solid gray;" />
		{/each}
	</div>
{/if}

<!-- !!!!!!!! -->
<!-- !!!!!!!! POC 10 -->

<div class="... font-extrabold text-5xl">
	<span class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
		Dj Mike est dans la Plax
	</span>
</div>

<!-- !!!!!!!!! -->
<!-- !!!!!!!!! POC 9 -->
<div class="p-20 ">
	<div class="poc9 h-32  w-32 bg-white" />
</div>

<!-- !!!!!!! -->
<!-- !!!!!!! POC 8 : effect -->
<!-- !!!! POC 8 - bis : clip-path -->
<!-- <div class="grid lg:grid-flow-col">
	<div
		style="height:500px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div
			style="transform: translateX(-50%); height:400px; width:400px"
			class=" absolute top-10 left-1/2 bg-yellow-300"> -->
<!-- <div  class="relative" > -->
<!-- !!!!! CLIP -->

<!-- <div class="anim-svg"> -->

<div class="clipped ">
	<svg class="to-crop">
		<clipPath id="my-clip-path-2" clipPathUnits="objectBoundingBox">
			<path
				d="M0.005,0 l0.05,0.077,0.099,-0.051,0.035,0.08,0.108,-0.043,0.019,0.082,0.116,-0.033,0.003,0.083,0.121,-0.024,-0.012,0.083,0.125,-0.013,-0.028,0.081,0.126,-0.003,-0.043,0.078,0.126,0.007,-0.058,0.074,0.123,0.018,-0.071,0.069,0.119,0.028,-0.084,0.062,0.113,0.037,-0.095,0.055 L1,0.794 l-0.105,0.047,0.095,0.055,-0.113,0.037,0.084,0.062,-0.02,0.005 H0 V0.003" />
		</clipPath>
	</svg>
</div>

<!-- </div> -->

<!-- -webkit-clip-path: url(#my-clip-path-2); -->
<!-- </div> -->
<!-- </div>
	</div>
</div> -->

<!-- !!!!!!! -->
<!-- !!!!!!! POC 7 : mask -->
<div class="grid lg:grid-flow-col">
	<div
		style="height:500px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div
			style="transform: translateX(-50%); height:400px; width:400px;  background: #8f7a66;"
			class="absolute top-10 left-1/2 grid place-items-center">
			<!-- !!!!! OBJET -->
			<div class="el" />
		</div>
	</div>
	<!-- !!!!!! 2eme exemple : https://ishadeed.com/article/thinking-about-the-cut-out-effect/-->
	<div
		style="height:500px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div
			style="transform: translateX(-50%); height:400px; width:400px;  background: white	;"
			class="absolute top-10 left-1/2 grid place-items-center">
			<!-- !!!!! OBJET -->
			<img
				style="display: block; width: 200px; height: 200px;
-webkit-mask-image: radial-gradient(
	circle 20px at calc(100% - 30px) calc(100% - 30px),
	transparent 30px,
	#000 0
); object-fit: cover; border-radius: 50%; margin: 2rem auto;
"
				class=""
				src="https://ishadeed.com/assets/shadeed.jpg"
				alt="" />
		</div>
	</div>
	<!--  !!!!!! ex 2 - mask with SVG - bet solution-->
	<div
		style="height:500px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div
			style="transform: translateX(-50%); height:400px; width:400px;  background: white; "
			class="absolute top-10 left-1/2 grid place-items-center">
			<div class="test-2 bg-yellow-300 " style="width: 200px; height: 200px;">
				<svg role="none" class=" h-full w-full">
					<mask id="test2">
						<circle fill="white" cx="100" cy="100" r="100" />
						<circle fill="black" cx="86%" cy="86%" r="18" />
					</mask>
					<g mask="url(#test2)">
						<image
							class=""
							x="0"
							y="0"
							height="100%"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							xlink:href="https://ishadeed.com/assets/shadeed.jpg" />
						<circle
							fill="none"
							cx="100"
							cy="100"
							r="100"
							stroke="rgba(0,0,0,0.1)"
							stroke-width="2" />
					</g>
				</svg>
			</div>
		</div>
	</div>
</div>

<!-- !!!! POC 6 - bis : clip-path -->
<div class="grid lg:grid-flow-col">
	<div
		style="height:500px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div
			style="transform: translateX(-50%); height:400px; width:400px"
			class="ax-clip-1 absolute top-10 left-1/2 bg-white">
			<!-- !!!!! CLIP -->
			<!-- <svg height="300" width="300" class="bg-orange-400">
				<polygon
					points="0,0 200,50 200,200 0,200"
					style="fill:blue;stroke:red;stroke-width:1" />
			</svg> -->
		</div>
	</div>
</div>

<!-- !!!! -->
<!-- !!!! POC 6 : shapes svg : draw clipped polygon -->
<div class="grid lg:grid-flow-col">
	<div
		style="height:500px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div
			style="transform: translateX(-50%); height:400px; width:400px"
			class="absolute top-10 left-1/2 bg-white">
			<!-- !!!!! SVG -->
			<svg fill="gainsboro" class="h-52 w-52 bg-yellow-400" viewBox="0 0 100 100">
				<circle cx="50%" cy="50%" r="10" />
			</svg>
			<!-- !!!!! SVG -->
			<svg height="250" width="300">
				<!-- <path d="M150 10 L40 200 L260 200Z" /> -->
				<path />
			</svg>
		</div>
	</div>
	<!-- !!!!!! 2eme exemple (activating ZOOM tks to viewport) -->
	<div
		style="height:1000px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div
			style="transform: translateX(-50%); height:400px; width:400px"
			class="absolute top-10 left-1/2 bg-white">
			<!-- !!!!! SVG -->
			<!-- <svg height="210" width="500"> -->
			<!-- class="w-28 h-28" -->
			<svg height="300" width="300" class="bg-yellow-400">
				<polygon
					points="0,0 200,50 200,200 0,200"
					style="fill:lime;stroke:purple;stroke-width:1" />
			</svg>
			<div class="h-10" />
			<svg viewBox="0 0 100 50" height="300" width="300" class="bg-yellow-400">
				<polygon
					points="0,0 200,50 200,200 0,200"
					style="fill:lime;stroke:purple;stroke-width:1" />
			</svg>
		</div>
	</div>
</div>

<!-- !!! -->
<!-- !!! poc 5 : animation material (nav anim) -->
<div class="poc5 grid lg:grid-flow-col">
	<!-- !! bg -->
	<div
		id="playground"
		style="height:500px"
		class="relative   grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<!-- !! socle blanc -->
		<!-- transform:rotate(0.3turn); -->
		<!-- grid grid-rows-5  -->
		<div id="socle-blanc" style="height:400px; width:400px;" class="relative  bg-white">
			<div
				id="row1"
				style="top: 0; left: 0; height: 50px "
				class="absolute w-full border border-gray-200" />
			<div
				id="row2"
				style="top: 50px; left: 0; height: 50px "
				class="absolute w-full border border-gray-200" />

			<!-- animate-ax-3 -->
			<!-- <p transition:fly={}> -->
			<!-- <div class="relative "> -->
			<!-- !! objet centré -->
			<!-- absolute top-1/2 left-1/2 -->
			<!-- style="transform: translate(-50%,-50%);" -->
			<div
				id="row3"
				style="top: 100px; left: 50%; height: 50px; background: whitesmoke; "
				class="absolute z-10    animate-ax-5 border-2 border-gray-300 " />
			<!-- <div class="place-self-center   " /> -->
			<!-- </div> -->

			<!-- <div class="centered" in:spin="{{duration: 8000}}" out:fade>
				<span>transitions!</span>
			</div> -->
			<!--
			span {
				position: absolute;
				transform: translate(-50%,-50%);
				font-size: 4em;
			} -->
			<div
				id="row2"
				style="top: 150px; left: 0; height: 50px "
				class="absolute w-full border border-gray-200" />
			<div
				id="row2"
				style="top: 200px; left: 0; height: 50px "
				class="absolute w-full border border-gray-200" />
			<div
				id="row2"
				style="top: 250px; left: 0; height: 50px "
				class="absolute w-full border border-gray-200" />
			<div
				id="row2"
				style="top: 300px; left: 0; height: 50px "
				class="absolute w-full border border-gray-200" />
		</div>
	</div>
</div>
<!-- !!!!!!!  -->
<!-- !!!!!!! poc 4 - bis (variante svelte) -->
{#if visible}
	<!-- {#key z} -->
	<div class="grid lg:grid-flow-col">
		<!-- !! normal + linear -->
		<!-- ARENE -->
		<div
			style="height:500px"
			class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
			<!-- SOCLE -->
			<div style="height:400px; width:400px" class="absolute top-10 left-1/3 bg-white" />
			<!-- animate-ax-4 -->
			<!-- OBJET -->
			<div
				transition:svelte_ax_3={{duration: 3000}}
				class="absolute top-44 left-1/3 ml-40 h-28 w-28  rounded-full bg-radial-at-t from-yellow-500 to-yellow-600 " />
		</div>
	</div>
	<!-- {/key} -->
{/if}
<!-- !!!!!!!  -->
<!-- !!!!!!! poc 4 -->
<!-- bg-gradient-to-b from-teal-500  to-teal-600 -->
<div class="grid lg:grid-flow-col ">
	<!-- !! rotation + ease -->
	<div
		style="height:500px"
		class="relative grid  w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<!-- <div class="" style="transform:rotate(0turn);"> -->
		<div
			style="transform:rotate(0.3turn); height:400px; width:400px"
			class="absolute top-10 left-1/3 grid place-items-center bg-white">
			<div
				class="h-28 w-28 animate-ax-3 rounded-lg bg-radial-at-t from-teal-500 to-teal-600 " />
		</div>
	</div>
	<!-- </div> -->
	<!-- !! normal + linear -->
	<div
		style="height:500px"
		class="relative grid w-full place-items-center border border-blue-gray-800 bg-radial-at-t from-gray-200 to-gray-300 ">
		<div style="height:400px; width:400px" class="absolute top-10 left-1/3 bg-white" />
		<div
			class="absolute top-44 left-1/3 ml-40 h-28 w-28 animate-ax-4 rounded-full bg-radial-at-t from-teal-500 to-teal-600 " />
	</div>
</div>

<!-- !!!!  -->
<!-- !!!! poc 3 -->
<!-- bg-gradient-to-b from-teal-500  to-teal-600 -->
<div
	class="relative grid h-96 w-full place-items-center border border-blue-gray-800
 bg-radial-at-t from-teal-500 to-teal-600
 ">
	<!-- !!!!!! object a animer-->
	<div class=" obj-2 rounded-2xl shadow-2xl transition-all duration-1000" />
</div>
<!-- !!!!!!!! -->
<!-- !!!!!!!! poc 1 (element centré, donc on indiquela hauteur) - rectangle zoom full sceen (cf. transitions)-->
<div class="relative grid h-96 w-full place-items-center border border-blue-gray-800">
	<!-- !!!!!! object a animer-->
	<!-- ANIMISTA -->
	<!-- <div class="obj-1 hover:animate__scale-up-center  " /> -->
	<!-- AXEL -->
	<div class="obj-2 transition-all duration-1000 " />
</div>
<!-- !!  -->
<!-- !! poc 2 -->
<!-- <div class="fixed inset-0 grid   overflow-hidden border  border-blue-gray-800"> -->
<div
	class="relative grid overflow-hidden border  border-blue-gray-800   bg-radial-at-t from-teal-500  to-teal-600">
	<!-- !!!!!!!!! DP grilles -->
	<!-- {#if true}
		<div class="absolute inset-0 grid grid-flow-col " id="surface-colums" style="gap:8px;">
			{#each arrw as o}
				<div class="aspect-square h-full bg-gray-300 opacity-50" style="width: 8px;  " />
			{/each}
		</div>
		<div class="absolute inset-0 grid grid-flow-row " id="surface-rows" style="gap:8px;">
			{#each arrh as o}
				<div class="aspect-square w-full bg-gray-300 opacity-50" style="height: 8px;  " />
			{/each}
		</div>
	{/if} -->

	<!-- !!!!!! PHONE 1 - fake moobile a mettre en 3D -->
	<!-- style="transform:rotateZ(0turn) rotateY(0.4turn) rotateX(-0.22turn)" -->
	<div
		style="transform:rotateY(0.05turn) rotateX(-0.18turn) rotateZ(0.09turn)"
		class="mobile-canvas shadow-2x     ">
		<div class="obj-3--coque  " />
		<div class="obj-4--screen ">
			<img src="img/fun/6.jpg" alt="" />
		</div>
	</div>
	<!-- !!!!!! PHONE 2 - fake moobile a mettre en 3D -->
	<!-- <div class="mobile-canvas ml-32 -mt-52 shadow-2xl"> -->
	<div class=" mobile-canvas animate-ax-2      shadow-2xl">
		<div class="obj-3--coque  " />
		<div class="obj-4--screen ">
			<img src="img/fun/7.jpg" alt="" />
		</div>
	</div>
	<!-- !!!!!! PHONE 3 - fake moobile a mettre en 3D -->
	<div class="mobile-canvas animate-spin-slow shadow-2xl">
		<div class="obj-3--coque  " />
		<div class="obj-4--screen ">
			<img src="img/fun/8.jpg" alt="" />
		</div>
	</div>
</div>

<!-- !!!!!! -->
<!-- !!!!!! POC 11 -->

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="1182"
	height="1113"
	stroke="#000"
	stroke-linecap="round"
	stroke-linejoin="round"
	fill="#fff"
	fill-rule="evenodd"
	><defs
		><linearGradient id="A" x1="-1.76%" x2="-1.76%" y1="-56.43%" y2="103.19%"
			><stop offset="0%" stop-color="#8da6d8" /><stop
				offset="100%"
				stop-color="#2e5cb8" /></linearGradient
		></defs
	><path
		d="M728.9391 464.8471c-7.5213 0-9.7081-4.3491-9.7081-10.866 0-2.1716.2747-4.6223.6132-7.2031 1.6476-11.2692 5.6697-17.717 15.3778-17.717 6.5664 0 9.7675 2.917 9.7675 8.2135v2.5824h6.5142c.0723 0 .0723-2.3773.0723-2.9181 0-7.7396-4.7191-15.0803-16.3436-15.0803-15.7958 0-22.2914 8.522-24.6845 25.2286-.3428 2.2418-.5479 4.3344-.5479 6.568 0 9.8469 3.9008 18.8037 17.8481 18.8037 10.5973 0 16.8916-5.1316 20.5813-11.4472l-6.2236-4.1625c-4.0325 6.3172-8.4115 7.998-13.2667 7.998zm42.7383-31.1023c-12.6524 0-18.1186 6.4478-19.9643 19.2803a33.272 33.272 0 0 0-.3466 4.484c0 8.2826 3.8976 14.8735 14.6988 14.8735 12.6519 0 18.1921-6.7248 20.0377-19.3575.2051-1.628.3423-3.1222.3423-4.6147.0032-8.4186-4.0292-14.6656-14.7679-14.6656zm5.2654 19.2846c-1.369 9.3055-4.3056 12.1578-9.8485 12.1578-4.4417 0-6.6285-1.8342-6.6285-7.3347 0-1.3598.1388-2.9872.4108-4.8231 1.3685-9.2337 4.1032-12.0859 9.7093-12.0859 4.514 0 6.7672 1.8331 6.7672 7.4005 0 1.3581-.1388 2.9214-.4103 4.6854zm41.3067-30.4961l-2.1172 12.4662c-.136 1.0834-.0664.7232.3466 1.7423-1.9827-1.4925-5.5413-2.4801-7.9348-2.4801-11.3514 0-17.7078 5.1027-19.7575 19.3635a27.702 27.702 0 0 0-.3422 4.5516c0 10.3937 6.1528 14.2678 14.424 14.2678 3.4921 0 6.9086.0718 9.5726-2.1661l.6807 4.2245h6.5659l7.6574-51.9697h-9.0955zm-6.4951 40.6815c-3.0743 1.8287-6.0806 2.2423-7.9262 2.2423-4.9923 0-6.3591-2.5824-6.3591-6.7221 0-1.5632.2051-3.392.481-5.3671 1.5698-10.7953 5.0586-12.7003 9.5721-12.7003 2.9372 0 5.192.4783 7.3162 1.6351l-3.084 20.9121zm35.5591-29.47c-12.5163 0-18.3917 5.9037-20.3777 19.2803-.2079 1.6318-.3455 3.195-.3455 4.6881 0 9.1678 4.7207 14.6694 15.1096 14.6694 8.0692 0 14.0915-3.33 17.3029-9.4421l-6.907-2.7842c-1.9801 2.9855-4.6468 5.0238-9.3654 5.0238-5.0586 0-7.111-1.3521-7.111-5.8351 0-.8842.0691-2.1689.2067-2.1689h24.6801c.3466-3.4649.7514-5.914.7514-7.9446 0-6.7868-2.5954-15.4883-13.9441-15.4883zm4.7159 16.5058h-15.0427c1.5072-3.4649 4.0325-8.8278 9.231-8.8278 4.0324 0 6.0185 2.3408 6.0185 6.3472-.0044.679-.0664 2.4806-.2068 2.4806zm35.5418-17.3242l.8194-6.9282H869.106l-.8167 6.9282h5.0586l-5.4662 34.6462h-5.0657l-.8156 6.9304h19.2808l.8238-6.9304h-5.0631l5.4679-34.6462h5.0614zm39.1824 10.3938l2.4643-6.9283h-6.6328l-4.7822.98c-2.6684-1.6933-6.2933-2.9655-9.7082-2.9655-9.7821 0-18.1202 4.6909-18.1202 15.3545 0 2.9916 1.0926 5.4058 2.3892 7.0376-2.0464 1.0839-3.8256 2.8996-3.8256 5.3487 0 1.085.4075 2.196 1.2313 3.2119-4.1059 2.4491-6.6284 6.5071-6.6284 11.2567 0 9.1722 9.639 11.1283 17.0232 11.1283 9.2974 0 20.3772-2.1095 20.3772-13.8587 0-4.0047-2.529-7.1339-9.8452-8.4915l-13.196-2.449c-1.5028-.2743-1.8456-.7493-1.8456-1.4278 0-1.0191.6214-1.5589 1.6421-1.5589l.8902.1349c1.7776.406 3.83.6127 5.9472.6127 9.5074 0 17.9842-4.0765 17.9842-14.6699 0-1.4953-.2715-2.5073-.9555-4.1397 1.1606.5458 2.6684 1.4283 3.2783 1.4283h2.3125v-.0043zm-18.7992 28.1096c2.5959.4778 3.4828 1.4267 3.4828 3.1249 0 5.5016-5.9488 6.1806-10.2544 6.1806-6.5642 0-9.0242-1.5589-9.0242-5.0265 0-3.0574.8858-4.4803 2.941-6.6562l12.8548 2.3772zm-2.8082-17.7877c-3.9661 0-6.154-1.424-6.154-4.8225 0-5.0239 2.9409-7.9452 8.0687-7.9452 4.1032 0 6.0876 1.6982 6.0876 5.0211 0 5.0265-2.8746 7.7466-8.0023 7.7466zm45.8985-19.8973c-3.8301 0-7.245 1.8663-11.4874 5.1903l-.6138-2.5432h-7.5246l-5.2638 38.1095h9.0938l3.9677-28.9003c2.6678-1.6291 5.9472-3.9943 8.7511-3.9943 3.417 0 4.6511 1.6377 4.6511 4.7593 0 .7482-.0724 2.9628-.2095 3.7768l-3.3458 24.3585h9.095l3.3463-24.5566c.1387-1.1486.2742-3.0416.2742-4.1255.0044-6.4592-3.077-12.0745-10.7343-12.0745zm28.0101 31.21l.0696-.9331 3.9628-27.6298h-15.1118l-.9527 6.9283h6.6284c-.5479 0-.8891.6072-.9555 1.154l-2.7358 18.4021c-.136.8853-.2024 2.7288-.2024 3.4704 0 4.7529 2.5955 8.1563 7.9262 8.1563h4.6505l1.0263-6.9304h-2.9383c-1.0289 0-1.3673-1.8043-1.3673-2.6178zm5.8781-42.4215h-8.8888c-.5473 0-.5473-1.9997-.6137-1.3206l-1.2346 9.7631c-.0708.6143-.0708 1.9523.4772 1.9523h8.893c.5474 0 .5474-2.374.6143-2.9916l1.2341-7.5355c.0691-.679.0691.1323-.4815.1323zm18.5451 42.6522c-2.2532 0-3.349-.9516-3.349-2.9855l.0696-.1393 2.8719-18.7405h10.3915l3.1434-6.9283h-12.58l2.1177-15.2483-9.5678 3.0389-1.7128 12.2094h-5.537l-.9555 6.9283h6.4261c-.6143 3.4655-1.2314 1.2172-1.2983 1.8989l-2.4627 16.4324c-.136.7498-.136 1.2923-.136 1.9681 0 6.4521 4.7855 8.8664 10.5352 8.8664 5.3302 0 9.6385-1.5459 12.9919-4.335l-4.2419-5.1816c-2.1248 1.2873-3.5586 2.2161-6.7063 2.2161zm33.368-31.4407c-12.5125 0-18.3917 5.9037-20.3761 19.2803-.2051 1.6318-.3428 3.195-.3428 4.6881 0 9.1678 4.7175 14.6694 15.1096 14.6694 8.0693 0 14.0916-3.33 17.3002-9.4421l-6.9043-2.7842c-1.98 2.9855-4.6495 5.0238-9.3697 5.0238-5.0559 0-7.111-1.3521-7.111-5.8351 0-.8842.0734-2.1689.2111-2.1689h24.6811c.3412-3.4649.752-5.914.752-7.9446 0-6.7868-2.5976-15.4883-13.9501-15.4883zm4.7203 16.5058h-15.0427c1.5028-3.4649 4.0292-8.8278 9.2309-8.8278 4.0325 0 6.0185 2.3408 6.0185 6.3472-.0043.679-.0707 2.4806-.2067 2.4806zm34.3942-16.5074c-3.2827 0-6.3597 1.869-9.4383 4.7828l-.5463-2.1341h-7.5186l-5.2665 38.1095h9.1635l4.0324-29.5119c2.3947-1.4223 5.1294-2.6379 7.7281-2.6379 1.6433 0 3.2125-.26 4.7159-.0576l1.1693-7.8729c-1.3744-.2715-2.7418-.6763-4.0395-.6763zM843.749 395.236c-20.6966-8.8849-40.0639-31.4664-40.1102-54.5723-.056-25.191 16.0183-46.5781 36.0114-60.6338-2.4034 9.0188-3.7142 17.2681 2.2401 25.3347 5.5359 7.5001 15.2309 11.1446 24.3857 9.1667 21.3904-4.6505 22.372-28.0046 9.6908-41.6108-12.5381-13.474-24.6671-28.6935-19.8946-48.2333 2.3887-9.7952 8.4447-18.9701 16.1162-25.5284-5.8966 15.3898 10.8601 30.568 21.9013 38.128 19.1513 13.117 40.1651 23.0297 57.7744 38.4054 18.5234 16.1598 32.202 38.0094 29.44 63.3511-2.9937 27.4676-24.9706 46.5716-49.6219 56.2161 52.0917-11.4189 105.9163-51.571 107.0193-108.9465.9135-47.2028-31.6911-83.5297-72.0804-104.3275l-2.1101-1.1438c1.1084 2.6711 1.4713 4.9433 1.4294 6.9773.3613-1.4996.6067-3.0417.6764-4.6321-.0098 1.8897-.2585 3.7702-.74 5.5984l.0636-.9663c-.6001 2.5062-1.61 4.8976-2.9904 7.0778l.5925-.6328c-8.0578 13.2732-29.8715 16.1554-40.6478 2.4116-17.3236-22.1081.3624-45.9443 2.8371-69.3555 3.0971-29.341-15.4301-57.825-38.4022-74.87 12.6523 20.3266-4.0162 47.2185-17.3525 62.253-12.9309 14.5737-28.6576 26.7413-42.933 39.9829-15.3344 14.2216-30.0767 29.2028-42.6812 45.8952-25.2095 33.4099-40.6423 75.43-29.3007 117.111 11.334 41.6522 47.6631 68.1665 88.6884 77.5428z"
		fill="#ee4323"
		stroke="none" /><g stroke-width="4.9"
		><path d="M20 301.7082V237.815l164.7682 135.959v63.1503z" fill="#24478f" /><path
			d="M184.9299 373.9226l224.7575-50.0745v64.1905l-224.7575 49.7773v-63.8933z"
			fill="#2e5cb8" /><path
			d="M409.8491 323.8481v64.1905L470 202.3023V138.409z"
			fill="#193366" /><path
			d="M305.3934 2.45L470 138.409l-60.1509 185.4391-225.0809 49.7773L20.1617 237.815 80.3126 52.2273zm-5.6593 107.8756c51.7427 24.8144 69.5293 79.6437 39.4538 122.586-29.7521 42.7936-96.3708 57.504-148.4369 32.6896-51.7427-24.5172-69.5293-79.6438-39.4538-122.4374 29.5903-42.9422 96.0474-57.8011 148.2752-32.9868z"
			fill="#8da6d8" /><path
			d="M140.9487 213.4465c-8.6074-23.5605-5.0345-49.4433 9.7017-70.2827 30.3989-42.9422 97.0176-57.6525 148.7604-32.6896 44.4664 21.2483 64.0316 64.4877 49.6406 103.2694-8.4982-22.5926-26.2485-41.2496-49.4789-52.0061-52.0662-24.6658-118.6849-9.9555-148.7604 32.9867-4.0743 5.9483-7.333 12.3365-9.7018 19.0194z"
			fill="url(#A)" /></g
	><g stroke="none"
		><g fill="#172b4d"
			><path
				d="M215.0034 512.45v.0082-.0082C96.6447 512.45 0 550.8924 0 598.6263c0 12.5735 25.8086 192.8498 36.0473 264.3424 4.59 32.0646 73.1699 79.0722 178.8996 79.0722l.1093-.3824v.3824c105.7266 0 174.3065-47.0076 178.8965-79.0722L430 598.6263c.0031-47.7294-96.6379-86.1763-214.9966-86.1763zm0 371.6739c-37.7447 0-68.3439-36.973-68.3439-82.5706 0-45.6065 30.5992-82.5714 68.3439-82.5714s68.3439 36.9649 68.3439 82.5714c0 45.5976-30.5992 82.5706-68.3439 82.5706zm-.0385-258.8596c-76.0451-.1491-137.6688-16.1109-137.6439-35.6612s61.6975-35.2752 137.742-35.1268 137.6688 16.1065 137.644 35.6613-61.6976 35.2707-137.7421 35.1267zM369.532 934.6226c-3.2688 0-5.887 2.7939-5.887 2.7939s-52.9459 50.6552-148.6382 50.6597c-95.696-.0045-148.6382-50.6597-148.6382-50.6597s-2.6219-2.7939-5.887-2.7939c-3.9052 0-7.6062 3.1679-7.6062 10.1619 0 .7384.0596 1.4776.172 2.1994l15.2751 96.5797c7.174 39.0885 70.4635 68.5841 146.6806 68.5879h0 .0037.0031 0c76.2208-.0038 139.5072-29.4994 146.6806-68.5879 1.0549-5.7406 7.058-43.4401 15.2751-96.5797.1124-.7218.1726-1.461.1726-2.1994 0-6.994-3.7047-10.1619-7.6062-10.1619z" /><ellipse
				cx="214.936"
				cy="801.5267"
				rx="34.2511"
				ry="41.3809" /></g
		><path
			d="M620 847.45v265h280.5882 280.5883v-265-265H900.5882 620v265zm452.236-21.1159c14.2525 3.3649 25.1203 9.338 35.0967 19.0966 5.1663 5.2159 12.8256 14.7227 13.4507 16.9945.1781.6724-24.2295 16.1517-39.0158 24.8165-.5346.3366-2.6719-1.8503-5.0773-5.2158-7.2146-9.9269-14.787-14.2173-26.3662-14.9738-17.0134-1.0945-27.9697 7.3186-27.8806 21.3676 0 4.122.6236 6.562 2.4046 9.9275 3.7417 7.3187 10.689 11.6932 32.5132 20.6104 40.1732 16.3214 57.3642 27.089 68.0539 42.4 11.9355 17.0779 14.6081 44.3352 6.5019 64.6103-8.9073 22.0407-30.9987 37.0152-62.0851 41.9793-9.6206 1.598-32.4233 1.3456-42.756-.4213-22.5368-3.7849-43.9149-14.3014-57.099-28.098-5.1656-5.3841-15.231-19.4331-14.6081-20.4434.2672-.3365 2.5835-1.6821 5.1663-3.1124l20.8442-11.3573 16.1226-8.8331 3.3853 4.7111c4.7209 6.8144 15.0529 16.1524 21.2889 19.2655 17.9037 8.9172 42.4895 7.6552 54.6032-2.6083 5.1656-4.4586 7.3044-9.0862 7.3044-15.9 0-6.1414-.8011-8.8338-4.1871-13.4607-4.3645-5.8883-13.2718-10.8524-38.5689-21.1993-28.9504-11.7779-41.4204-19.0972-52.8229-30.7062-6.591-6.7304-12.8256-17.4986-15.4092-26.5007-2.1373-7.4876-2.6733-26.2476-.9799-33.8193 5.9674-26.4152 27.0796-44.8393 57.5423-50.3076 9.8872-1.7662 32.8688-1.0938 42.5779 1.1779zM940.4935 848.459l.1782 21.7048h-36.5214-36.5214v98.0083 98.0082H841.798h-25.8324v-98.0082-98.0083H779.445h-36.5207v-21.2841c0-11.7773.2666-21.62.6229-21.8725.2673-.3372 44.7167-.5048 98.6071-.4213l98.0719.2524.2673 21.6207z"
			fill="#007acc" /></g
	></svg>

<!-- !!!!!!!! centrage made-in-svelte -->
<style>
	/* !!!!!!!!! POC 9 */
	.poc9 {
		transform: rotateX(51deg) rotateZ(43deg);
		transform-style: preserve-3d;
		border-radius: 32px;
		box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
			28px 28px 28px 0 rgba(34, 33, 81, 0.25);
		transition: 0.4s ease-in-out transform, 0.4s ease-in-out box-shadow;
	}
	.poc9:hover {
		transform: translate3d(0px, -16px, 0px) rotateX(51deg) rotateZ(43deg);
		box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
			54px 54px 28px -10px rgba(34, 33, 81, 0.15);
	}

	/* poc 8 */
	.clipped:hover .anim-svg {
		@apply h-20 w-20  opacity-100;
		scale: 1.5;
	}
	.clipped {
		/* width: 100%; */
		height: 700px;
		background: turquoise url(https://source.unsplash.com/600x600?summer);
		/* background-size: cover; */
		/* -webkit-clip-path: url(#my-clip-path-2); */
		clip-path: url(#my-clip-path-2);
	}
	.anim-svg {
		@apply h-0 w-0 opacity-0;
		scale: 0;
		/* transition: opacity 500ms, clip-path 1000ms cubic-bezier(0.4, 0, 1, 1); */
	}
	/* !!!!!!! poc 7 */
	.el {
		/* transform: scale(0.5); */
		width: 100%;
		height: 100%;
		padding: 1rem;

		background-image: url(https://images.unsplash.com/photo-1528287942171-fbe365d1d9ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&w=1200&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;

		mask-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/sun.svg);
		mask-size: 100%;
		mask-repeat: no-repeat;
		mask-position: center;
	}

	/* !!!!! poc 6 - bis */
	.ax-clip-1 {
		clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
	}

	/* !!!!! poc 5 */
	.poc5 path {
		d: path('M150, 10 L40, 200 L260, 200 L260, 200Z');
		fill: #4c6edb;
		transition: all 0.35s ease;
	}

	.poc5 path:active {
		d: path('M220, 10 L40, 10 L40, 220 L220, 220Z');
		fill: #6e40aa;
	}
	/* !! poc 2 */
	.pos-1 {
		@apply -translate-y-52 translate-x-36;
	}
	.pos-2 {
		@apply -translate-y-44 translate-x-20;
	}
	.mobile-canvas {
		/* @apply -skew-y-12 rotate-45 */
		/* transform: scale(2); */
		/* transform: rotateX(45deg); */
		@apply relative h-56 w-36 border-blue-gray-800;
	}
	.obj-4--screen,
	.obj-3--coque {
		@apply absolute;
	}
	.obj-3--coque {
		@apply top-0 left-0  h-56 w-36 rounded-xl bg-blue-gray-500;
	}
	.obj-4--screen {
		@apply top-4 left-2  h-48  w-32 bg-gray-100;
	}

	/* !! poc 1 */
	.obj-2 {
		@apply border-blue-400;
	}
	.obj-1 {
		@apply border-red-400;
	}
	.obj-1,
	.obj-2 {
		@apply relative h-32 w-32 border bg-white;
	}
	.obj-1:hover,
	.obj-2:hover {
		/* h-full w-full */
		@apply h-3/5 w-3/5 bg-gray-200;
	}
	/* !!!!! */
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>

<script>
	// !!!!!!!
	// !!!!!!! css
	// !!!!!!!
	import '../lib/1-shell/ui/0-css/0-all.css'
	// import '$lib/1-shell/ui/0-css/0-all.css'
	// !!!!!!!
	import {fade, fly} from 'svelte/transition'
	import {elasticIn, circOut, circInOut, quartInOut, linear, elasticInOut} from 'svelte/easing'
	// !!!!
	function svelte_ax_3(node, {duration}) {
		return {
			duration,
			css: (t) => {
				// console.log('time : ', t);
				const eased = linear(t)
				// const eased = elasticInOut(t);
				// const eased = quartInOut(t);
				// const eased = circOut(t);
				let zz = 10 * eased

				let p1 = z * 2
				let p2 = z * 4
				let p3 = 10 * zz

				// console.log(eased);
				// if (t >= 0.5) {
				// 	z = z - (1 - eased);
				// 	console.log('actual Z after 0.5 : ', z);
				// 	// p1 *= -1;
				// 	// p2 *= -1;
				// 	// p3 *= -1;
				// } else {
				z = 1 + eased
				console.log('actual Z : ', z)
				// }

				// const shadowColor = '0deg 0% 0%';
				const shadowColor = '0deg 0% 68%'

				// box-shadow: calc(${zz} * 0.1px) calc(${zz} * 0.4px) calc(${zz} * 0.5px) hsl(${shadowColor} / 0.24),,
				// box-shadow: 0.1px 0.4px 0.5px hsl(${shadowColor} / 0.24),
				// const p1 = zz * 0.1;
				// const p2 = zz * 0.4;

				// console.log(' - ', p3);
				// console.log(p1, ' - ', p2, ' - ', p3); !!!!!
				// 2.4px 8.4px 10.1px -2.3px hsl(${shadowColor} / 0.26);
				// transform: scale(${z}) translateX(calc(10 * ${zz}px)) translateY(calc(10 * ${zz}px));
				return `
				transform: scale(${z}) ;
				box-shadow: ${p1}px ${p2}px ${p3}px hsl(${shadowColor});
				`
				// 		0.6px 0.8px 1.4px hsl(var(--shadow-color) / 0.04),
				// 14.8px 22.1px 38.3px -0.1px hsl(var(--shadow-color) / 0.16),
				// 34.3px 51.1px 88.6px -0.3px hsl(var(--shadow-color) / 0.28),
				// 75.6px 112.6px 195.3px -0.4px hsl(var(--shadow-color) / 0.39);
			}
			// ,easing: elasticInOut,
			// duration: 2000,
		}
	}

	// !!
	let visible = false
	let z = 0 // for svelte
	// !!
	let arrw
	let arrh
	let iw
	let ih
	let ow
	let oh

	$: {
		// console.log('debug screen : ', iw, ih, ow, oh); !!!!!
		arrw = new Array(iw)
		arrh = new Array(ih)
	}

	// function handleKeydown(event) {
	// 	key = event.key;
	// 	keyCode = event.keyCode;
	// }
</script>
