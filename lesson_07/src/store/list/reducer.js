import { ITEM_CHANGE, SET_LIST } from "./actions";

const INITIAL_STATE = {
  list: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_LIST:
      return { ...state, list: payload };
    case ITEM_CHANGE:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === payload.id) item = payload;
          return item;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
