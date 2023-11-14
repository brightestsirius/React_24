import { LIST_FILTER_ALL } from "./../../constants/list";
import { SET_FILTER } from "./actions";

const INITIAL_STATE = {
  filter: LIST_FILTER_ALL,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default reducer;
