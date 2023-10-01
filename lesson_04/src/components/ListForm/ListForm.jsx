import React, { useState, useRef } from "react";
import "./style.sass";

import service from "./../../services/todos";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';

export default function ListForm({ liftingTodo }) {
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: true,
  });

  const inputTitle = useRef();

  const handleTitle = (event) =>
    setNewTodo((actualState) => ({
      ...actualState,
      title: event.target.value,
    }));

  const handleCompleted = (event) =>
    setNewTodo((actualState) => ({
      ...actualState,
      completed: event.target.checked,
    }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    inputTitle.current.classList.contains(`error`) &&
      inputTitle.current.classList.remove(`error`);

    if (!newTodo.title) {
      console.log(`Title shouldn't be empty`);
      inputTitle.current.classList.add(`error`);
      return;
    }

    let addedTodo = await service.post(newTodo);
    liftingTodo(addedTodo);
  };

  return (
    <Paper>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          m: 2,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Title"
          variant="outlined"
          value={newTodo.title}
          onChange={handleTitle}
          ref={inputTitle}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={newTodo.completed}
              onChange={handleCompleted}
            />
          }
          label="Completed"
        />
        <Button type="submit" variant="contained">Add item</Button>
      </Box>
    </Paper>
  );
}
