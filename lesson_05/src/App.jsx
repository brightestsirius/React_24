import React, {} from "react";

import List from "./components/List/List";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Statistics from "./components/Statistics/Statistics";

import ListTheme from './providers/ListTheme'

export default function App() {

  return (
    <ListTheme>
      <ColorPicker />
      <Statistics />
      <List />
    </ListTheme>
  );
}