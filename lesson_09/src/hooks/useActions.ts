import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actions } from "../store/todos/todos.slice";
import { thunks as user } from "../store/user/user.thunks";

const rootActions = {
  ...actions,
  ...user,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
