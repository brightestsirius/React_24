import React, { FC } from 'react'

import { ITodo } from './../types/todo';

interface ITodoListItemProps extends ITodo {
    handleItemDelete: (id: number) => void,
    handleItemCompleted: (id: number) => void
}

const TodoListItem: FC<ITodoListItemProps> = ({ id, title, completed, handleItemDelete, handleItemCompleted }) => {
    return (
        <li>
            <span>{title}</span>
            <input type="checkbox" defaultChecked={completed} onChange={() => handleItemCompleted(id)} />
            <button onClick={() => handleItemDelete(id)}>Delete</button>
        </li>
    )
}

export default TodoListItem;