import React, { FC } from 'react'

import PostsList from './components/Posts/PostsList'
import UsersList from './components/Users/UsersList'

const App: FC = () => {
  return (
    <div>
      <PostsList />
      <UsersList />
    </div>
  )
}

export default App;