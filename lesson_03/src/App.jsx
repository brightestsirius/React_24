import React, { useState, useEffect } from "react";

import List from "./components/List/List";

export default function App() {
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowList(false);
    } , 2000)
  }, [])

  return <>{showList && <List />}</>;
}
