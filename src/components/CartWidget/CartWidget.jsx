import React from "react";
import cartLogo from "../../assets/shopping-cart.svg";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getItemsCount } = useCartContext();

  return (
    <div className=" is-relative block is-flex is-aling-items-center">
      <img className="mr-1" title="Cart" src={cartLogo} alt="Cart" />
      <small className="tag is-small is-info is-light">{getItemsCount()}</small>
    </div>
  );
};

export default CartWidget;
