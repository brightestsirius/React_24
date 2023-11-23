import { postsApi } from "./apiPosts";

const postMutations = postsApi.injectEndpoints({
  endpoints: (builder) => ({
    changePostById: builder.mutation({
      query: (payload) => ({
        url: `/posts/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePostById: builder.mutation({
      query: (payload) => ({
        url: `/posts/${payload}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    createPost: builder.mutation({
      query: (payload) => ({
        url: `/posts`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useChangePostByIdMutation,
  useDeletePostByIdMutation,
  useCreatePostMutation,
} = postMutations;
