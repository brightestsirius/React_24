import React, {FC} from 'react'

import PostList from './components/Post/PostList'
import UserList from './components/User/UserList'

const App:FC = () => {
  return (
    <div>
      <PostList />
      <UserList />
    </div>
  )
}

export default App;