import React from "react";
import { Link } from "react-router-dom";

const CartTable = ({ items, itemsCount, total, deleteHandler }) => {
  const generateRow = (item) => {
    return (
      <tr key={item.product.id}>
        <td>{item.product.title}</td>
        <td>{item.quantity}</td>
        <td>{item.product.price}</td>
        <td>${item.quantity * item.product.price}</td>
        <td>
            <button className="button is-danger is-light mx-2" value={item.product.id} title="Remove order" aria-label="Remove order" onClick={deleteHandler}>❌</button>
            <Link to={`/product/${item.product.id}`}>
              <button role="link" className="button is-warning is-light" title="Edit order" aria-label="Edit order">📝</button>
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
          {`${itemsCount} ${itemsCount > 1 ? "items" : "item"}`}
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

        <tbody>{items.map((item) => generateRow(item))}</tbody>

        <tfoot>
          <tr className="has-text-center is-size-5">
            <td colSpan="5">Total: ${total}</td>
          </tr>
        </tfoot>
        </table>
        </div>
    </div>
  );
};

export default CartTable;
