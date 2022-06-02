module.exports = {
	root: true,
	extends: ['eslint:recomended', 'prettier'],
	plugins: ['svelte3', 'jsx-a11y'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2020: true,
		node: true
	}
};
