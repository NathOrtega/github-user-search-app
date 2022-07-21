import React from "react";
import styled from "styled-components";

type ButtonProps = {
	children: React.ReactNode;
	style?: React.CSSProperties;
};

const StyledButton = styled.button`
	width: 84px;
	height: 46px;
	border-radius: 10px;
	border: none;
	color: #ffffff;
	background-color: ${({ theme }) => theme.primary};

	:hover {
		background-color: ${({ theme }) => theme.primaryLight};
		cursor: pointer;
	}
`;

export default function Button(props: ButtonProps) {
	return <StyledButton style={props.style}>{props.children}</StyledButton>;
}
