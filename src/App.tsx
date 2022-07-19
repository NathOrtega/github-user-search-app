import { ThemeProvider } from "./contexts/theme";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ToggleTheme from "./components/ToggleTheme";
import Card from "./components/Card";
import styled from "styled-components";

const MainContainer = styled.div`
	width: 85%;
	height: 730px;
	background-color: transparent;
	margin: 31px auto 79px;
`;

function App() {
	return (
		<ThemeProvider>
			<MainContainer className="App">
				<Header logo={<Logo />}>
					<ToggleTheme />
				</Header>
				<Card />
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;
