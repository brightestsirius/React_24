import React from "react";
import { useDispatch } from "react-redux";

import { changeListItemCompletedThunk } from "./../../store/list/thunks";

export default function ListItemCheckbox({ item }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeListItemCompletedThunk(`todos`, item));
  };

  return (
    <input
      onChange={handleChange}
      type="checkbox"
      defaultChecked={item.completed}
    />
  );
}
