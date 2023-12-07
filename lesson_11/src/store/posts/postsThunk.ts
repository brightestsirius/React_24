import { createAsyncThunk } from '@reduxjs/toolkit'
import postsAPI from './../../services/jsonplaceholder'
import {IPost} from './../../types/data'

const postsThunks = {
    fetchPosts: createAsyncThunk<Array<IPost>>(
        'posts/fetchPosts',
        async (_, thunkAPI) => {
            try{
                const response = await postsAPI.get()
                return response as Array<IPost>;
            } catch(err){
                return thunkAPI.rejectWithValue(err);
            }
          
        }
      )
}

export default postsThunks;