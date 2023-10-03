import React, { useReducer } from "react";

import {
  listItemDeleteAction,
  listItemChangeAction,
} from "./../../store/list/actions";
import { reducer, initialState } from "./../../store/list/reducer";

export default function List() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleItemDelete = (id) => dispatch(listItemDeleteAction(id));

  const handleItemChange = (item) =>
    dispatch(listItemChangeAction({ ...item, completed: !item.completed }));

  return state.list.length ? (
    <ul>
      {state.list.map((item, index) => (
        <li key={index} style={{ color: item.completed ? `green` : `red` }}>
          {item.title}{" "}
          <input
            type="checkbox"
            defaultChecked={item.completed}
            onChange={() => handleItemChange(item)}
          />
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
