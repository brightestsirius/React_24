import React, { useState, useEffect } from "react";
import postsService from "./../../service/posts";

import {Link} from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await postsService.get();
      setPosts(response.slice(0, 10));
    })();
  }, []);

  return posts.length ? (
    <ul>
      {posts.map((item, index) => (
        <li key={index}><Link to={`${item.id}`}>{item.title}</Link></li>
      ))}
    </ul>
  ) : null;
}