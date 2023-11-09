import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let request = await fetch(`https://jsonplaceholder.typicode.com/posts`),
        response = await request.json();

      setPosts(response.slice(0, 10));
    })();
  }, []);

  return posts.length ? (
    <ul>
      {posts.map((item) => (
        <li key={item.id}><Link to={String(item.id)}>{item.title}</Link></li>
      ))}
    </ul>
  ) : null;
}
