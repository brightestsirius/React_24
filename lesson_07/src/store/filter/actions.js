// action types
const SET_FILTER = `SET_FILTER`;

// actionCreator
const actionCreator = (type, payload) => {
  let action = { type };
  if (payload) action.payload = payload;
  return action;
};

// actions
const setFilterAction = (payload) => actionCreator(SET_FILTER, payload);

export { SET_FILTER };
export { setFilterAction };
