import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import PostsRoute from "./routes/PostsRoute";
import PostRoute from "./routes/PostRoute";
import CommentsRoute from "./routes/CommentsRoute"
import ErrorRoute from "./routes/ErrorRoute";

import Layout from './pages/Layout/Layout'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeRoute />,
        },
        {
          path: "posts",
          element: <PostsRoute />,
        },
        {
          path: "posts/:id",
          element: <PostRoute />,
        },
        {
          path: "comments",
          element: <CommentsRoute />,
        },
        {
          path: "*",
          element: <ErrorRoute />,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />

    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<HomeRoute />}></Route>
    //         <Route path="posts" element={<PostsRoute />}></Route>
    //         <Route path="posts/:id" element={<PostRoute />}></Route>
    //         <Route path="comments" element={<CommentsRoute />}></Route>
    //         <Route path="*" element={<ErrorRoute />}></Route>
    //       </Route>
    //     </Routes>
    // </BrowserRouter>
  );
}
