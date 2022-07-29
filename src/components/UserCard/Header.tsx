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
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 30px;
	position: relative;

	${up("lg")} {
		height: 50px;
		margin: 48px 0 0;
	}
`;

const ProfilePicture = styled.div<{ avatar?: string }>`
	width: 70px;
	height: 70px;
	border: none;
	border-radius: 50%;
	background-color: #697c9a;
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
	position: relative;

	${up("md")} {
		height: 100px;
		justify-content: space-around;
	}

	${up("lg")} {
		width: 75%;
		justify-content: flex-start;

		h3 {
			margin-bottom: 10px;
		}

		#date {
			position: absolute;
			top: 0px;
			right: 0;
		}
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
					id="date"
					fontSize={getResponsiveValue("13px", "16px", "16px")}
				>{`Joined ${formatedDate}`}</StyledHeading4>
			</HeaderInfo>
		</Header>
	);
}
