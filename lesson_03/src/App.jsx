import React, { useEffect, useState } from "react";

import List from "./components/List/List";
import Filter from "./components/Filter/Filter";

export default function App() {
  const [showList, setShowList] = useState(true);
  const [filter, setFilter] = useState();

  useEffect(() => {
    setTimeout(() => {
      //setShowList(false);
    }, 2000);
  }, []);

  return (
    <>
      <Filter liftingFilter={setFilter} />
      {showList && <List filter={filter} />}
    </>
  );
}
