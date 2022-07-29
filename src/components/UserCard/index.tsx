import Card from "../Card";
import { StyledHeading4 } from "../designSystem/Typography";
import Header from "./Header";
import { useTheme } from "../../contexts/theme";
import StatsCard from "./StatsCard";
import InfoList from "./InfoList";
import { ListItems } from "./InfoList";
import useGetResponsiveValue from "../utils/useGetResponsiveValue";
import Loader from "../animations/Loader";
import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

type CardProps = {
	avatarUrl?: string;
	name?: string;
	username?: string;
	created_at?: string;
	userBio?: string;
	public_repos?: number;
	followers?: number;
	following?: number;
	location?: string;
	blog?: string;
	twitter_username?: string;
	company?: string;
	isLoading?: boolean;
	error?: string;
};

const LoaderContainer = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 50px auto;

	${up("md")} {
		margin: 0px auto;
	}
`;

function UserCard({
	avatarUrl,
	name,
	username,
	created_at,
	userBio,
	public_repos,
	followers,
	following,
	location,
	blog,
	twitter_username,
	company,
	isLoading,
	error,
}: CardProps) {
	const { theme } = useTheme();
	const getResponsiveValue = useGetResponsiveValue();
	const noBioAvailableColor =
		theme.name === "light" ? theme.neutrals["400"] : theme.neutrals["200"];
	const formatedCompanyName = company?.replace("@", "");
	const twitterLink = `https://twitter.com/${twitter_username}`;
	const companyGithub = `https://github.com/${formatedCompanyName}`;

	console.log("Rendering");

	const stats = [
		{ title: "Repos", value: public_repos },
		{ title: "Followers", value: followers },
		{ title: "Following", value: following },
	];
	const infoList: ListItems = [
		{ iconName: "location", item: location },
		{ iconName: "website", item: blog, url: blog },
		{ iconName: "twitter", item: twitter_username, url: twitterLink },
		{ iconName: "company", item: company, url: companyGithub },
	];
	return (
		<Card>
			{isLoading ? (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			) : (
				<React.Fragment>
					<Header
						avatarUrl={avatarUrl}
						name={name}
						username={username}
						created_at={created_at}
					/>
					<StyledHeading4
						fontSize={getResponsiveValue("13px", "16px", "16px")}
						color={userBio ? undefined : noBioAvailableColor}
						style={{
							marginLeft: getResponsiveValue("0", "0", "157px"),
						}}
					>
						{userBio ? userBio : "This profile has no bio."}
					</StyledHeading4>
					<StatsCard stats={stats} />
					<InfoList listItems={infoList} />
				</React.Fragment>
			)}
		</Card>
	);
}

const MemoizedUserCard = React.memo(UserCard);

export default MemoizedUserCard;
