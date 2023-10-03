import {
  COUNTER_DECREMENT_ACTION,
  COUNTER_INCREMENT_ACTION,
  COUNTER_ADD_VALUE_ACTION,
} from "./actions";

const initialState = {
  counter: 10,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_DECREMENT_ACTION:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_INCREMENT_ACTION:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_ADD_VALUE_ACTION:
      return { ...state, counter: state.counter + payload };
    default:
      return state;
  }
};

export { reducer, initialState };