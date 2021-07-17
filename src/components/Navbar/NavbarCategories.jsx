import React from "react";
import { NavLink } from "react-router-dom";
const NavbarCategories = ({ categories }) => {
  return (
    <ul className="navbar-start">
      {categories.map((category) => (
        <li key={category.id} className="navbar-item">
          <NavLink to={`/category/${category.id}`} className="has-text-white">
            {category.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarCategories;
