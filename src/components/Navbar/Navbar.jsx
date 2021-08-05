import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import NavbarCategories from "./NavbarCategories";
import { requestCategories } from "../../scripts/firebaseConfig";
import "./NavbarStyle.css";

const Navbar = () => {
  const [categories, setCategories] = useState(null);
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => setNavbarActive(!navbarActive);

  const getCategories = () => {
    const onResponse = (response) => setCategories(response);
    requestCategories(onResponse);
  };

  useEffect(getCategories, []);

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-describedby="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <Link to="/">
          <WebsiteLogo />
        </Link>

        <button
          className={`navbar-burger ${navbarActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        className={`navbar-menu ${
          navbarActive ? "is-active" : ""
        } has-background-grey-darker`}
      >
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
