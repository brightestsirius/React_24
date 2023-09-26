import React, {useState, useEffect} from 'react'

import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../constants/filter";

export default function useFilteredList(list, filter) {
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    switch (filter) {
      case TODOS_FILTER_COMPLETED:
        setFilteredList(list.filter((item) => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFilteredList(list.filter((item) => !item.completed));
        break;
      default:
        setFilteredList(list);
    }
  }, [filter, list]);

  return [filteredList]
}