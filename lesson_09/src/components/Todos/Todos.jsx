import React from "react";

import useActions from './../../hooks/useActions'
import useTodos from './../../hooks/useTodos/'

export default function Todos() {
  const {todos} = useTodos();
  const {toggleFavourite, deleteItem} = useActions();
  
  const handleFavourite = (id) => toggleFavourite(id);
  const handleDelete = (id) => deleteItem(id);

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleFavourite(item.id)}>
            Toggle favoutite
          </button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
