import React from "react";
import { useSelector } from "react-redux";

export default function Statistics() {
  const list = useSelector((store) => store.list.list);

  return (
    <div>
      Statistics:
      <ul>
        <li>All: {list.length}</li>
        <li>Completed: {list.filter((item) => item.completed).length}</li>
        <li>Non-completed: {list.filter((item) => !item.completed).length}</li>
      </ul>
    </div>
  );
}
