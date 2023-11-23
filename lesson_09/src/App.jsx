import React from "react";

import Todos from "./components/Todos/Todos";
import Favourite from "./components/Favourite/Favourite";
import User from "./components/User/User";
import Posts from "./components/Posts/Posts";
import FormPost from "./components/FormPost/FormPost";

export default function App() {
  return (
    <>
      <Favourite />
      <Todos />
      <User />
      <Posts />
      <FormPost />
    </>
  );
}
