import React, { useMemo } from "react";
import "./style.sass";

import {generateBg} from './../../utils/theme'

import useList from "../../hooks/useList";
import useFilteredList from "../../hooks/useFilteredList"

export default function List({ filter }) {
  const [list, handleItemCompleted, handleItemDelete] = useList();
  const [filteredList] = useFilteredList(list, filter);

  const bg = useMemo(()=>generateBg(), [list]);

  return filteredList.length ? (
    <>
      <ul style={{background: bg}}>
        {filteredList.map((item, index) => (
          <li
            key={index}
            className={
              item.completed ? `item--completed` : `item--non-completed`
            }
          >
            {item.title}{" "}
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
