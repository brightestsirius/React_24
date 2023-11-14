import React from "react";
import ListItemCheckbox from './ListItemCheckbox'

export default function ListItem({ item }) {
  return <li>{item.title} <ListItemCheckbox item={item} /></li>;
}