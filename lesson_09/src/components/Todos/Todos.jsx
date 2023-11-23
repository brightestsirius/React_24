import React from "react";
import { useSelector } from "react-redux";
import useActions from "./../../hooks/useActions";

export default function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const {toggleFavourites, deleteItem} = useActions();

  const handleFavourite = (id) => toggleFavourites(id);

  const handleDelete = (id) => deleteItem(id);

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleFavourite(item.id)}>
            Toggle favourite
          </button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}