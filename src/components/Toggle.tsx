import styled from "styled-components";
import { StyledHeading4 } from "./designSystem/Typography";

type ToggleProps = {
	label: string;
	iconPath: string;
	iconAlt: string;
	onToggle: Function;
};

const StyledButton = styled.button`
	width: fit-content;
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: transparent;

	img {
		margin-left: 10px;
	}

	:hover {
		cursor: pointer;
	}
`;

export default function Toggle(props: ToggleProps) {
	const { label, iconPath, iconAlt, onToggle } = props;

	const handleOnClick = () => {
		onToggle();
	};

	return (
		<StyledButton onClick={handleOnClick}>
			<StyledHeading4>{label}</StyledHeading4>
			<img src={iconPath} alt={iconAlt} />
		</StyledButton>
	);
}
