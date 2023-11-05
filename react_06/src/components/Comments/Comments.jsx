import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import postsService from "./../../service/posts";

export default function Comments() {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get(`postId`);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await postsService.get(`comments?postId=${postId}`);
      setComments(response);
    })();
  }, []);

  return comments.length ? (
    <ol>
      {comments.map((item, index) => (
        <li key={index}>
          {
            <ul>
              {Object.keys(item).map((k, i) => (
                <li key={i}>
                  {k}: {item[k]}
                </li>
              ))}
            </ul>
          }
        </li>
      ))}
    </ol>
  ) : null;
}
