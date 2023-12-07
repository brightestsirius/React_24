import { createAsyncThunk } from '@reduxjs/toolkit'
import postsAPI from './../../services/posts'
import { IPost } from './../../types/data'

const postsThunk = {
    fetchPosts: createAsyncThunk<Array<IPost>, undefined>(
        'posts/postsThunk',
        async (_, thunkAPI) => {
            try {
                const response = await postsAPI.get()
                return response as Array<IPost>;
            } catch (err) {
                return thunkAPI.rejectWithValue(err);
            }

        }
    )
}

export default postsThunk;