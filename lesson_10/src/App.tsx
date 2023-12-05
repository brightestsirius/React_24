import React, { FC, useState, useRef, useEffect } from 'react'

import { ITodo } from './types/data'
import TodoList from './components/Todo/TodoList';

const App: FC = () => {
  const [value, setValue] = useState<string>(``);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === `Enter`) addValue();
  }

  const addValue = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        completed: false
      }])
    }
    setValue(``);
  }

  const removeTodo = (id: number): void => {
    setTodos(prevState => prevState.filter(item => item.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(prevState => prevState.map((item => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    })))
  }

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [])

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handleInput} onKeyDown={handleKeyDown} ref={inputRef} />
        <button onClick={addValue}>Add todo</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App;