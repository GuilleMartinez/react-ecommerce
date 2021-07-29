import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavbarStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import NavbarCategories from "./NavbarCategories";

import getFromFirebase from "../../scripts/firebaseConfig";

const Navbar = () => {
  const [categories, setCategories] = useState(null);

  const requestCategories = () => {
    const onResponse = response => setCategories(response);
    const onFinally = console.log("Categories Loaded");
    getFromFirebase("categories", onResponse, onFinally)
  };

  useEffect(requestCategories, []);

  return (
    <nav className="navbar is-dark" role="navigation" aria-describedby="main navigation">
      
      <div className="navbar-brand">
        <Link to="/">
          <WebsiteLogo />
        </Link>
      </div>

      <div className="navbar-menu is-active has-background-grey-darker">
        
        <ul className="navbar-start">
          {categories && <NavbarCategories categories={categories} />}
        </ul>

        <ul className="navbar-end">
          <li className="navbar-item">
            <Link to="/cart">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
