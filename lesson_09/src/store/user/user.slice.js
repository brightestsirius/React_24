import { createSlice } from "@reduxjs/toolkit";
import { sliceName } from "./user.contants";

import {thunks} from './user.thunks'

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchUserById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(thunks.fetchUserById.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.user = payload
      })
      .addCase(thunks.fetchUserById.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.user = null;
        state.error = payload;
      })
  },
});

export const { reducer } = userSlice;
