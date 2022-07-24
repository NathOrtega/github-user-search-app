import styled from "styled-components";
import { StyledHeading3, StyledHeading4 } from "./designSystem/Typography";
import { useTheme } from "../contexts/theme";
import dayjs from "dayjs";

type CardProps = {
	avatarUrl: string | undefined;
	name: string | undefined;
	username: string | undefined;
	created_at: string | undefined;
};

const StyledCard = styled.div`
	width: 100%;
	height: 517px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	border-radius: 15px;
	border: none;
	background-color: ${({ theme }) =>
		theme.name === "light" ? theme.neutrals[200] : theme.neutrals[400]};
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

export default function Card({
	avatarUrl,
	name,
	username,
	created_at,
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
		</StyledCard>
	);
}
