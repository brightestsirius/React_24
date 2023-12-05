import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './../store'

interface ITodo{
    id: number;
    title: string;
    completed: boolean
}

interface TodoState {
  list: Array<ITodo>
}

const initialState: TodoState = {
  list: [
    {
        id: 1,
        title: `Value 1`,
        completed: false
    },
    {
        id: 2,
        title: `Value 2`,
        completed: true
    },
    {
        id: 3,
        title: `Value 3`,
        completed: false
    }
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const newTodo:ITodo = {
        id: Date.now(),
        title: action.payload,
        completed: false
      }

      state.list.push(newTodo);
    },
    completeItem: (state, action: PayloadAction<number>) => {
        state.list = state.list.map(item => {
            if(item.id === action.payload) item.completed = !item.completed;
            return item;
        })
    },
    deleteItem: (state, action: PayloadAction<number>) => {
        state.list = state.list.filter(item => item.id !== action.payload)
    },
  },
})

export const { addItem, completeItem, deleteItem } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default todoSlice.reducer