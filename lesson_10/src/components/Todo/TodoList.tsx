import React, {FC} from 'react'

import {ITodo} from './../../types/data'
import TodoListItem from './TodoListItem'

interface ITodoListProps {
    items: ITodo[],
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void
}

const TodoList:FC<ITodoListProps> = ({items, removeTodo, toggleTodo}) => {
  return (
    <ul>
        {items.map(item => <TodoListItem key={item.id} {...item} removeTodo={removeTodo} toggleTodo={toggleTodo} />)}
    </ul>
  )
}

export default TodoList;
