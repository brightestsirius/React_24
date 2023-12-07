import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import postsThunks from '../../store/posts/postsThunk';

const PostList: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.list);

  useEffect(() => {
    dispatch(postsThunks.fetchPosts());
  }, [])

  return posts.length ? <ul>
    {posts.map(item => <li key={item.id}>{item.title}</li>)}
  </ul> : null;
}

export default PostList;