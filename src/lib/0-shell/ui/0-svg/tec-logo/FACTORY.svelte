{#if type === 'wordpress'}
	<Wordpress />
{:else if type === 'woocommerce'}
	<Woocommerce />
{:else if type === 'svelte'}
	<Svelte />
{:else if type === 'css'}
	<Css />
{:else if type === 'firebase'}
	<Firebase />
{:else if type === 'firestore'}
	<Firestore />
{:else if type === 'ganalytics'}
	<Ganalytics />
{:else if type === 'gcloud'}
	<Gcloud />
{:else if type === 'gcp'}
	<Gcp />
{:else if type === 'glocals'}
	<Glocals />
{:else if type === 'gmap'}
	<Gmap />
{:else if type === 'html'}
	<Html />
{:else if type === 'jest'}
	<Jest />
{:else if type === 'js'}
	<Js />
{:else if type === 'node'}
	<Node />
{:else if type === 'playwright'}
	<Playwright />
{:else if type === 'pupp'}
	<Pupp />
{:else if type === 'storybook'}
	<Storybook />
{:else if type === 'stripe'}
	<Stripe />
{:else if type === 'tailwind'}
	<Tailwind />
{:else if type === 'vite'}
	<Vite />
{/if}

<script>
	import Css from './css.svelte';
	import Firebase from './firebase.svelte';
	import Firestore from './firestore.svelte';
	import Ganalytics from './ganalytics.svelte';
	import Gcloud from './gcloud.svelte';
	import Gcp from './gcp.svelte';
	import Glocals from './glocals.svelte';
	import Gmap from './gmap.svelte';
	import Html from './html.svelte';
	import Jest from './jest.svelte';
	import Js from './js.svelte';
	import Node from './node.svelte';
	import Playwright from './playwright.svelte';
	import Pupp from './pupp.svelte';
	import Storybook from './storybook.svelte';
	import Stripe from './stripe.svelte';
	import Svelte from './svelte.svelte';
	import Tailwind from './tailwind.svelte';
	import Vite from './vite.svelte';
	import Woocommerce from './woocommerce.svelte';
	import Wordpress from './wordpress.svelte';
	export let type;
</script>
