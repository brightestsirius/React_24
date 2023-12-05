import { configureStore } from '@reduxjs/toolkit'

import todo from './todoSlice/reducer'

export const store = configureStore({
  reducer: {todo},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch