import React from "react";
import styled from "styled-components";

type CardProps = {
	style?: React.CSSProperties;
	children: React.ReactNode;
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

export default function Card({ children }: CardProps) {
	return <StyledCard>{children}</StyledCard>;
}
