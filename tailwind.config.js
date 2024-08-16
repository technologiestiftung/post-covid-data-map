import * as daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @technologiestiftung/no-default-export
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Sora", "sans-serif"],
			},
			colors: {
				"sr-magenta-100": "#F64C72",
				"sr-magenta-75": "#F87995",
				"sr-magenta-50": "#FBA6B9",
				"sr-magenta-25": "#FDD2DC",

				"sr-blue-100": "#2F2FA2",
				"sr-blue-75": "#6363B9",
				"sr-blue-50": "#9797D1",
				"sr-blue-25": "#CBCBE8",

				"sr-emerald-100": "#58A89C",
				"sr-emerald-75": "#82BEB5",
				"sr-emerald-50": "#ACD4CE",
				"sr-emerald-25": "#D5E9E6",

				"sr-greyblue-100": "#70ACC0",
				"sr-greyblue-75": "#91bfcf",
				"sr-greyblue-50": "#b4d4de",
				"sr-greyblue-25": "#d8e8ee",

				"sr-purple-100": "#9372A7",
				"sr-purple-75": "#AE95BD",
				"sr-purple-50": "#C9B9D3",
				"sr-purple-25": "#E4DCE9",

				"sr-yellow-100": "#e7ea81",
				"sr-yellow-75": "#f0f2a1",
				"sr-yellow-50": "#f7f7c2",
				"sr-yellow-25": "#fbfbdc",

				"sr-teal-100": "#468C98",
				"sr-teal-75": "#6AA5AC",
				"sr-teal-50": "#8DBFC1",
				"sr-teal-25": "#B1D8D6",

				"sr-light-grey": "#9899AD",
				"sr-blue-grey": "#393A60",
				"sr-lighter-black": "#131313",
				"sr-darker-greyblue": "#5F61A0",

				"sr-light-blue-100": "#70ACC0",
			},
		},
	},
	daisyui: {
		themes: ["light"],
	},
	plugins: [daisyui],
};
