import React, { FC } from 'react'

import { ITodo } from './../types/todo'
import TodoListItem from './TodoListItem'

interface ITodoListProps {
    items: Array<ITodo>,
    handleItemDelete: (id: number) => void,
    handleItemCompleted: (id: number) => void
}

const TodoList: FC<ITodoListProps> = ({ items, handleItemDelete, handleItemCompleted }) => {
    return items.length ? <ul>
        {items.map(item => <TodoListItem key={item.id} {...item} handleItemDelete={handleItemDelete} handleItemCompleted={handleItemCompleted} />)}
    </ul> : null;
}

export default TodoList;