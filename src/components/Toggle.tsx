import styled from "styled-components";

type ToggleProps = {
	label: string;
	icon: React.ReactNode;
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
	font-size: 13px;
	color: ${({ theme }) =>
		theme.name === "light" ? theme.neutrals[600] : theme.neutrals[100]};

	:hover {
		cursor: pointer;
		color: ${({ theme }) =>
			theme.name === "light" ? theme.neutrals[800] : theme.neutrals[200]};
		path,
		g {
			fill: ${({ theme }) =>
				theme.name === "light" ? theme.neutrals[800] : theme.neutrals[200]};
		}
	}

	span {
		margin-right: 10px;
	}
`;

export default function Toggle(props: ToggleProps) {
	const { label, icon: Icon, onToggle } = props;

	const handleOnClick = () => {
		onToggle();
	};

	return (
		<StyledButton onClick={handleOnClick}>
			<span>{label}</span>
			{Icon}
		</StyledButton>
	);
}
