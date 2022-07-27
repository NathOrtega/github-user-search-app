import React from "react";
import ListItem, { ListItemProps } from "./ListItem";
import styled from "styled-components";
import { up } from "styled-breakpoints";

export type ListItems = Array<ListItemProps>;

type ListProps = {
	listItems: ListItems;
};

const Container = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	${up("md")} {
		width: 100%;
		height: 80px;
		flex-wrap: wrap;
	}
`;

export default function InfoList({ listItems }: ListProps) {
	return (
		<Container>
			{listItems.map((listItem, index) => {
				return (
					<React.Fragment key={index}>
						<ListItem
							iconName={listItem.iconName}
							item={listItem.item}
							url={listItem.url}
						/>
					</React.Fragment>
				);
			})}
		</Container>
	);
}
