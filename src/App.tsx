import { ThemeProvider } from "./contexts/theme";
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
				<Card />
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;
