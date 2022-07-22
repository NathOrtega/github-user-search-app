import React from "react";
import styled from "styled-components";

type ButtonProps = {
	onClick: () => void;
	type?: "button" | "submit" | "reset";
	children: React.ReactNode;
	style?: React.CSSProperties;
};

const StyledButton = styled.button`
	width: 84px;
	height: 46px;
	border-radius: 10px;
	border: none;
	color: ${({ theme }) => theme.neutrals[100]};
	background-color: ${({ theme }) => theme.primary};

	:hover {
		background-color: ${({ theme }) => theme.primaryLight};
		cursor: pointer;
	}
`;

export default function Button(props: ButtonProps) {
	const { style, type, onClick, children } = props;

	return (
		<StyledButton style={style} type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
}
