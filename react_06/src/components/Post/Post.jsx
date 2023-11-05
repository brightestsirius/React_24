import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import postsService from "./../../service/posts";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      let request = await postsService.get(`posts`, id);
      setPost(request);
    })();
  }, []);

  return Object.keys(post).length ? (
    <>
      <ul>
        {Object.keys(post).map((key, index) => (
          <li key={index}>
            {key}: {post[key]}
          </li>
        ))}
      </ul>
      <Link to={`/comments?postId=${post.id}`}>Get comments</Link>
      <br /><br />
    </>
  ) : null;
}
