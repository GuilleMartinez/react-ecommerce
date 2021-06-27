import React from "react";
import logo from "../../assets/logo.svg";
import "./NavbarStyle.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-describedby="main navigation"
    >
      <div className="navbar-brand">
        
          <figure className="logo-container">
             <img src={logo} alt="Logo" className="navbar-logo" />
             <figcaption>E-commerce</figcaption>
          </figure>

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
