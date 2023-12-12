import { configureStore } from '@reduxjs/toolkit'

import counter from './counter/slice'

export const store = configureStore({
    reducer: { counter },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch