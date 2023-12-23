import plugin from 'tailwindcss/plugin';

export const plugins = [
	// require("@tailwindcss/forms"),
	// require("@tailwindcss/aspect-ratio"),
	plugin(({ addComponents, addUtilities }) => {
		addComponents({}),
			addUtilities({
				'.header-gradient': {
					background:
						'linear-gradient(90deg, rgba(175,209,167,1) 0%, rgba(66,90,122,0.9) 34%, rgba(248,68,53,0.7) 65%, rgba(47,26,67,0.7) 93%), linear-gradient(0deg, rgba(0,0,255, 1) 50%, rgba(0,0,0,0)), url(../images/texture.png),linear-gradient(90deg, rgba(175,209,167,1) 0%, rgba(66,90,122,1) 34%, rgba(248,68,53,1) 65%, rgba(47,26,67,1) 93%)',
					'background-repeat': 'repeat',
					'background-position': 'top',
				},
				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},
				'.transparent-input': {
					'background-color': 'rgba(11,11,11,0.35)',
					'backdrop-filter': 'blur(24px)',
				},
				'.transparent-panel': {
					'background-color': 'rgba(11,11,11,0.85)',
					'backdrop-filter': 'blur(24px)',
				},
				'.transition-width': {
					'transition-property': 'width',
					'transition-timing-function': 'linear',
					'transition-duration': '600ms',
				},
				'.animation-delay': {
					'animation-delay': '600ms',
				},
				'.glass-morphism': {
					background: 'rgba(255, 255, 255, 0.01)',
					'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
					'backdrop-filter': 'blur(5px)',
					'-webkit-backdrop-filter': 'blur(5px)',
					border: '1px solid rgba(255, 255, 255, 0.06)',
				},
			});
	}),
];
