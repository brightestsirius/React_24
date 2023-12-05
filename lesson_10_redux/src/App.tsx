import React, { FC } from 'react'

import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

const App: FC = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App