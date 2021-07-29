import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCategories = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <li key={category.id} className="navbar-item">
          <NavLink to={`/category/${category.title}`} className="has-text-white">
            {category.title}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavbarCategories;
