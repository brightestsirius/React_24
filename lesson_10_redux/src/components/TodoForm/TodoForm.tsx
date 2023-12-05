import React, { FC, useState, useRef, useEffect } from 'react'

import {useAppDispatch} from './../../hooks'
import {addItem} from './../../store/todoSlice/reducer'

const TodoForm: FC = () => {
    const [value, setValue] = useState<string>(``);
    const dispatch = useAppDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddItem = () => {
        dispatch(addItem(value));
        setValue(``);
    }

    const handleInput: React.ChangeEventHandler<HTMLInputElement> = e => setValue(e.target.value);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === `Enter`) handleAddItem();
    }

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" value={value} onKeyDown={handleKeyDown} onChange={handleInput} ref={inputRef} />
            <button onClick={handleAddItem}>Add item</button>
        </div>
    )
}

export default TodoForm;