import styled from "styled-components";

interface TypographyProps {
	readonly fontSize?: string;
	readonly color?: string;
	readonly fontWeight?: string;
}

export const StyledHeading1 = styled.h1<TypographyProps>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "26px")};
	line-height: 38px;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
	color: ${({ color, theme }) => {
		const themeColor: string =
			theme.name === "light" ? theme.neutrals["800"] : theme.neutrals["100"];
		return color ? color : themeColor;
	}};
`;

export const StyledHeading2 = styled.h2<TypographyProps>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "22px")};
	line-height: 33px;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
	color: ${({ color, theme }) => {
		const themeColor: string =
			theme.name === "light" ? theme.neutrals["800"] : theme.neutrals["100"];
		return color ? color : themeColor;
	}};
`;

export const StyledHeading3 = styled.h3<TypographyProps>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
	line-height: 24px;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
	color: ${({ color, theme }) => (color ? color : theme.primary)};
`;

export const StyledHeading4 = styled.h4<TypographyProps>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "13px")};
	line-height: 20px;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
	color: ${({ color, theme }) => {
		const themeColor: string =
			theme.name === "light" ? theme.neutrals["500"] : theme.neutrals["100"];
		return color ? color : themeColor;
	}};
`;

export const StyledParagraph = styled.p<TypographyProps>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
	line-height: 25px;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
	color: ${({ color, theme }) => {
		const themeColor: string =
			theme.name === "light" ? theme.neutrals["800"] : theme.neutrals["100"];
		return color ? color : themeColor;
	}};
`;
