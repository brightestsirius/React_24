import React, { useState, useEffect } from "react";

import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "./../../constants/filter";

import useLocalStorage from './../../hooks/useLocalStorage';

export default function Filter({ liftingFilter }) {
  const [filter, setFilter] = useLocalStorage(`filter`, TODOS_FILTER_ALL);

  const handleFilter = (event) => setFilter(event.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <select defaultValue={filter} onChange={handleFilter}>
      <option value={TODOS_FILTER_ALL}>All</option>
      <option value={TODOS_FILTER_COMPLETED}>Completed</option>
      <option value={TODOS_FILTER_PROGRESS}>In progress</option>
    </select>
  );
}
