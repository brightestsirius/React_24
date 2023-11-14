import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setFilterAction} from './../../store/filter/actions'

import { LIST_FILTER_ALL, LIST_FILTER_COMPLETED, LIST_FILTER_NON_COMPLETED } from './../../constants/list'

export default function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector((store) => store.filter.filter)

    const handleSelect = (event) => {
        dispatch(setFilterAction(event.target.value));
    }

  return (
    <div>
        Filter:
        <select onChange={handleSelect} defaultValue={filter}>
            <option value={LIST_FILTER_ALL}>All</option>
            <option value={LIST_FILTER_COMPLETED}>Completed</option>
            <option value={LIST_FILTER_NON_COMPLETED}>Non-completed</option>
        </select>
    </div>
  )
}
