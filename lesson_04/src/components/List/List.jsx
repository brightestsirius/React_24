import React, { useEffect } from "react";

import ListMUI from '@mui/material/List';
import ListItemMUI from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import useList from './../../hooks/useList'
import useSortedList from './../../hooks/useSortedList'

export default function List({ color, liftingList, todo }) {
  const [list, handleItemDelete] = useList(todo);
  const sortedList = useSortedList(list);

  useEffect(() => {
    liftingList(list);
  }, [list]);

  return sortedList.length ? (
    <ListMUI style={{ background: color }}>
      {sortedList.map((item, index) => (
        <ListItemMUI key={index} style={{ color: item.completed ? `green` : `red` }}>
          {item.title} <IconButton onClick={() => handleItemDelete(item.id)}><DeleteIcon /></IconButton>
        </ListItemMUI>
      ))}
    </ListMUI>
  ) : null;
}
