import React from 'react'
import Post from './../components/Post/Post'
import Navigation from './../components/Navigation/Navigation'

export default function PostRoute() {
  return (
    <>
      <h3>Post Route</h3>
      <Post />
      <Navigation title="Back to posts" path={"/posts"} />
    </>
  )
}