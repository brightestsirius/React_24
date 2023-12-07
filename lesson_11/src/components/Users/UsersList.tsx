import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './../../hooks'
import { getUsers } from './../../store/users/usersSlice'

const UsersList: FC = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(state => state.users.list);

  const handleClick = () => dispatch(getUsers(10));

  return <>
    <button onClick={handleClick}>Get users</button>
    {users.length ? <ul>
      {users.map(item => <li key={item.id}>{item.name}</li>)}
    </ul> : null}
  </>
}

export default UsersList