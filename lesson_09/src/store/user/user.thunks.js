import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliceName } from "./user.constants";
import axios from "axios";

const thunks = {
  fetchUserById: createAsyncThunk(
    `${sliceName}/fetchUserById`,
    async (userId, thunkAPI) => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  ),
};

export { thunks };
