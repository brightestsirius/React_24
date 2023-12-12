import React from 'react'
import {useAppDispatch, useAppSelector} from './../../hooks'
import {increment, decrement} from './../../store/counter/slice'

export default function Counter() {
    const counter = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

  return (
    <div>
        <span>Counter: {counter}</span>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}