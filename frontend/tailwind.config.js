/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// screens: {
		// 	//breakpoints navbar & footer
		// 	'ntr' : '900px',
		// },
		extend: {
			colors: {
				primary: "#C05F31",
				section: "#F8F8F8",
				"grey-text": "#686868",
			},
			container: {
				center: true,
				padding: "2rem",
			},
			fontFamily: {
				rubik: "Rubik",
			},
		},
	},
	plugins: [require("flowbite-react")],
};
