// actionCreator
const actionCreator = (type, payload) => {
  let action = { type };
  if (payload) action.payload = payload;
  return action;
};

export { actionCreator };