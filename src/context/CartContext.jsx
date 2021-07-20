import React, { useState, createContext, useContext } from "react";

const CartItemsContext = createContext();

const useCartContext = () => useContext(CartItemsContext);

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItem(newItem) {
    if (isInCart(newItem.product.id)) {
      updateItem(newItem);
    } else {
      setCart([...cart, newItem]);
    }
  }

  function updateItem(newItem) {
    const cartCopy = cart.slice();
    const index = cartCopy.findIndex(
      (item) => item.product.id === newItem.product.id
    );
    if (cartCopy[index].quantity !== newItem.quantity) {
      cartCopy.splice(index, 1, newItem);
      setCart([...cartCopy]);
    }
  }

  function isInCart(id) {
    return cart.some((item) => item.product.id === id);
  }

  function clearCart() {
    setCart([]);
  }

  function calculateTotal() {
    return cart.reduce(
      (current, item) => current + item.product.price * item.quantity,
      0
    );
  }

  function getItemsCount() {
    return cart.length;
  }

  return (
    <CartItemsContext.Provider
      value={{
        cart,
        addItem,
        getItemsCount,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartContext;
export { CartItemsContext, useCartContext };
