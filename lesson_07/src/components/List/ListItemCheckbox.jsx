import React from "react";
import { useDispatch } from "react-redux";

import { changeListItemThunk } from "./../../store/list/thunks";

export default function ListItemCheckbox({ item }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeListItemThunk({ ...item, completed: !item.completed }));
  };

  return (
    <input
      onChange={handleChange}
      type="checkbox"
      defaultChecked={item.completed}
    />
  );
}
