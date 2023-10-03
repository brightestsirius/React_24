import React, { useReducer, useRef } from "react";
import "./style.sass";

import { reducer, initialState } from "./../../store/counter/reducer";

import {
  counterDecerementAction,
  counterIncerementAction,
  counterAddValueAction,
} from "./../../store/counter/actions";

export default function Switcher() {
  const inputNumber = useRef();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDecrement = () => dispatch(counterDecerementAction);
  const handleIncrement = () => dispatch(counterIncerementAction);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(counterAddValueAction(+inputNumber.current.value));
  };

  return (
    <div className="switcher">
      <button onClick={handleDecrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={handleIncrement}>+</button>

      <form onSubmit={handleSubmit}>
        <input type="number" ref={inputNumber} />
      </form>
    </div>
  );
}
