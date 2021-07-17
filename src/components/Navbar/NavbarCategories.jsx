import React from "react";
import { Link } from "react-router-dom";
const NavbarCategories = ({ categories }) => {

  return (
    <ul className="navbar-start">
      {categories.map((category) => <li key={category.id} className="navbar-item has-text-white">
        <Link to={`/category/${category.id}`}><span className="has-text-white">{category.title}</span></Link>
      </li>)}
    </ul>
  );
};

export default NavbarCategories;
