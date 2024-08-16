import resolveConfig from "tailwindcss/resolveConfig";
//@ts-expect-error tailwindConfig has no type definition
import tailwindConfig from "../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

const srMagenta100 = fullConfig.theme.colors["sr-magenta-100"];
const srMagenta75 = fullConfig.theme.colors["sr-magenta-75"];
const srMagenta50 = fullConfig.theme.colors["sr-magenta-50"];
const srMagenta25 = fullConfig.theme.colors["sr-magenta-25"];
const srBlue100 = fullConfig.theme.colors["sr-blue-100"];
const srBlue75 = fullConfig.theme.colors["sr-blue-75"];
const srBlue50 = fullConfig.theme.colors["sr-blue-50"];
const srBlue25 = fullConfig.theme.colors["sr-blue-25"];
const srEmerald100 = fullConfig.theme.colors["sr-emerald-100"];
const srEmerald75 = fullConfig.theme.colors["sr-emerald-75"];
const srEmerald50 = fullConfig.theme.colors["sr-emerald-50"];
const srEmerald25 = fullConfig.theme.colors["sr-emerald-25"];
const srGreyBlue100 = fullConfig.theme.colors["sr-greyblue-100"];
const srGreyBlue75 = fullConfig.theme.colors["sr-greyblue-75"];
const srGreyBlue50 = fullConfig.theme.colors["sr-greyblue-50"];
const srGreyBlue25 = fullConfig.theme.colors["sr-greyblue-25"];
const srpurple100 = fullConfig.theme.colors["sr-purple-100"];
const srpurple75 = fullConfig.theme.colors["sr-purple-75"];
const srpurple50 = fullConfig.theme.colors["sr-purple-50"];
const srpurple25 = fullConfig.theme.colors["sr-purple-25"];
const sryellow100 = fullConfig.theme.colors["sr-yellow-100"];
const sryellow75 = fullConfig.theme.colors["sr-yellow-75"];
const sryellow50 = fullConfig.theme.colors["sr-yellow-50"];
const sryellow25 = fullConfig.theme.colors["sr-yellow-25"];
const srTeal100 = fullConfig.theme.colors["sr-teal-100"];
const srTeal75 = fullConfig.theme.colors["sr-teal-75"];
const srTeal50 = fullConfig.theme.colors["sr-teal-50"];
const srTeal25 = fullConfig.theme.colors["sr-teal-25"];

export const colors = [
	srMagenta100,
	srGreyBlue100,
	srEmerald100,
	srBlue100,
	srpurple100,
	srTeal100,

	srMagenta75,
	srGreyBlue75,
	srEmerald75,
	srBlue75,
	srpurple75,
	srTeal75,

	srMagenta50,
	srGreyBlue50,
	srEmerald50,
	srBlue50,
	srpurple50,
	srTeal50,

	srMagenta25,
	srGreyBlue25,
	srEmerald25,
	srBlue25,
	srpurple25,
	srTeal25,
];
