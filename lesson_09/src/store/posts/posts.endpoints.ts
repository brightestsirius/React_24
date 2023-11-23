import { postsApi } from "./postsApi";

export const postsEndpoints = postsApi.injectEndpoints({
  endpoints: (build) => ({
    deletePostById: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    changePost: build.mutation({
      query: (payload) => ({
        url: `posts/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Posts"],
    }),
    createPost: build.mutation({
      query: (payload) => ({
        url: `posts`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useDeletePostByIdMutation, useChangePostMutation, useCreatePostMutation } =
  postsEndpoints;
