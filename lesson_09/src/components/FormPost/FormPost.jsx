import React, { useState } from "react";

import { useCreatePostMutation } from "./../../store/posts/posts.mutation";

const defaultPost = {
  title: ``,
  completed: false,
};

export default function FormPost() {
  const [post, setPost] = useState(defaultPost);

  const [createPost] = useCreatePostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost(post).then(() => setPost(defaultPost));
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
        Completed{" "}
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
