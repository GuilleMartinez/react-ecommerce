import React, { useEffect } from "react";
import Loader from "../Loader/Loader";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";

const Cart = () => {
  const { cart, getItemsCount, hasItemsInCart, calculateTotal, removeItem } =
    useCartContext();
  const { isLoading, setLoading } = useGeneralDataContext();

  const removeFromCart = (event) => {
    const productID = +event.target.value;
    removeItem(productID);
  };

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
          {hasItemsInCart() ? (
            <CartTable
              items={cart}
              itemsCount={getItemsCount()}
              total={calculateTotal()}
              deleteHandler={removeFromCart}
            />
          ) : (
            <CartEmpty />
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
