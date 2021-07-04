import React from "react";
import "./NavbarStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-describedby="main navigation"
    >
      <div className="navbar-brand">
        <WebsiteLogo />
      </div>

      <div className="navbar-menu is-active">
        <ul className="navbar-start">
          <li className="navbar-item">Category 1</li>
          <li className="navbar-item">Category 2</li>
          <li className="navbar-item">Category 3</li>
        </ul>

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
