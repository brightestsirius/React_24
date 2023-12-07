import { createSlice } from '@reduxjs/toolkit'
import { IUsers } from './../../types/data'

interface UsersrState {
    isLoading: boolean,
    list: Array<IUsers>,
    error: string
}

const initialState = { list: [], error: ``, isLoading: false } as UsersrState;

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersSuccess(state, action) {
            state.list = action.payload;
            state.isLoading = false;
        },
        getUsersRejected(state, action) {
            state.list = [];
            state.error = action.payload;
            state.isLoading = false;
        },
    },
})

export const { getUsersSuccess, getUsersRejected } = usersSlice.actions

export default usersSlice.reducer

// redux-saga: watchers, workers, effects