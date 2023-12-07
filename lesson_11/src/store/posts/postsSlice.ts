import { createSlice } from '@reduxjs/toolkit'
import {IPost} from './../../types/data'
import postsThunks from './postsThunk'

interface PostsState {
  list: Array<IPost>
}

const initialState: PostsState = {
  list: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsThunks.fetchPosts.fulfilled, (state, {payload}) => {
        state.list = payload.slice(0,10);
      })
      .addCase(postsThunks.fetchPosts.rejected, (state, {payload}) => {
        console.log(payload);
      })
  },
})

export default postsSlice.reducer