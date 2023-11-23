import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `https://655655bc84b36e3a431f9829.mockapi.io/`;

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({ url: `posts` }),
      providesTags: () => [{ type: "Posts" }],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;