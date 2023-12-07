import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {sagas} from './sagas';

import posts from './posts/postsSlice'
import users from './users/usersSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: { posts, users },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// 1 click - pending –> cancled
// 2 click - pending