import React from 'react'
import {useParams} from 'react-router-dom'

import Post from './../components/Post/Post'
import NavigationBtn from './../components/NavigationBtn/NavigationBtn'

export default function PostRoute() {
  const {id} = useParams();

  return (
    <div>
        <h3>Post Route</h3>
        <Post />
        <NavigationBtn title="Read comments" path={`/comments?postId=${id}`} />
        <NavigationBtn title="Back to Posts" path="/posts" />
    </div>
  )
}