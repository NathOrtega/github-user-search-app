import { ThemeProvider } from "./contexts/theme";
import UserSearch from "./pages/UserSearch";

function App() {
	return (
		<ThemeProvider>
			<UserSearch />
		</ThemeProvider>
	);
}

export default App;
