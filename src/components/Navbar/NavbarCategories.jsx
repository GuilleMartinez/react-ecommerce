import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCategories = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <li key={category.id} className="navbar-item is-hoverable">
          <NavLink
            to={`/category/${category.title}`}
            className="navbar-link is-arrowless has-text-white"
            activeClassName="has-background-black-ter"
          >
            {category.title}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavbarCategories;
