import { configureStore } from "@reduxjs/toolkit";

import { reducer as todos } from "./todos/todos.slice";
import { reducer as user } from "./user/user.slice";
import { postsApi } from "./posts/postsApi";

export const store = configureStore({
  reducer: { todos, user, [postsApi.reducerPath]: postsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
