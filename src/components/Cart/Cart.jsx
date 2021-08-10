import React, { useEffect } from "react";
import WithLoader from "../HOC/WithLoader";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import BuyFormContainer from "../BuyForm/BuyFormContainer";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";
import "./Cart.css";

const Cart = WithLoader(({ visibility }) => {
  const { showLoader, hideLoader } = useGeneralDataContext();
  const { hasItemsInCart } = useCartContext();

  const delayLoad = () => {
    showLoader();
    setTimeout(() => hideLoader(), 700);
  };

  useEffect(delayLoad, [showLoader, hideLoader]);

  return (
    <div className={`container is-max-desktop p-4 ${visibility}`}>
      {hasItemsInCart() ? (
        <>
          <CartTable />
          <BuyFormContainer />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
});

export default Cart;
