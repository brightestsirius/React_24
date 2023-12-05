import React, { FC } from 'react'
import {useAppDispatch} from './../../hooks'
import {deleteItem, completeItem} from './../../store/todoSlice/reducer'

interface ITodoListItemProps{
    id: number;
    title: string;
    completed: boolean;
}

const TodoListItem: FC<ITodoListItemProps> = ({id, title, completed}) => {
    const dispatch = useAppDispatch();

    const handleItemDelete = () => dispatch(deleteItem(id));

    const handleItemCompleted = () => dispatch(completeItem(id));

    return <li>
        <span>{title}</span>
        <input type="checkbox" defaultChecked={completed} onChange={handleItemCompleted} />
        <button onClick={handleItemDelete}>Delete</button>
    </li>
}

export default TodoListItem;