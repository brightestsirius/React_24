import React, { FC } from 'react'
import { useAppSelector } from './../../hooks';

import TodoListItem from './TodoListItem'

const TodoList: FC = () => {
    const todos = useAppSelector(state => state.todo.list);

    return todos.length ? <ul>
        {todos.map(item => <TodoListItem key={item.id} {...item} />)}
    </ul> : null;
}

export default TodoList;