import React from "react";
import ListItem, { ListItemProps } from "./ListItem";

export type ListItems = Array<ListItemProps>;

type ListProps = {
	listItems: ListItems;
};

export default function InfoList({ listItems }: ListProps) {
	return (
		<>
			{listItems.map((listItem, index) => {
				return (
					<React.Fragment key={index}>
						<ListItem iconName={listItem.iconName} item={listItem.item} />
					</React.Fragment>
				);
			})}
		</>
	);
}
