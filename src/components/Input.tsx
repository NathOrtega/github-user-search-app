import React from "react";
import styled from "styled-components";

type InputProps = {
	icon: React.ReactNode;
	placeholder: string;
	value: string;
	id: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	children?: React.ReactNode;
	style?: React.CSSProperties;
};

const StyledInput = styled.form`
	width: 100%;
	height: 60px;
	border-radius: 15px;
	border: none;
	background-color: ${({ theme }) =>
		theme.name === "light" ? theme.neutrals[200] : theme.neutrals[400]};
	margin-bottom: 16px;
	box-shadow: ${({ theme }) =>
		theme.name === "light"
			? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
			: "none"};
	padding: 6px 7px 6px 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	label {
		margin-right: 10px;
		cursor: pointer;
	}

	input {
		border: none;
		outline: none;
		font-size: 13px;
		width: 195px;
		background-color: transparent;
		color: ${({ theme }) =>
			theme.name === "light" ? theme.neutrals[600] : theme.neutrals[100]};
		caret-color: ${({ theme }) => theme.primary};

		::placeholder {
			color: ${({ theme }) =>
				theme.name === "light" ? theme.neutrals[600] : theme.neutrals[100]};
		}
	}
`;

export default function Input(props: InputProps) {
	const { icon, placeholder, value, id, onChange, children, style } = props;

	return (
		<StyledInput>
			{icon && <label htmlFor={id}>{icon}</label>}
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				id={id}
				onChange={onChange}
				style={style}
			/>
			{children && children}
		</StyledInput>
	);
}
