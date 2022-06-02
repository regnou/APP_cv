/** @type {import('@sveltejs/kit').Config} */
// import adapter from '@sveltejs/adapter-auto'; // orig
// import JSON_ENTRY from './JSON_ENTRY.js';

import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';

const config = {
	// MUI
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// 2 SSG
		// adapter: adapter(),
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: '200.html' // orig - null
		}),

		// 2 PRE-RENDER (dynamic / defalt permet de pousser le truc sur tt les pages dynamiques)
		prerender: {
			crawl: true,
			default: true,
			enabled: true,
			onError: 'fail'
			// entries: JSON_ENTRY,
		}

		// 3 Ax - to add to have firebase working
		// vite: {
		//   ssr: {
		//   external: ['firebase'],
		//   },
		// },
		// 	// from orig starter sveltekit
		// 	// Override http methods in the Todo forms
		// 	methodOverride: {
		// 		allowed: ['PATCH', 'DELETE']
		// 	}
	}
};

export default config;
