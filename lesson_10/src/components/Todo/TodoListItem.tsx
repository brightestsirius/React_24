import React, { FC } from 'react'

import { ITodo } from './../../types/data'

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void
 }

const TodoListItem: FC<ITodoItem> = ({ id, title, completed, toggleTodo, removeTodo }) => {

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={()=> toggleTodo(id)} />
            <span>{title}</span>
            <button onClick={() => removeTodo(id)}>Delete</button>
        </div>
    )
}

export default TodoListItem;
