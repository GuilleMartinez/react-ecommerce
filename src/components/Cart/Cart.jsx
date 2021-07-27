import React, { useEffect } from "react";

import "./Cart.css";

import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";
import WithLoader from "../WithLoader/WithLoader";

const Cart = WithLoader(({ visibility }) => {
  const { showLoader, hideLoader } = useGeneralDataContext();
  const { hasItemsInCart } = useCartContext();

  const delayLoad = () => {
    showLoader();
    setTimeout(() => hideLoader(hideLoader()), 700);
  };

  useEffect(delayLoad, [showLoader, hideLoader]);

  return (
    <div className={`container is-max-desktop p-4 ${visibility}`}>
      {hasItemsInCart() ? <CartTable /> : <CartEmpty />}
    </div>
  );
});

export default Cart;
