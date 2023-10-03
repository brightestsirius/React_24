import ListStatisticsColor from "../contexts/ListStatisticsColor";

import useList from "./../hooks/useList";
import useColor from "./../hooks/useColor";

const ListTheme = (props) => {
  const value = Object.assign({}, useColor(), useList());

  return (
    <ListStatisticsColor.Provider value={value}>
      {props.children}
    </ListStatisticsColor.Provider>
  );
};

export default ListTheme;
