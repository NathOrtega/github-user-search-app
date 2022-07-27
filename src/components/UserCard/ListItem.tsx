import styled from "styled-components";
import Icon, { IconName } from "../Icon";
import { useTheme } from "../../contexts/theme";
import { StyledHeading4 } from "../designSystem/Typography";
import useGetResponsiveValue from "../utils/useGetResponsiveValue";
import { up } from "styled-breakpoints";

export type ListItemProps = {
	iconName: keyof typeof IconName;
	item?: string;
	url?: string;
};

const Container = styled.div`
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

	a {
		text-decoration: none;

		:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}

	${up("md")} {
		margin-bottom: 19px;
	}
`;

export default function ListItem({ iconName, item, url }: ListItemProps) {
	const { theme } = useTheme();
	const getResponsiveValue = useGetResponsiveValue();
	const mainColor =
		theme.name === "light" ? theme.neutrals["600"] : theme.neutrals["100"];
	const disabledColor =
		theme.name === "light" ? theme.neutrals["400"] : theme.neutrals["200"];
	const iconColor = item ? mainColor : disabledColor;

	return (
		<Container>
			<span>
				<Icon name={iconName} color={iconColor} />
			</span>
			<StyledHeading4
				color={item ? undefined : disabledColor}
				fontSize={getResponsiveValue("13px", "15px", "15px")}
				as={item && url ? "a" : StyledHeading4}
				href={url}
				target="_blank"
			>
				{item ? item : "Not Available"}
			</StyledHeading4>
		</Container>
	);
}
