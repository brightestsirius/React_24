import React from "react";
import { useGetPostsQuery } from "./../../store/posts/apiPosts";
import {
  useChangePostByIdMutation,
  useDeletePostByIdMutation,
} from "./../../store/posts/posts.mutation";

import Loading from "./../Loading/Loading";
import Error from "./../Error/Error";

const userExist = true;

export default function Posts() {
  const { data, isLoading, error } = useGetPostsQuery(undefined, {
    skip: !userExist,
  });

  const [changeItem] = useChangePostByIdMutation();
  const [deleteItem] = useDeletePostByIdMutation();

  const handleChange = (item) => {
    changeItem({ ...item, completed: !item.completed });
  };

  const handleDelete = (id) => deleteItem(id);

  return data ? (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title}
          <input
            type="checkbox"
            defaultChecked={item.completed}
            onChange={() => handleChange(item)}
          />
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : isLoading ? (
    <Loading />
  ) : error ? (
    <Error value={error} />
  ) : null;
}
