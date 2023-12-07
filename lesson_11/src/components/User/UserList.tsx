import React, { FC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getUsers } from './../../store/users/usersSaga'

const UserList: FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users.list);

    const handleClick = () => dispatch(getUsers());

    return <>
        <button onClick={handleClick}>Get users</button>
        {users.length ? <ul>
            {users.map(item => <li key={item.id}>{item.name}</li>)}
        </ul> : null}
    </>
}

export default UserList;