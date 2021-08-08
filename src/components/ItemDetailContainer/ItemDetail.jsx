import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const updateCount = (event) => setCount(count + +event.target.value);

  const [hasFinish, setFinish] = useState(false);
  const updateFinish = () => setFinish(!hasFinish);

  const { addItem } = useCartContext();
  const clickHandler = () => {
    const newItem = { product: { ...item }, quantity: count };
    addItem(newItem);
  };

  return (
    <article className="card is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center p-3">
      <header className="card-header">
        <figure className="card-image">
          <img className="image" src={item.imgURL} alt="" />
        </figure>
      </header>

      <section className="card-content">
        <h2 className="has-text-centered-mobile subtitle mb-1 is-size-3-mobile is-size-4-desktop mb-3">
          {item.title}
        </h2>
        <p className="has-text-centered-mobile">
          <small className="tag is-info is-light mb-3">
            Stock available: {item.stock}
          </small>
        </p>
        <p className="mb-3">{item.description}</p>
        <p className="has-text-centered-mobile mb-3">
          <b className="is-size-4-mobile is-size-5-desktop"> ${item.price} </b>
        </p>
        <div className="has-text-centered-mobile">
          <div className="block mb-3">
            {hasFinish ? (
              <Link to="/cart">
                <button
                  type="button"
                  role="link"
                  className="button is-dark"
                  title="Add to cart"
                  onClick={clickHandler}
                >
                  Add to cart
                </button>
              </Link>
            ) : (
              <ItemCount count={count} stock={item.stock} onAdd={updateCount} />
            )}
          </div>

          <div className="block">
            <button
              type="button"
              className={`button ${
                hasFinish ? "is-warning" : "is-success"
              } is-light`}
              onClick={updateFinish}
              title={hasFinish ? "Update your order" : "Confirm your order"}
            >
              {hasFinish ? "Update your order" : "Confirm your order"}
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ItemDetail;
