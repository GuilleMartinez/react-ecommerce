import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Cart from "./Cart";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, getItemsCount, calculateTotal } = useCartContext();

  const [loading, setLoading] = useState(true);

  useEffect(function delayLoad() {
    setTimeout(() => setLoading(false), 700);
  }, []);

  return (
    <>
      {loading
        ? <Loader />
        : <Cart items={cart} itemsCount={getItemsCount()} total={calculateTotal()} />
      }
    </>
  );
};

export default CartContainer;
