# Axel REGNOULT

`CV`

> https://www.cv-regnoult-axel.web.app

`COMPANY`

> http://www.web-agency.app

---

## Starter-stack = material design + tailwind + sveltkit + TS + jest

---
0. Configure SASS
`npx smui-theme template src/theme`
`npm run prepare`
2. To launch the project in dev mode
`npm run dev`
2. To deploy on Firebase Hosting
`npm run build`
`npm run deploy`

---

# SMUI - relancer cette cmd apres ajout element

https://sveltematerialui.com/THEMING.md

-   npm run prepare to build the CSS file(s)
-   If you install a new SMUI package, you should run npm run prepare to rebuild the CSS.

1. -- todo each time :
   `npm run prepare`

2. -- todo one time :
   You can use it to create your theme directory from a template:
   `npx smui-theme template src/theme`

---

# firebase -- kill

kill-port --port 8000,9099,5001,8080,5033,9000,5000,8085,9199,4000,4400,4500 && firebase emulators:start --project
kill-port --port 9099,8080

~ lsof -ti tcp:8080 | xargs kill

---

# FIREBASE CONSOLE

Dans l'onglet Méthode de connexion, activez le fournisseur d' adresse e-mail/mot de passe. Notez que la connexion par e-mail/mot de passe doit être activée pour utiliser la connexion par lien e-mail.

# With Svelte

![CI](https://github.com/jmagrippis/with-svelte/actions/workflows/main.yaml/badge.svg)

Ever wondered how you'd do a blog with [Svelte and SvelteKit]? A CMS? Auth flow? A share CTA? A newsletter?

Wonder no more: This is the resource to show you, how you'd do X with Svelte!

[svelte and sveltekit]: https://svelte.dev/blog/whats-the-deal-with-sveltekit 'Cybernetically enhanced web apps'

<!-- https://fonts.google.com/icons !! -->

# App.svelte => ce qui n a pas marche sur les fonts

    	<!-- Ci-dessous : test google font effect
    	<link
    		href="https://fonts.googleapis.com/css2?family=Economica&family=quicksand+Round&family=Lato:wght@100;300;400;700;900&family=Inter:wght@900&effect=shadow-multiple|emboss|fire|3d&display=swap"
    		rel="stylesheet"
    	/> -->
    	<!-- family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300 -->
    	<!-- family=Nunito:wght@200;300;400;600;700;800;900 -->

<!-- --- -->

    	<!-- TODO !!! change it -->
    	<!-- <link rel="icon" href="/favicon-16.png" /> -->
    			<!-- ci dessous mat design -->
    	<!-- <link
    		rel="icon"
    		sizes="192x192"
    		href="https://material.io/static/images/simple-lp/favicons/components-192x192.png"
    	/>
    	<link
    		rel="shortcut icon"
    		href="https://material.io/static/images/simple-lp/favicons/components-72x72.png"
    	/> -->

<!-- ---  -->

# firebase hosting

    "hosting": [
    	{
    		// target: ''
    	},
    	{
    		"public": "build",
    		"cleanUrls": true,
    		"ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
    	}
    ],

# ROBOT.txt

User-Agent: GooglebotAllow: .jsAllow: .css

# elmt visible in viewport

function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
rect.top >= 0 &&
rect.left >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

# CSS ANIM

/_ Keyword values _/
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/_ Function values _/
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

/_ Steps Function keywords _/
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);

/_ Multiple timing functions _/
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);

/_ Global values _/
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: revert;
transition-timing-function: revert-layer;
transition-timing-function: unset;

# CSS animation parameters

.box {
animation-name: bounce;
animation-duration: 4s; /_ or: Xms _/
animation-iteration-count: 10;
animation-direction: alternate; /_ or: normal _/
animation-timing-function: ease-out; /_ or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) _/
animation-fill-mode: forwards; /_ or: backwards, both, none _/
animation-delay: 2s; /_ or: Xms _/
}

# install latest npm global

npm install npm@latest -g

# firebase (hosting chanel)

