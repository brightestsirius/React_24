import React, { useContext, memo } from "react";

import ListStatisticsColor from "../../contexts/ListStatisticsColor";

export default memo(function Statistics() {
  const { list } = useContext(ListStatisticsColor);

  return <p>All: {list.length}</p>;
})