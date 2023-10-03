import React, { useContext } from "react";

import ListItem from "./ListItem";
import ListStatisticsColor from "../../contexts/ListStatisticsColor";

export default function List() {
  const {list} = useContext(ListStatisticsColor);

  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  ) : null;
}
