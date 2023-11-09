import React, {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'

export default function Comments() {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get(`postId`);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            let request = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`),
                response = await request.json();

            setComments(response);
        })()
    }, [])
    


  return comments.length ? <ul>
    {
        comments.map(item => <li key={item.id}>{item.body}</li>)
    }
  </ul> : null;
}
