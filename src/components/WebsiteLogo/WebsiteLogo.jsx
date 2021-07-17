import React from "react";
import logo from "../../assets/logo.svg";

const WebsiteLogo = () => {
  return (
    <figure className="logo-container">
      <img src={logo} alt="Website Logo" className="navbar-logo" />
      <figcaption className="has-text-white">E-Commerce</figcaption>
    </figure>
  );
};

export default WebsiteLogo;
