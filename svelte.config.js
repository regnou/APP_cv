/** @type {import('@sveltejs/kit').Config} */
// !!!!
// !! SVELTE CONFIG [JS]
// !!!!!!!!
import preprocess from 'svelte-preprocess'
// !!!!!! ADAPTERS
import adapter from '@sveltejs/adapter-vercel'
import adapterStatic from '@sveltejs/adapter-static'
// import adapter from '@sveltejs/adapter-auto'; // orig
// import JSON_ENTRY from './JSON_ENTRY.js';
// !!!!!! PLUGINS
import {plugin as vitePluginMarkdown, Mode} from 'vite-plugin-markdown'
import md from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import hljs from 'highlight.js'
import hljs_svelte from 'highlightjs-svelte'
import svg from '@poppanator/sveltekit-svg'
// !!!!!!
// !!
// !! [PLUGINS]
// !!
const svgPlugin = svg({
	svgoOptions: {
		plugins: [
			{
				name: 'preset-default',
				params: {
					overrides: {
						removeViewBox: false
					}
				}
			},
			'removeDimensions'
		]
	}
})
// !!
const markdownIt = md({
	typographer: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(str, {language: lang}).value
			} catch {
				console.log(`error highlighting for ${lang}`)
			}
		}

		return '' // use external default escaping
	}
}).use(markdownItAnchor, {
	permalink: markdownItAnchor.permalink.headerLink({safariReaderFix: true})
})
// !!
hljs_svelte(hljs)
// !!
const mdPlugin = vitePluginMarkdown({
	mode: Mode.HTML,
	markdownIt
})
// !!
// !! [CONFIG]
// !!
const config = {
	// !!!!!!!!
	// !!!!!!!! PRE-PROCESS
	// !!!!!!!!
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	// !!!!!!!!
	// !!!!!!!! KIT
	// !!!!!!!!
	kit: {
		// !!!!!! PRE-RENDER
		// 2 PRE-RENDER (dynamic / defalt permet de pousser le truc sur tt les pages dynamiques)
		prerender: {
			crawl: true,
			default: true,
			enabled: true,
			onError: 'fail'
			// entries: JSON_ENTRY,
		},
		// !!!!!! ADAPTER - TODO - adapter-firebase
		// adapter: adapter({edge: false}), // #-with-svelte
		// adapter: adapter(),
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: '200.html' // orig - null
		}),
		// !!!!!! OVERRIDES ???
		// from orig starter sveltekit: Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE']
		},
		// !!!!!! VITE
		vite: {
			// ssr: { external: ['firebase'],},
			plugins: [svgPlugin, mdPlugin],
			test: {
				coverage: {
					reporter: ['text', 'json', 'html']
				},
				mockReset: true,
				environment: 'jsdom',
				globals: true,
				setupFiles: 'src/setupTests.ts'
			}
		}
	}
}

export default config
