import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartTable = () => {
  const { cart, getItemsCount, calculateTotal, removeItem, clearCart } = useCartContext();
  
   const removeFromCart = (event) => {
    const productID = event.target.value;
    removeItem(productID);
  };


  const generateRow = (item) => {
    return (
      <tr key={item.product.id}>
        <td>{item.product.title}</td>
        <td>{item.quantity}</td>
        <td>${item.product.price}</td>
        <td>${item.quantity * item.product.price}</td>
        <td>
          <button
            className="button is-danger is-light mx-2"
            value={item.product.id}
            title="Delete order"
            onClick={removeFromCart}
          >
            Delete
          </button>
          <Link to={`/product/${item.product.title}`}>
            <button
              role="link"
              className="button is-warning is-light"
              title="Edit order"
            >
              Edit
            </button>
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="box">
      <div className="is-flex is-align-items-center is-justify-content-space-between mb-3">
        <p className="is-size-3 p-1 has-text-weight-bold">Your cart</p>
        <p className="is-size-4 p-1">
          {`${getItemsCount()} ${getItemsCount() > 1 ? "items" : "item"}`}
        </p>
      </div>

      <div className="table-container">
        <table className="table is-fullwidth has-text-centered is-hoverable is-striped">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{cart.map((item) => generateRow(item))}</tbody>

          <tfoot>
            <tr className="has-text-center is-size-5">
              <td colSpan="5">Total: ${calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>

        <button
          type="button"
          className="button is-danger is-light"
          title="Clear cart"
          onClick={clearCart}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default CartTable;
