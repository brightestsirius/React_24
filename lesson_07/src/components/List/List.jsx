import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "./ListItem";

import {LIST_FILTER_COMPLETED, LIST_FILTER_NON_COMPLETED} from './../../constants/list'
import {getListThunk} from './../../store/list/thunks'

export default function List() {
  const dispatch = useDispatch();

  const list = useSelector((store) => store.list.list);
  const filter = useSelector((store) => store.filter.filter);

  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    dispatch(getListThunk(`todos`));
  }, [])

  useEffect(() => {
    switch(filter){
      case LIST_FILTER_COMPLETED:
        setFilteredList(list.filter(item => item.completed));
        break;
      case LIST_FILTER_NON_COMPLETED:
        setFilteredList(list.filter(item => !item.completed));
        break;
      default:
        setFilteredList(list);
    }
  }, [list, filter])

  return list.length ? (
    <ul>
      {filteredList.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  ) : null;
}
