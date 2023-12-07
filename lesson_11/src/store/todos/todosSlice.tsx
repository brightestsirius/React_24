import { createSlice } from '@reduxjs/toolkit'
import { ITodos } from '../../types/data'

interface UsersrState {
    isLoading: boolean,
    list: Array<ITodos>,
    error: string
}

const initialState = { list: [], error: ``, isLoading: false } as UsersrState;

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodosSuccess(state, action) {
            state.list = action.payload;
            state.isLoading = false;
        },
        getTodosRejected(state, action) {
            state.list = [];
            state.error = action.payload;
            state.isLoading = false;
        },
    },
})

export const { getTodosSuccess, getTodosRejected } = todosSlice.actions

export default todosSlice.reducer

// redux-saga: watchers, workers, effects