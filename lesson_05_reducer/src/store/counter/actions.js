// action types
const COUNTER_DECREMENT_ACTION = `COUNTER_DECREMENT_ACTION`;
const COUNTER_INCREMENT_ACTION = `COUNTER_INCREMENT_ACTION`;
const COUNTER_ADD_VALUE_ACTION = `COUNTER_ADD_VALUE_ACTION`;

// action creator
const actionCreator = (type, payload) => {
  let action = { type };
  if (payload) action.payload = payload;

  return action;
};

// actions
const counterDecerementAction = actionCreator(COUNTER_DECREMENT_ACTION);
const counterIncerementAction = actionCreator(COUNTER_INCREMENT_ACTION);
const counterAddValueAction = (payload) =>
  actionCreator(COUNTER_ADD_VALUE_ACTION, payload);

export {
  COUNTER_DECREMENT_ACTION,
  COUNTER_INCREMENT_ACTION,
  COUNTER_ADD_VALUE_ACTION,
};

export {
  counterDecerementAction,
  counterIncerementAction,
  counterAddValueAction,
};
