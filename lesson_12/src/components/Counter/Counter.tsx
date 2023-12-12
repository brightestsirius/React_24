import React, { FC } from 'react'
import {useAppDispatch, useAppSelector} from './../../../hooks'
import {increment, decrement} from '../../store/counter/slice'

const Counter: FC = () => {
    const counter = useAppSelector(store => store.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <span>Counter: {counter}</span>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter