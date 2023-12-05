import React, { FC, useState, useRef, useEffect } from 'react'

import {ITodo} from './types/todo'

import TodoList from './components/TodoList'

const App: FC = () => {
  const [value, setValue] = useState<string>(``);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddItem = () => {
    if(value){
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        completed: false
      }])
      setValue(``);
    } 
  }

  const handleInput:React.ChangeEventHandler<HTMLInputElement> = e => setValue(e.target.value);

  const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = e => {
    if(e.key === `Enter`) handleAddItem();
  }

  const handleItemDelete = (id:number):void => {
    setTodos(prevState => prevState.filter(item => item.id !== id));
  }

  const handleItemCompleted = (id:number):void => {
    setTodos(prevState => prevState.map(item => {
      if(item.id === id) item.completed = !item.completed;
      return item;
    }))
  }

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>

      <div>
        <input type="text" value={value} onKeyDown={handleKeyDown} onChange={handleInput} ref={inputRef} />
        <button onClick={handleAddItem}>Add item</button>
      </div>

      <TodoList items={todos} handleItemDelete={handleItemDelete} handleItemCompleted={handleItemCompleted} />

    </div>
  )
}

export default App;