import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme, Theme } from "../theme";
import useLocalStorage from "use-local-storage";

type Context = {
	theme: Theme;
	setTheme: (Theme: Theme) => void;
};

type Props = {
	children: React.ReactNode;
};

export const ThemeContext = React.createContext<Context>({
	theme: lightTheme,
	setTheme: () => {},
});

export const ThemeProvider = (props: Props) => {
	const userPrefersDarkMode: Boolean = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const userPreferedTheme: Theme = userPrefersDarkMode ? darkTheme : lightTheme;
	const [theme, setTheme] = useLocalStorage<Theme>("theme", userPreferedTheme);
	const root = document.getElementById("root");

	React.useEffect(() => {
		if (root) {
			root.style.backgroundColor =
				theme.name === "light" ? theme.neutrals["300"] : theme.neutrals["600"];
			document.body.style.backgroundColor =
				theme.name === "light" ? theme.neutrals["300"] : theme.neutrals["600"];
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme.name]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			<StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return React.useContext(ThemeContext);
};

export default ThemeContext;
