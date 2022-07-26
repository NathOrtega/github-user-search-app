import styled from "styled-components";
import { StyledHeading3, StyledHeading4 } from "../designSystem/Typography";
import { useTheme } from "../../contexts/theme";
import dayjs from "dayjs";
import { up } from "styled-breakpoints";
import useGetResponsiveValue from "../utils/useGetResponsiveValue";

type HeaderProps = {
	avatarUrl?: string;
	name?: string;
	username?: string;
	created_at?: string;
};

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 30px;
`;

const ProfilePicture = styled.div<{ avatar?: string }>`
	width: 70px;
	height: 70px;
	border: none;
	border-radius: 50%;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${({ avatar }) => avatar});
	margin-right: 20px;

	${up("md")} {
		width: 117px;
		height: 117px;
		margin-right: 40px;
	}
`;

const HeaderInfo = styled.div`
	width: fit-content;
	height: 70px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	${up("md")} {
		height: 100px;
		justify-content: space-around;
	}
`;

export default function CardHeader({
	avatarUrl,
	name,
	username,
	created_at,
}: HeaderProps) {
	const { theme } = useTheme();
	const formatedDate = dayjs(created_at).format("DD MMM YYYY");
	const formatedUsername = username?.replace("@", "");
	const getResponsiveValue = useGetResponsiveValue();

	return (
		<Header>
			<ProfilePicture avatar={avatarUrl} />
			<HeaderInfo>
				<StyledHeading3
					fontSize={getResponsiveValue("16px", "26px", "26px")}
					color={
						theme.name === "light"
							? theme.neutrals["800"]
							: theme.neutrals["100"]
					}
					fontWeight="bold"
				>
					{name ? name : formatedUsername}
				</StyledHeading3>
				<StyledHeading4
					color={theme.primary}
					fontSize={getResponsiveValue("13px", "16px", "16px")}
				>
					{username}
				</StyledHeading4>
				<StyledHeading4
					fontSize={getResponsiveValue("13px", "16px", "16px")}
				>{`Joined ${formatedDate}`}</StyledHeading4>
			</HeaderInfo>
		</Header>
	);
}
