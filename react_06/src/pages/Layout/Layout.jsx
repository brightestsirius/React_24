import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./../Header/Header";
import Navigation from "./../Navigation/Navigation";

import HomeRoute from "./../../routes/HomeRoute";
import PostsRoute from "./../../routes/PostsRoute";
import PostRoute from "./../../routes/PostRoute";
import CommentsRoute from "./../../routes/CommentsRoute";
import PageNotFound from "./../../routes/PageNotFound";

import Main from "./../Main/Main";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomeRoute />}></Route>
          <Route path="posts" element={<PostsRoute />}></Route>
          <Route path="posts/:id" element={<PostRoute />}></Route>
          <Route path="comments" element={<CommentsRoute />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
