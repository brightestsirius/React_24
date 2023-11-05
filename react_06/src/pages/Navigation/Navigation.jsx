import React from "react";
import { NavLink } from "react-router-dom";

import { navStyle } from "./../../utils/style";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink style={(obj) => navStyle(obj)} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={(obj) => navStyle(obj)} to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