firebase hosting:channel:create v3
firebase hosting:channel:deploy new-awesome-feature;

# scaffolding

** le module de base est : shell
** les autres modules sont: blog, ecom, scraper

routes : LE STARTER

> se decoupe en modules
>
> > chaque module a ses routes

lib :

> se decoupe en modules
>
> > chaque module a

-   ses utils
    -   son kit-ui (les composants)

# triangle

<!-- <div class="dropdown-absolute_fakeBlock "> -->

    					<!-- triangle -->
    					<!-- <div class="dropdown-absolute_wrapper-arrow">
    							<div class="dropdown-absolute_arrow" />
    						</div> -->
    					<!-- </div> -->

# lib

SVG gallery:
https://www.svgrepo.com/vectors/woocommerce/

# PB DE CENTRAGE

vertical-align:middle (a mettre sur l elmt inline ou inline-block)
line-height:100% (a mettre sur le parent)
OU (plus lourd: display:flex; flex-direction: column;)

# PRETTIER (format all files)

npx prettier --write src

# RESOLUTION

Breakpoint prefix Minimum width CSS
sm 640px @media (min-width: 640px) { ... }
md 768px @media (min-width: 768px) { ... }
lg 1024px @media (min-width: 1024px) { ... }
xl 1280px @media (min-width: 1280px) { ... }
2xl 1536px

# UPDATES

cmd update packages ncu -u
// upgrade
ncu -u

// outdated ?
npm outdated

//force latest
npm install xxx@latest

# DIFFICULTIES (firebase)

-   desactivate airPlay receiver on MAC if you cannot launch firebase emulator (because port 5000 is busy)
    https://i.stack.imgur.com/jlt4g.png

# LIB

npm install @regnou/wc/wc-slideshow

pwd npm login --registry=https://npm.pkg.github.com --scope=@regnou
github axel token = 253ac2d17c2534611bb25abfd4e54435ec8ff6c1

npm login --registry=https://npm.pkg.github.com --scope=@regnou

# pre-rendering

<!-- <script context="module">
	export const prerender = true;
</script> -->

# NOTE

"dependencies": {
"@fortawesome/fontawesome-free": "5.15.3",
"@popperjs/core": "2.9.1",
"@tailwindcss/forms": "^0.3.2",
"lodash-es": "^4.17.21",
"page": "^1.11.6",
"quill": "^1.3.7",
"quill-image-resize-module": "^3.0.0",
"svelte-hero-icons": "^2.2.0",
"svelte-loading-spinners": "^0.1.4",
"toastr": "^2.1.4"
},

"devDependencies": {
"jest": "^26.6.3",
"ts-jest": "^26.5.4",
"typescript": "^4.2.3",
}

# SMUI

npm i -D smui-theme
npm i -D @smui-extra/accordion
npm i -D @smui-extra/badge
npm i -D @smui/banner
npm i -D @smui/button
npm i -D @smui/fab
npm i -D @smui/icon-button
npm i -D @smui/card
npm i -D @smui/common
npm i -D @smui/data-table
npm i -D @smui/dialog
npm i -D @smui/drawer
npm i -D @material/elevation@^13.0.0
npm i -D @smui/image-list
npm i -D @smui-extra/autocomplete
npm i -D @smui/checkbox
npm i -D @smui/chips
npm i -D @smui/form-field
npm i -D @smui/radio
npm i -D @smui/segmented-button
npm i -D @smui/select
npm i -D @smui/slider
npm i -D @smui/switch
npm i -D @smui/textfield
npm i -D @smui/layout-grid
npm i -D @smui/list
npm i -D @smui/menu-surface
npm i -D @smui/menu
npm i -D @smui/paper
npm i -D @smui/circular-progress
npm i -D @smui/linear-progress
npm i -D @smui/ripple
npm i -D @smui/snackbar
npm i -D @smui/tab @smui/tab-bar
npm i -D @smui/tooltip
npm i -D @smui/top-app-bar
npm i -D @smui/touch-target

  <!-- !!!! -->
