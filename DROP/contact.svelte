<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<!-- <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/> -->
	<!-- <html lang={siteLanguage} /> -->
</svelte:head>

<!-- -0 -->
<!-- -0 CONTACT -->
<!-- -0 -->
<section class="text-blueGray-700 ">
	<div class="axHeight relative grid items-center lg:px-20">
		<ContactIcon />
		<div
			class="bg-white mx-auto my-5 flex w-full max-w-md transform flex-col px-10 py-5 duration-500 ease-in-out "
		>
			<div class="">
				<h2 class="font-extrabold text-neutral-600 text-center text-3xl">Contact us !</h2>
				<p class="special-font-ax font-extrabold mb-2 text-center text-2xl ">
					info@tgmine.com
				</p>

				<!-- <form action="#" method="POST" class="space-y-6"></form> -->
				<div class="mt-4 space-y-6">
					<!-- <div class="grid grid-cols-1 gap-2 lg:grid-cols-2"> -->
					<div class="grid grid-cols-1 gap-2 ">
						<AxInput
							bind:this={name}
							inputValue=""
							inputId="name"
							labelName="name"
							placeholder="Votre nom"
						/>
						<AxInput
							bind:this={mail}
							inputValue=""
							inputId="mail"
							labelName="mail"
							placeholder="Votre mail"
						/>
						<!-- <input
          bind:this={mail}
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          placeholder="Your Email" -->
						<AxArea
							bind:this={msg}
							inputValue=""
							inputId="msg"
							labelName="Message"
							placeholder="Votre Message..."
						/>

						<div class="h-2" />

						<div>
							<!-- type="submit" -->
							<button
								on:click={() => handleClickSend()}
								class="bg-blue-400 font-medium text-white hover:bg-blue-500 focus:ring-blue-500 flex w-full transform items-center justify-center rounded-xl px-10 py-4 text-center text-base transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
							>
								Send
							</button>
						</div>
					</div>
					<!-- cf contact.md -->
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.axHeight {
		height: calc(100vh - 56px);
	}
	.special-font-ax {
		font-weight: 300;
		font-family: 'Open Sans Condensed', sans-serif;
	}
</style>

<script>
	import {onMount} from 'svelte'
	// import { add } from '../../../src/dao.js';
	import {goto} from '$app/navigation'
	import AxArea from '$lib/2-ui-form/AxArea.svelte'
	import AxInput from '$lib/2-ui-form/AxInput.svelte'
	import ContactIcon from '$lib/shell/ui/0-icon/UserCircleIcon.svelte'
	import FooterUltime from '$lib/shell/ui/footer/FooterUltime.svelte'

	let name
	let mail
	let msg
	let pageTitle = 'Contact  | TGMINE'
	let metadescription = ''

	onMount(() => {})

	const handleClickSend = async () => {
		// verification des chmps
		if (name.inputValue === '' || mail.inputValue === '' || msg.inputValue === '') {
			window.alert('Error : You must fill all fields before sending the email !')
			return
		}
		// https://axel.app/logo/logo.png
		const json = {
			replyTo: mail.inputValue,
			to: 'contact@axel.app',
			template: {
				name: 'TPL_MAIL_CONTACT',
				data: {
					nameContact: name.inputValue,
					mailContact: mail.inputValue,
					msgContact: msg.inputValue
				}
			}
		}
		// const uid = await add('mail', json);
		const uid = 0 // TODO - remettre ci dessus
		window.alert('Your email has been sent ! (you are redirected to the home page)')
		await goto('https://www.axel.app')
	}
</script>
