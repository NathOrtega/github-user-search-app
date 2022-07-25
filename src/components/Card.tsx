import styled from "styled-components";
import { StyledHeading3, StyledHeading4 } from "./designSystem/Typography";
import { useTheme } from "../contexts/theme";
import dayjs from "dayjs";
import Icon from "./Icon";

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

const StyledCard = styled.div`
	width: 100%;
	height: 517px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-radius: 15px;
	border: none;
	background-color: ${({ theme }) =>
		theme.name === "light" ? theme.neutrals[200] : theme.neutrals[500]};
	box-shadow: ${({ theme }) =>
		theme.name === "light"
			? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
			: "none"};
	padding: 32px 24px;
`;

const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 30px;
`;

const ProfilePicture = styled.div<{ avatar: string | undefined }>`
	width: 70px;
	height: 70px;
	border: none;
	border-radius: 50%;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${({ avatar }) => avatar});
	margin-right: 20px;
`;

const HeaderInfo = styled.div`
	width: fit-content;
	height: 70px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

const Stats = styled.div`
	width: 100%;
	height: 85px;
	margin: 24px 0;
	padding: 18px 14px;
	border-radius: 10px;
	background-color: ${({ theme }) =>
		theme.name === "light" ? theme.neutrals["300"] : theme.neutrals["600"]};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;

const Stat = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const InfoRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 16px;

	span {
		width: 20px;
		height: 20px;
		margin-right: 13px;
	}
`;

export default function Card({
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
	const formatedDate = dayjs(created_at).format("DD MMM YYYY");

	return (
		<StyledCard>
			<CardHeader>
				<ProfilePicture avatar={avatarUrl} />
				<HeaderInfo>
					<StyledHeading3
						color={
							theme.name === "light"
								? theme.neutrals["800"]
								: theme.neutrals["100"]
						}
						fontWeight="bold"
					>
						{name}
					</StyledHeading3>
					<StyledHeading4 color={theme.primary}>{username}</StyledHeading4>
					<StyledHeading4>{`Joined ${formatedDate}`}</StyledHeading4>
				</HeaderInfo>
			</CardHeader>
			{userBio ? (
				<StyledHeading4>{userBio}</StyledHeading4>
			) : (
				<StyledHeading4
					color={
						theme.name === "light"
							? theme.neutrals["400"]
							: theme.neutrals["200"]
					}
				>
					This profile has no bio.
				</StyledHeading4>
			)}
			<Stats>
				<Stat>
					<StyledHeading4>Repos</StyledHeading4>
					<StyledHeading3
						fontWeight="bold"
						color={
							theme.name === "light"
								? theme.neutrals["700"]
								: theme.neutrals["100"]
						}
					>
						{public_repos}
					</StyledHeading3>
				</Stat>
				<Stat>
					<StyledHeading4>Followers</StyledHeading4>
					<StyledHeading3
						fontWeight="bold"
						color={
							theme.name === "light"
								? theme.neutrals["700"]
								: theme.neutrals["100"]
						}
					>
						{followers}
					</StyledHeading3>
				</Stat>
				<Stat>
					<StyledHeading4>Following</StyledHeading4>
					<StyledHeading3
						fontWeight="bold"
						color={
							theme.name === "light"
								? theme.neutrals["700"]
								: theme.neutrals["100"]
						}
					>
						{following}
					</StyledHeading3>
				</Stat>
			</Stats>
			{location ? (
				<InfoRow>
					<span>
						<Icon
							name="location"
							color={
								theme.name === "light"
									? theme.neutrals["600"]
									: theme.neutrals["100"]
							}
						/>
					</span>
					<StyledHeading4>{location}</StyledHeading4>
				</InfoRow>
			) : (
				<InfoRow>
					<span>
						<Icon
							name="location"
							color={
								theme.name === "light"
									? theme.neutrals["400"]
									: theme.neutrals["200"]
							}
						/>
					</span>
					<StyledHeading4
						color={
							theme.name === "light"
								? theme.neutrals["400"]
								: theme.neutrals["200"]
						}
					>
						Not Available
					</StyledHeading4>
				</InfoRow>
			)}
			{blog ? (
				<InfoRow>
					<span>
						<Icon
							name="website"
							color={
								theme.name === "light"
									? theme.neutrals["600"]
									: theme.neutrals["100"]
							}
						/>
					</span>
					<StyledHeading4>{blog}</StyledHeading4>
				</InfoRow>
			) : (
				<InfoRow>
					<span>
						<Icon
							name="website"
							color={
								theme.name === "light"
									? theme.neutrals["400"]
									: theme.neutrals["200"]
							}
						/>
					</span>
					<StyledHeading4
						color={
							theme.name === "light"
								? theme.neutrals["400"]
								: theme.neutrals["200"]
						}
					>
						Not Available
					</StyledHeading4>
				</InfoRow>
			)}
			{twitter_username ? (
				<InfoRow>
					<span>
						<Icon
							name="twitter"
							color={
								theme.name === "light"
									? theme.neutrals["600"]
									: theme.neutrals["100"]
							}
						/>
					</span>
					<StyledHeading4>{twitter_username}</StyledHeading4>
				</InfoRow>
			) : (
				<InfoRow>
					<span>
						<Icon
							name="twitter"
							color={
								theme.name === "light"
									? theme.neutrals["400"]
									: theme.neutrals["200"]
							}
						/>
					</span>
					<StyledHeading4
						color={
							theme.name === "light"
								? theme.neutrals["400"]
								: theme.neutrals["200"]
						}
					>
						Not Available
					</StyledHeading4>
				</InfoRow>
			)}
			{company ? (
				<InfoRow>
					<span>
						<Icon
							name="company"
							color={
								theme.name === "light"
									? theme.neutrals["600"]
									: theme.neutrals["100"]
							}
						/>
					</span>
					<StyledHeading4>{company}</StyledHeading4>
				</InfoRow>
			) : (
				<InfoRow>
					<span>
						<Icon
							name="company"
							color={
								theme.name === "light"
									? theme.neutrals["400"]
									: theme.neutrals["200"]
							}
						/>
					</span>
					<StyledHeading4
						color={
							theme.name === "light"
								? theme.neutrals["400"]
								: theme.neutrals["200"]
						}
					>
						Not Available
					</StyledHeading4>
				</InfoRow>
			)}
		</StyledCard>
	);
}
