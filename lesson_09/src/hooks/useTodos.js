import { useSelector } from "react-redux";

const useTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const favourites = useSelector((state) => state.todos.favourites);

  return { todos, favourites };
};

export default useTodos;
