import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function Post() {
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        (async () => {
            let request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
                response = await request.json();

                setPost(response);
        })()
    }, [])
    

  return Object.keys(post).length ? <ul>
    {
        Object
            .keys(post)
            .map((key, index) => <li key={index}>{key}: {post[key]}</li>)
    }
  </ul> : null;
}
