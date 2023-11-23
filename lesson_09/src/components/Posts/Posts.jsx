import React from "react";
import { useGetPostsQuery } from "./../../store/posts/postsApi";
import Skeleton from "../Skeleton/Skeleton";
import {
  useDeletePostByIdMutation,
  useChangePostMutation,
} from "./../../store/posts/posts.endpoints";

export default function Posts() {
  const { data, error, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostByIdMutation();
  const [changePost] = useChangePostMutation();

  const handleDelete = (id) => deletePost(id);

  const handleCompleted = (item) => {
    changePost({ ...item, completed: !item.completed });
  };

  return data ? (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <input
            type="checkbox"
            defaultChecked={item.completed}
            onChange={() => handleCompleted(item)}
          />
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : isLoading ? (
    <Skeleton />
  ) : error ? (
    <p>{error}</p>
  ) : null;
}
