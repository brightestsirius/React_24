import { LIST_ITEM_CHANGE, SET_LIST } from "./actions";

const initialState = {
  list: [],
  color: `green`,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST:
      return { ...state, list: payload };
    case LIST_ITEM_CHANGE:
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
