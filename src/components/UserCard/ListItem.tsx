import styled from "styled-components";
import Icon, { IconName } from "../Icon";
import { useTheme } from "../../contexts/theme";
import { StyledHeading4 } from "../designSystem/Typography";

export type ListItemProps = {
	iconName: keyof typeof IconName;
	item?: string;
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
`;

export default function ListItem({ iconName, item }: ListItemProps) {
	const { theme } = useTheme();
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
			<StyledHeading4 color={item ? undefined : disabledColor}>
				{item ? item : "Not Available"}
			</StyledHeading4>
		</Container>
	);
}
