import React from "react";
import styled from "styled-components";

type HeaderProps = {
	logo: React.ReactNode;
	children: React.ReactNode;
};

const StyledHeader = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 36px;
`;

export default function Header(props: HeaderProps) {
	const { logo, children } = props;

	return (
		<StyledHeader>
			{logo}
			{children}
		</StyledHeader>
	);
}
