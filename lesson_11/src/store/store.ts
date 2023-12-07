import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_POSTS, getPostsSaga } from './posts/postsSlice'
import { GET_USERS, getUsersSaga } from './users/usersSlice'

import posts from './posts/postsSlice'
import users from './users/usersSlice'

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

export const store = configureStore({
    reducer: { posts, users },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch