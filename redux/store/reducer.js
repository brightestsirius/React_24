const {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_SET,
} = require("./actions");

const INITIAL_STATE = {
  counter: 0,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_SET:
      return { ...state, counter: state.counter + payload };
    default:
      return state;
  }
};

module.exports = { reducer };
