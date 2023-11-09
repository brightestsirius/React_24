import React from "react";
import { NavLink } from "react-router-dom";

import "./style.sass";

export default function Navigation() {
  const nav = [
    {
      name: `Home`,
      to: "/",
    },
    {
      name: `Posts`,
      to: "posts",
    },
  ];

  const getClassNames = (obj) => {
    let classes = [`nav__link`];
    if (obj.isActive) classes.push(`nav__link--active`);
    return classes.join(` `);
  };

  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <NavLink className={getClassNames} to={item.to}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
