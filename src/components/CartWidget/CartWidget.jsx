import React from "react";
import cartLogo from "../../assets/shopping-cart.svg"

const CartWidget = () => {
  return (
      <img className="image" title="Cart" src={cartLogo} alt="Cart" />
  );
};

export default CartWidget;
