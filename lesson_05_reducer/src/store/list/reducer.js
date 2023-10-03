import { LIST_ITEM_DELETE_ACTION, LIST_ITEM_CHANGE_ACTION } from "./actions";

const initialState = {
  list: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: true,
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_ITEM_DELETE_ACTION:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };
    case LIST_ITEM_CHANGE_ACTION:
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

export { initialState, reducer };
