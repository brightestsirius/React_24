import React, {useState} from "react";

import List from "./components/List/List";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import ListStatistics from './components/ListStatistics/ListStatistics'
import ListForm from './components/ListForm/ListForm'

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function App() {
  const [color, setColor] = useState();
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState({});

  return (
    <Container>
      <Paper elevation={3} sx={{p: 2}}>
        <ColorPicker liftingColor={setColor} />
        <ListForm liftingTodo={setTodo} />
        <ListStatistics list={list} />
        <List color={color} liftingList={setList} todo={todo} />
      </Paper>
    </Container>
  );
}
