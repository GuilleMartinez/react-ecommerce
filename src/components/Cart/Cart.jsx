import React, { useEffect } from "react";

import "./Cart.css";
import Loader from "../Loader/Loader";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";

const Cart = () => {
  const { isLoading, setLoading } = useGeneralDataContext();
  const { hasItemsInCart } = useCartContext();

  const delayLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
  };

  useEffect(delayLoad, [setLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container is-max-desktop p-4">
          {hasItemsInCart() ? <CartTable /> : <CartEmpty />}
        </div>
      )}
    </>
  );
};

export default Cart;
