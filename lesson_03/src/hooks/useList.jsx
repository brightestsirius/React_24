import React, { useState, useEffect } from "react";

import todos from "./../services/todos";

export default function useList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await todos.get();
      setList(response.slice(0, 15));
    })();
  }, []);

  const handleItemDelete = async (event, id) => {
    event.stopPropagation();
    try {
      await todos.delete(id);
      setList((actualState) => actualState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (event, item) => {
    event.stopPropagation();

    let response = await todos.patch(item.id, {
      completed: !item.completed,
    });

    setList((actualState) =>
      actualState.map((el) => {
        if (el.id === item.id) el = response;
        return el;
      })
    );
  };

  return [list, handleItemCompleted, handleItemDelete];
}
