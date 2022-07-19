import Toggle from "./Toggle";
import { useTheme } from "../contexts/theme";
import { lightTheme, darkTheme } from "../theme";

export default function ToggleTheme() {
	const { theme, setTheme } = useTheme();
	const label = theme.name === "light" ? "DARK" : "LIGHT";
	const iconPath =
		theme.name === "light" ? "./assets/icon-moon.svg" : "./assets/icon-sun.svg";
	const iconAlt = iconPath === "./assets/icon-moon.svg" ? "Moon" : "Sun";

	const onToggle = () => {
		setTheme(theme.name === "light" ? darkTheme : lightTheme);
	};

	return (
		<Toggle
			label={label}
			iconPath={iconPath}
			iconAlt={iconAlt}
			onToggle={onToggle}
		/>
	);
}
