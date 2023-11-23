import React, { useState } from "react";
import { useCreatePostMutation } from "../../store/posts/posts.endpoints";

import {IPostData} from './../../types/post.types';

export default function Post() {
  const defaultPost:IPostData = { title: ``, completed: false };

  const [post, setPost] = useState({
    title: ``,
    completed: false,
  });

  const [createPost] = useCreatePostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(post).then(() => {
        setPost(defaultPost);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          value={post.title}
          onChange={(e) =>
            setPost((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          checked={post.completed}
          onChange={(e) =>
            setPost((prevState) => ({
              ...prevState,
              completed: e.target.checked,
            }))
          }
        />
      </label>
      <button>Create post</button>
    </form>
  );
}
