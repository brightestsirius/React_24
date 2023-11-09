const { COUNTER_INC, COUNTER_DEC, COUNTER_SET } = require(`./actions`);

const INITIAL_STATE = {
  counter: 0,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COUNTER_INC:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_DEC:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_SET:
      return { ...state, counter: payload };
    default:
      return state;
  }
};

module.exports = { reducer };
