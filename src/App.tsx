import React from "react";
import { ThemeProvider, useTheme } from "./contexts/theme";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ToggleTheme from "./components/ToggleTheme";
import Card from "./components/Card";
import styled from "styled-components";
import Button from "./components/Button";
import { StyledHeading3 } from "./components/designSystem/Typography";
import Input from "./components/Input";
import Icon from "./components/Icon";

const MainContainer = styled.div`
	width: 85%;
	height: 730px;
	background-color: transparent;
	margin: 31px auto 79px;
`;

function App() {
	const { theme } = useTheme();
	const [inputValue, setInputValue] = React.useState("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleOnClick = () => {};

	return (
		<ThemeProvider>
			<MainContainer className="App">
				<Header logo={<Logo />}>
					<ToggleTheme />
				</Header>
				<Input
					icon={<Icon name="search" size={24} color={theme.primary} />}
					placeholder="Search GitHub username…"
					value={inputValue}
					id="searchUserInput"
					onChange={handleOnChange}
				>
					<Button type="submit" onClick={handleOnClick}>
						<StyledHeading3 color={theme.neutrals[100]} fontWeight="bold">
							Button
						</StyledHeading3>
					</Button>
				</Input>
				<Card />
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;
