import tailwindStandartColors from 'tailwindcss/colors';

const colors = {
	...tailwindStandartColors,
	'main-background': 'var(--main-background)',
	'widget-background': 'var(--widget-background)',
	'gray-background': 'var(--gray-background)',
	'gray-border': 'var(--gray-border)',
	logo: 'var(--logo)',
	inactive: 'var(--inactive)',
	'main-button': 'var(--main-button)',
	primary: 'var(--primary)',
	secondary: 'var(--secondary)',
	third: 'var(--third)',
};

export const theme = {
	colors,
	extend: {
		fontSize: {
			xss: '0.625rem',
			xs: '0.7rem',
			sm: '0.82rem',
			base: '1rem',
			lg: '1.15rem',
			xl: '1.22rem',
			'1.25xl': '1.36rem',
			'1.5xl': '1.5rem',
			'1.75xl': '1.75rem',
			'2xl': '2rem',
			'3xl': '2.155rem',
			'4xl': '2.58rem',
			'5xl': '3.45rem',
			'6xl': '4.3rem',
			'7xl': '5.17rem',
			'8xl': '6.9rem',
			'9xl': '9.2rem',
		},
		fontFamily: {
			roboto: 'var(--font-roboto)',
			rubik: 'var(--font-rubik)',
		},
		keyframes: {
			animationOpacity: {
				from: { opacity: '0.2' },
				to: { opacity: '1' },
			},
			scaleIn: {
				'0%': {
					opacity: '0',
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: '0.3',
				},
				'100%': {
					opacity: '1',
					transform: 'scale(1)',
				},
			},
			width: {
				from: {
					width: '0',
				},
				to: {
					width: '100%',
				},
			},
		},

		animation: {
			opacity: 'animationOpacity 0.7s ease-in-out',
			scaleIn: 'scaleIn .35s ',
			width: 'width 1s ease-in-out',
		},
		gridTemplateColumns: {
			// Простая сетка из 16 столбцов
			14: 'repeat(14, minmax(0, 1fr))',
			16: 'repeat(16, minmax(0, 1fr))',
			18: 'repeat(18, minmax(0, 1fr))',
			19: 'repeat(19, minmax(0, 1fr))',
			26: 'repeat(26, minmax(0, 1fr))',
		},
		gridColumnEnd: {
			15: '15',
		},
	},
};
