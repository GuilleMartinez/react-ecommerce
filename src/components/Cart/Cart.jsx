import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, getItemsCount, hasItemsInCart, calculateTotal, removeItem } = useCartContext();

  const [loading, setLoading] = useState(true);

  const removeFromCart = (event) => {
    const productID = +event.target.value;
    removeItem(productID);
  }

  useEffect(function delayLoad() {
    setTimeout(() => setLoading(false), 700);
  }, []);

  return (
    <>
      {loading
        ? <Loader />
        : <div className="container is-max-desktop p-4">
            {hasItemsInCart()
              ? <CartTable items={cart} itemsCount={getItemsCount()} total={calculateTotal()} deleteHandler={removeFromCart} />
              : <CartEmpty />
            }
         </div>
      }
    </>
  );
};

export default Cart;
