import { createSlice, createAction } from '@reduxjs/toolkit'

import { IPost } from './../../types/data'
import postsThunk from './postsThunk'
import postsAPI from '../../services/posts'
import { put, call } from 'redux-saga/effects'

interface PostsState {
    list: Array<IPost>
}

const initialState: PostsState = {
    list: [],
}

export function* getPostsSaga(): any {
    const data = yield call(postsAPI.get);
    yield put(getPostsSuccess(data));
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPostsSuccess: (state, action) => {
            state.list = action.payload.slice(0, 10)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postsThunk.fetchPosts.fulfilled, (state, action) => {
                state.list = action.payload.slice(0, 10);
            })
    },
})

export const { getPostsSuccess } = postsSlice.actions

export const GET_POSTS = `posts/getPosts`;
export const getPosts = createAction(GET_POSTS);

export default postsSlice.reducer