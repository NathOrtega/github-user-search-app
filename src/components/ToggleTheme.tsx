import Toggle from "./Toggle";
import { useTheme } from "../contexts/theme";
import { lightTheme, darkTheme } from "../theme";
import Icon from "./Icon";

export default function ToggleTheme() {
	const { theme, setTheme } = useTheme();
	const label = theme.name === "light" ? "DARK" : "LIGHT";
	const icon =
		theme.name === "light" ? <Icon name="sun" /> : <Icon name="moon" />;

	const onToggle = () => {
		setTheme(theme.name === "light" ? darkTheme : lightTheme);
	};

	return <Toggle label={label} icon={icon} onToggle={onToggle} />;
}
