module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				width: 'width'
			}
		}
	},
	variants: {
		extend: {
			width: ["responsive", "hover", "focus", "group-hover"],
			display: ["group-hover"],
		},
	},
	plugins: [],
}