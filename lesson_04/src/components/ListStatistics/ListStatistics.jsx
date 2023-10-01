/* eslint-disable react-refresh/only-export-components */
import React, {memo} from 'react'

export default memo(function ListStatistics({list}) {
  return (
    <ul>
        <li>All: {list.length}</li>
        <li>Completed: {list.filter(item => item.comleted).length}</li>
        <li>In progress: {list.filter(item => !item.comleted).length}</li>
    </ul>
  )
})