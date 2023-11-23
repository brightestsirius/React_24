import { useSelector } from "react-redux";

const useFavourite = () => {
  const favourites = useSelector((state) => state.todos.favourites);
  return favourites;
};

export default useFavourite;
