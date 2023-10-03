// action types
const LIST_ITEM_DELETE_ACTION = `LIST_ITEM_DELETE_ACTION`;
const LIST_ITEM_CHANGE_ACTION = `LIST_ITEM_CHANGE_ACTION`;

// action creator
const actionCreator = (type, payload) => {
  let action = { type };
  if (payload) action.payload = payload;

  return action;
};

const listItemDeleteAction = (payload) =>
  actionCreator(LIST_ITEM_DELETE_ACTION, payload);
const listItemChangeAction = (payload) =>
  actionCreator(LIST_ITEM_CHANGE_ACTION, payload);

export { LIST_ITEM_DELETE_ACTION, LIST_ITEM_CHANGE_ACTION };

export { listItemDeleteAction, listItemChangeAction };
