import React from "react";

const Cart = ({ items, itemsCount, total }) => {
  const generateRow = (item) => {
    return (
      <tr key={item.product.id}>
        <td>{item.product.title}</td>
        <td>{item.quantity}</td>
        <td>{item.product.price}</td>
        <td>${item.quantity * item.product.price}</td>
      </tr>
    );
  };

  return (
    <div className="container is-max-desktop p-4">
      <div className="box">
        <div className="is-flex is-align-items-center is-justify-content-space-between mb-3">
          <p className="is-size-3 p-1 has-text-weight-bold">Your cart</p>
          <p className="is-size-4 p-1">
            {`${itemsCount} ${itemsCount > 1 ? "items" : "item"}`}
          </p>
        </div>

        <table className="table is-fullwidth has-text-centered is-hoverable">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Subtotal</th>
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

export default Cart;
