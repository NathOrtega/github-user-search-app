import Card from "../Card";
import { StyledHeading4 } from "../designSystem/Typography";
import Header from "./Header";
import { useTheme } from "../../contexts/theme";
import StatsCard from "./StatsCard";
import InfoList from "./InfoList";
import { ListItems } from "./InfoList";
import useGetResponsiveValue from "../utils/useGetResponsiveValue";

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
};

export default function UserCard({
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
}: CardProps) {
	const { theme } = useTheme();
	const getResponsiveValue = useGetResponsiveValue();
	const noBioAvailableColor =
		theme.name === "light" ? theme.neutrals["400"] : theme.neutrals["200"];
	const formatedCompanyName = company?.replace("@", "");
	const twitterLink = `https://twitter.com/${twitter_username}`;
	const companyGithub = `https://github.com/${formatedCompanyName}`;

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
			<Header
				avatarUrl={avatarUrl}
				name={name}
				username={username}
				created_at={created_at}
			/>
			<StyledHeading4
				fontSize={getResponsiveValue("13px", "16px", "16px")}
				color={userBio ? undefined : noBioAvailableColor}
			>
				{userBio ? userBio : "This profile has no bio."}
			</StyledHeading4>
			<StatsCard stats={stats} />
			<InfoList listItems={infoList} />
		</Card>
	);
}
