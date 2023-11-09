const { COUNTER_INC, COUNTER_DEC, COUNTER_SET } = require(`./actions`);

const INITIAL_STATE = {
  counter: 0,
  color: `green`,
  list: []
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === COUNTER_INC)
    return { ...state, counter: state.counter + 1 };
  if (action.type === COUNTER_DEC)
    return { ...state, counter: state.counter - 1 };
  if (action.type === COUNTER_SET) return { ...state, counter: action.payload };
  return state;
};

module.exports = { reducer };
