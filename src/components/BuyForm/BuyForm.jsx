import React from "react";
import WithNotification from "../HOC/WithNotification";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { createOrder, updateProductsStock } from "../../scripts/firebaseConfig";
import "./BuyForm.css";

const BuyForm = WithNotification(() => {
  const { cart, clearCart, calculateTotal, updateCart } = useCartContext();
  const { createNotification } = useGeneralDataContext();

  const submitHandler = (event) => {
    event.preventDefault();

    const createErrorNotification = (items) => {
      createNotification(
        "Error on submit your order 😱",
        "Some of your products are out of stock. Your cart has been updated",
        "danger",
        () => updateCart(items)
      );
    };

    const submitOrder = (target) => {
      const orderInformation = {
        buyer: {
          name: target.fullname.value,
          email: target.email.value,
          telephone: target.telephone.value,
        },
        items: cart.map(({ product: { id, title, price }, quantity }) => ({
          id,
          title,
          price,
          quantity,
        })),
        date: new Date().toLocaleString(),
        total: calculateTotal(),
      };

      const createSuccessNotification = (orderId) => {
        createNotification(
          "Thanks for your purchase! 😊",
          `Your order has been submited. Transaction id: ${orderId}.`,
          "success",
          clearCart
        );
      };

      createOrder(orderInformation, createSuccessNotification);
    };

    updateProductsStock(cart).then((reponse) => {
      if (reponse.hasErrorOnSubmit) createErrorNotification(reponse.items);
      else submitOrder(event.target);
    });
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor="fullname" className="label">
            Fullname
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="fullname"
              id="fullname"
              pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+"
              placeholder="Insert your name"
              minLength="3"
              required
            />
            <p className="help is-link">
              Your name must contain only characters
            </p>
          </div>
        </div>

        <div className="field">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="example@email.com"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="telephone" className="label">
            Telephone
          </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            className="input"
            pattern="^\d+\s{1}\d{3}-\d{4}$"
            placeholder="123 456-7890"
            required
          />
          <p className="help">
            3-digit area code and phone number separate by hyphen
          </p>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-success">
              Finish Buy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default BuyForm;
