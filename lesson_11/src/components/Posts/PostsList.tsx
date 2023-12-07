import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './../../hooks'
import { getPosts } from './../../store/posts/postsSlice'

const PostsList: FC = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(state => state.posts.list);

  useEffect(() => {
    dispatch(getPosts());
  }, [])

  return posts.length ? <ul>
    {posts.map(item => <li key={item.id}>{item.title}</li>)}
  </ul> : null;
}

export default PostsList