type ColorScale = {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
};

export interface Theme {
	name: "light" | "dark";
	primary: string;
	primaryLight: string;
	support: {
		warning: string;
	};
	neutrals: ColorScale;
}

export const lightTheme: Theme = {
	name: "light",
	primary: "#0079ff",
	primaryLight: "#60ABFF",
	support: {
		warning: "#f74646",
	},
	neutrals: {
		100: "#ffffff",
		200: "#fefefe",
		300: "#f6f8ff",
		400: "#a5b5cd",
		500: "#697c9a",
		600: "#4b6a9b",
		700: "#2b3442",
		800: "#222731",
		900: "#000000",
	},
};

export const darkTheme: Theme = {
	name: "dark",
	primary: "#0079ff",
	primaryLight: "#60ABFF",
	support: {
		warning: "#f74646",
	},
	neutrals: {
		100: "#ffffff",
		200: "#848B9B",
		300: "#90a4D4",
		400: "#6c7387",
		500: "#1e2a47",
		600: "#141d2f",
		700: "#000000",
		800: "#000000",
		900: "#000000",
	},
};
