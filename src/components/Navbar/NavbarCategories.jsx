import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCategories = ({ categories }) => {
  return (
    <>
      {categories.map(({ id, title }) => (
        <li key={id} className="navbar-item is-hoverable">
          <NavLink
            to={`/category/${title}`}
            className="navbar-link is-arrowless has-text-white"
            activeClassName="has-background-black-ter"
          >
            {title}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavbarCategories;
