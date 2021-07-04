import React from "react";
import logo from "../../assets/logo.svg";

const WebsiteLogo = () => {
  return (
    <figure className="logo-container">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <figcaption>E-Commerce</figcaption>
    </figure>
  );
};

export default WebsiteLogo;
