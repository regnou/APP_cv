const defaultTheme = require('tailwindcss/defaultTheme'); // !!!!
const colors = require('tailwindcss/colors'); // !!!!
const tailwindCSSAnimista = require('tailwindcss-animistacss'); // !!!!

module.exports = {
	// content: ["./src/**/*.{html,js}"],
	content: ['./src/**/*.{html,js,svelte,ts,md,svx}'], //!!!

	theme: {
		// sans: ['Roboto', ...defaultTheme.fontFamily.sans],
		// },
		// fontFamily: [
		// '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Open Sans', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'
		// ],
		fontFamily: {
			quicksand: ['Quicksand', 'sans-serif'],
			
			// inutile ci dessous (voir roboto condensed pour replace economica)
			economica: ['Economica', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
			lato: ['Lato', 'sans-serif'],
			varela: ['Varela Round', 'sans-serif']
			// condensed: ['Open+Sans+Condensed', 'sans-serif'],
			// 'sans': ['Nunito', 'sans-serif'],
			// 'sans': ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
			// 'serif': ['ui-serif', Georgia, Cambria, 'Times New Roman', Times, serif],
			// 'mono': ['ui-monospace', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace],
		},

		extend: {
			animation: {
				// cubic-bezier(0, 0, 0.2, 1)
				'ax-5': 'ax-5 4s ease-in-out infinite',
				'ax-4': 'ax-3 6s ease-in-out infinite',
				'ax-3': 'ax-3 6s linear infinite',
				'spin-slow': 'spin 5s linear forwards',
				'ax-1': 'ax-1 1s ease-in-out',
				'ax-2': 'ax-2 2s ease-in-out forwards',
				'rotate-scale-up': 'rotate-scale-up 0.7s linear both',
				'rotate-center':
					'rotate-center 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both'
			},
			keyframes: {
				'ax-5': {
					'0%': {
						// from: {
						border: 'none',
						background: 'gainsboro'
					},
					'2%': {
						width: '10px',
						height: '50px'
					},
					'13%': {
						border: 'none'
					},

					'14%': {
						'box-shadow': 'none',
						border: '2px solid gray',
						background: 'gainsboro'
					},
					'15%': {
						background: 'white',
						width: '100%',
						left: '0',
						// transform: 'translateX(-50%)',
						'box-shadow':
							'0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15);'
					},
					'35%': {
						top: '100px',
						height: '50px',
						'box-shadow':
							'0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 8px 8px rgba(0,0,0,0.11), 0 16px 16px rgba(0,0,0,0.11), 0 32px 32px rgba(0,0,0,0.11);'
					},
					'50%': {
						top: '0px',
						height: '100%'
					},
					'89%': {
						'box-shadow':
							'0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 8px 8px rgba(0,0,0,0.11), 0 16px 16px rgba(0,0,0,0.11), 0 32px 32px rgba(0,0,0,0.11);'
					},
					'90%': {
						// transform: 'translateX(-50%)',
						left: '0',
						border: '2px solid gray',
						width: '100%',
						top: '100px',
						height: '50px',
						'box-shadow':
							'0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15);'
					},
					'95%': {
						'box-shadow': 'none'
					},
					to: {
						background: 'white',
						// @apply 'bg-yellow-500',
						// background: 'red',
						// background: 'bg-red-500',
						left: '0',
						width: '100%'
						// 'height': '100%',
					}
				},
				'ax-3': {
					'0%, 100%': {
						// transform: 'translateX(0px)'
						// 'box-shadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px;'
						'box-shadow':
							'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
						// 'box-shadow': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
						// transform: 'translateX(-100px)'
					},
					// '50%': {
					// 'box-shadow': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;'
					// 'box-shadow':
					// 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'
					// },
					'15%': {
						'border-radius': '20px'
					},
					'25%': {
						'border-radius': '50px'
					},
					'50%': {
						'border-radius': '0px',
						transform: 'scale(2)',
						// 'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
						'box-shadow':
							'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
						// 'box-shadow':
						// 	'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'
						// transform: 'translate(100%)'
					},
					// '75%': {
					// 	"border-radius": '0px',
					// },
					'100%': {
						'border-radius': '0px',
						background: 'red'
					}
				},
				spin: {
					from: {
						transform: 'translateX(-100px)'
					},
					to: {
						transform: 'translateX(100px) rotate(360deg) scale(2) '
						// transform: 'translate(100%)'
					}
				},
				'ax-1': {
					'0%': {
						// transform: 'translate(0)'
						// transform: 'scale(1) rotateZ(0)'
					},
					// '50%': {
					// 	transform: 'scale(1.5) rotateZ(180deg)'
					// },
					to: {
						transform: 'translateX(1000px)'
					}
				},
				// transform:rotateY(0.05turn) rotateX(-0.18turn) rotateZ(0.09turn)
				'ax-2': {
					'0%': {
						// from: {
						transform: 'translateX(-300px)'
						// transform: 'scale(1) rotateZ(0)'
					},
					// '50%': {
					// 	transform: 'scale(1.5) rotateZ(180deg)'
					// },
					to: {
						transform:
							'translateX(500px) rotateY(0.05turn) rotateX(-0.18turn) rotateZ(0.09turn)'
					}
				},
				'rotate-scale-up': {
					'0%': {
						transform: 'scale(1) rotateZ(0)'
					},
					'50%': {
						transform: 'scale(1.5) rotateZ(180deg)'
					},
					to: {
						transform: 'scale(1) rotateZ(360deg)'
					}
				},
				'rotate-center': {
					'0%': {
						transform: 'rotate(0)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				}
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: [...defaultTheme.fontFamily.serif],
				mono: [...defaultTheme.fontFamily.mono]
			},
			width: {
				350: '350px',
				300: '300px'
				// 'popup-400': '400px',
				// 'map-after-400': 'calc(100vw - 400px - 20px)',
			},
			height: {
				'full-minus-header': 'calc(100vh - 80px - 61px)'
				// 'map-with-footer': 'calc(100vh - 92px - 36px)',
				// 'map-with-footer': 'calc(100vh - 56px)',
				// 'map-mobile': 'calc(100vh - 48px)',
				// 'map-popup-mobile': '250px',
				// 'map-popup-desk': '350px',
			},
			colors: {
				wa: {
					0: '#ffffff',
					1: '#b8b5b5',
					2: 'rgb(33, 33, 51)'
				},
				'blue-gray': colors.slate,
				'cool-gray': colors.gray,
				'true-gray': colors.neutral,
				'warm-gray': colors.stone,
				orange: colors.orange,
				amber: colors.amber,
				lime: colors.lime,
				emerald: colors.emerald,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				violet: colors.violet,
				purple: colors.purple,
				fuchsia: colors.fuchsia,
				rose: colors.rose
			},
			backgroundImage: {
				conic: 'conic-gradient(var(--tw-gradient-stops))',
				'conic-to-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
				'conic-to-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
				'conic-to-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
				'conic-to-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
				'conic-to-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
				'conic-to-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
				'conic-to-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
				'conic-to-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
				radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
				'radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
				'radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
				'radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
				'radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
				'radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
				'radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
				'radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))'
			},
			rotate: {
				135: '135deg',
				'-135': '-135deg'
			}
		}
	},

	variants: {
		gradientColorStops: [],
		backgroundImage: [],
		extend: {}
	},

	plugins: [
		// plugins: [require('@tailwindcss/forms')]
		tailwindCSSAnimista({
			classes: ['animate__tracking-in-expand', 'animate__scale-up-center'],
			settings: {
				'animate__tracking-in-expand': {
					duration: 7000,
					delay: 1000,
					iterationCounts: 2,
					isInfinite: true
				},
				'animate__scale-up-center': {
					duration: 7000
				}
			},
			variants: ['responsive']
		})
	]
};
