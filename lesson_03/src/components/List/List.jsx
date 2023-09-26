import React, { useState, useEffect } from "react";
import "./style.sass";

import todos from "./../../services/todos";

import { TODOS_FILTER_ALL, TODOS_FILTER_COMPLETED, TODOS_FILTER_PROGRESS } from './.././../constants/filter'

export default function List() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState(list);

  const [color, setColor] = useState(`crimson`);
  const [filter, setFilter] = useState(TODOS_FILTER_ALL);

  useEffect(() => {
    console.log(`in useEffect`);

    (async () => {
      let response = await todos.get();
      setList(response.slice(0, 10));
    })();

    return () => {
      console.log(`in componentWillUnmount Stage`);
    }
  }, []);

  useEffect(() => {
    console.log(`in useEffect for list`, list);
    setFilteredList(list);

    return () => {
      console.log(`in componentWillUnmount Stage for list`);
    }
  }, [list])

  useEffect(() => {
    console.log(`in useEffect for filter`, filter);

    switch(filter){
      case TODOS_FILTER_COMPLETED:
        setFilteredList(list.filter(item => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFilteredList(list.filter(item => !item.completed));
        break;
      default:
        setFilteredList(list)
    }

    return () => {
      console.log(`in componentWillUnmount Stage for filter`);
    }

  }, [filter])

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

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

    try {
      let response = await todos.patch(item.id, { completed: !item.completed });

      setList((actualState) =>
        actualState.map((el) => {
          if (el.id === item.id) el = response;
          return el;
        })
      );
    } catch (err) {
      console.llog(err);
    }
  };

  const handleItemImportant = (item) => {
    setList((actualState) =>
      actualState.map((el) => {
        if (el.id === item.id) el.completed = !el.completed;
        return el;
      })
    );
  };

  const handleFilter = (event) => setFilter(event.target.value);

  return filteredList.length ? (
    <>
      <select defaultValue={filter} onChange={handleFilter}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_COMPLETED}>Completed</option>
        <option value={TODOS_FILTER_PROGRESS}>In progress</option>
      </select>

      <ul style={{ color }}>
        {filteredList.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemImportant(item)}
            className={
              item.completed ? `item--imporatnt` : `item--non-important`
            }
          >
            {item.title}
            <input
              type="checkbox"
              defaultChecked={item.completed}
              onChange={(event) => handleItemCompleted(event, item)}
              onClick={(event) => event.stopPropagation()}
            />
            <button onClick={(event) => handleItemDelete(event, item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  ) : null;
}
