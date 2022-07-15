type ColorScale = {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
};

export interface Theme {
	name: "light" | "dark";
	primary: string;
	support: {
		warning: string;
	};
	neutrals: ColorScale;
}

export const lightTheme: Theme = {
	name: "light",
	primary: "#0079ff",
	support: {
		warning: "#f74646",
	},
	neutrals: {
		100: "#fefefe",
		200: "#f6f8ff",
		300: "#a5b5cd",
		400: "#697c9a",
		500: "#4b6a9b",
		600: "#2b3442",
	},
};

export const darkTheme: Theme = {
	name: "dark",
	primary: "#0079ff",
	support: {
		warning: "#f74646",
	},
	neutrals: {
		100: "#ffffff",
		200: "#90a4D4",
		300: "#6c7387",
		400: "#1e2a47",
		500: "#141d2f",
		600: "#000000",
	},
};
