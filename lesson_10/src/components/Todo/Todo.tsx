import React, {FC, useState} from 'react'

import {ITodo} from './../../types/data'

const Todo:FC = () => {
    const [value, setValue] = useState<string>(``);
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addValue = () => {
        if(value){
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false
            }])
        }
        setValue(``);
    }

  return (
    <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={addValue}>Add todo</button>
    </div>
  )
}

export default Todo;