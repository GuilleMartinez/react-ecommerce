import React from "react";
import cartLogo from "../../assets/cart-logo.png"

const CartWidget = () => {
  return (
      <img className="image" title="Cart" src={cartLogo} alt="Cart" />
  );
};

export default CartWidget;
