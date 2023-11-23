import React from "react";

import Favourites from "./components/Favourites/Favourites";
import Todos from "./components/Todos/Todos";
import User from "./components/User/User";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

export default function App() {
  return (
    <>
      <Favourites />
      <Todos />
      <User />
      <Posts />
      <Post />
    </>
  );
}
