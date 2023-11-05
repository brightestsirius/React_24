// action creator
const actionCreator = (type, payload) => {
  let action = { type };
  if (payload) action.payload = payload;
  return action;
};

// action types
const COUNTER_INCREMENT = `COUNTER_INCREMENT`;
const COUNTER_DECREMENT = `COUNTER_DECREMENT`;
const COUNTER_SET = `COUNTER_SET`;

// actions
const counterIncrementAction = actionCreator(COUNTER_INCREMENT);
const counterDecrementAction = actionCreator(COUNTER_DECREMENT);
const counterSetAction = (payload) => actionCreator(COUNTER_SET, payload);

module.exports = {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_SET,
  counterIncrementAction,
  counterDecrementAction,
  counterSetAction,
};
