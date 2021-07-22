import React from "react";
import cartEmpty from "../../assets/empty-cart.svg";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="container has-text-centered">
      <h2 className="title">Your cart is empty</h2>
      <Link to="/">
        <button role="link" className="button is-link is-light">Back to products</button>
      </Link>
      <figure>
        <img className="mx-auto image" src={cartEmpty} alt="" />
      </figure>
    </div>
  );
};

export default CartEmpty;
