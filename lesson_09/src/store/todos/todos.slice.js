import { createSlice } from "@reduxjs/toolkit";

import { sliceName } from "./todos.constants";

const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
  ],
  favourites: []
};

export const todosSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    toggleFavourite: (state, {payload}) => {
      let isFavourite = state.favourites.find(id => id === payload);
      if(isFavourite) state.favourites = state.favourites.filter(id => id!==payload);
      else state.favourites.push(payload);
    },
    deleteItem: (state, {payload}) => {
      state.todos = state.todos.filter(item => item.id!==payload);
      
      let isFavourite = state.favourites.find(id => id === payload);
      if(isFavourite) state.favourites = state.favourites.filter(id => id!==payload);
    }
  },
});

export const { actions, reducer} = todosSlice;