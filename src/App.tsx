import { ThemeProvider } from "./contexts/theme";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ToggleTheme from "./components/ToggleTheme";
import Card from "./components/Card";
import styled from "styled-components";
import Button from "./components/Button";
import { StyledHeading3 } from "./components/designSystem/Typography";

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
				<Button>
					<StyledHeading3 color="#FFFFFF" fontWeight="bold">
						Button
					</StyledHeading3>
				</Button>
				<Card />
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;
