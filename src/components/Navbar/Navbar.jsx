import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchWithDetaly } from "../../scripts/fetchWithDelay";

import "./NavbarStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import NavbarCategories from "./NavbarCategories";




const Navbar = () => {

  const [categories, setCategories] = useState(null);

  const requestCategories = () => {
    fetchWithDetaly("/JSON/categories.json", 0, function updateCategories(json) {
      setCategories(json);
      })
  }

  useEffect(requestCategories, []);

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-describedby="main navigation"
    >
      <div className="navbar-brand">
       <Link to="/" > <WebsiteLogo /> </Link>
      </div>

      <div className="navbar-menu is-active">
       { categories && <NavbarCategories categories={categories} /> }

        <ul className="navbar-end">
          <li className="navbar-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
