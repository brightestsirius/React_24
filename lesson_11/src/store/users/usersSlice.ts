import { createSlice, createAction } from '@reduxjs/toolkit'

import { IUser } from '../../types/data'
import postsAPI from '../../services/posts'
import { call, put } from 'redux-saga/effects'

interface UsersState {
    list: Array<IUser>
}

const initialState: UsersState = {
    list: [],
}

export function* getUsersSaga(action): any {
    const payload = yield call(postsAPI.get, `users`);
    yield put(getUsersSuccess(payload));
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersSuccess: (state, action) => {
            state.list = action.payload.slice(0, 10)
        },
    }
})

export const { getUsersSuccess } = usersSlice.actions

export const GET_USERS = `posts/getUsers`;
export const getUsers = createAction(GET_USERS);

export default usersSlice.reducer