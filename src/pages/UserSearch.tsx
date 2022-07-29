import React from "react";
import { useTheme } from "../contexts/theme";
import Header from "../components/Header";
import Logo from "../components/Logo";
import ToggleTheme from "../components/ToggleTheme";
import UserCard from "../components/UserCard";
import styled from "styled-components";
import Button from "../components/Button";
import { StyledHeading3 } from "../components/designSystem/Typography";
import Input from "../components/Input";
import Icon from "../components/Icon";
import useFetchUser from "../hooks/api/useFetchUser";
import { up } from "styled-breakpoints";
import User from "../types/User";

const MainContainer = styled.div`
	width: 85%;
	height: 730px;
	background-color: transparent;
	margin: 31px auto 79px;

	${up("md")} {
		width: 580px;
		margin: 140px auto;
	}

	${up("lg")} {
		width: 730px;
		margin: 50px auto;
	}
`;

function UserSearch() {
	const { theme } = useTheme();
	const [username, setUsername] = React.useState("");
	const [user, setUser] = React.useState<User | undefined>();
	const { fetchUser, isLoading, error } = useFetchUser();

	React.useEffect(() => {
		fetchUser({ username: "octocat", onSuccess: setUser });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handleOnClick = () => {
		fetchUser({ username, onSuccess: setUser });
	};

	return (
		<MainContainer className="App">
			<Header logo={<Logo />}>
				<ToggleTheme />
			</Header>
			<Input
				icon={<Icon name="search" size={24} color={theme.primary} />}
				placeholder="Search GitHub username…"
				value={username}
				id="searchUserInput"
				onChange={handleOnChange}
			>
				<Button type="button" onClick={handleOnClick}>
					<StyledHeading3 color={theme.neutrals[100]} fontWeight="bold">
						Search
					</StyledHeading3>
				</Button>
			</Input>
			<UserCard
				avatarUrl={user?.avatar_url}
				name={user?.name}
				username={`@${user?.login}`}
				created_at={user?.created_at}
				userBio={user?.bio}
				public_repos={user?.public_repos}
				followers={user?.followers}
				following={user?.following}
				location={user?.location}
				blog={user?.blog}
				twitter_username={user?.twitter_username}
				company={user?.company}
				isLoading={isLoading}
				error={error}
			/>
		</MainContainer>
	);
}

export default UserSearch;
