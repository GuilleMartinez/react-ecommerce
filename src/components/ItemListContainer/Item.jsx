import React from "react";

const Item = ({ title, price, imgURL, stock, children }) => {
  return (
    <article className="card has-text-centered">
      
      <header className="card-header is-flex is-justify-content-center">
        <figure className="card-image p-1">
          <img className="image" src={imgURL} alt={title} />
        </figure>
      </header>

      <section className="card-content">
        <h2 className="subtitle mb-1 is-size-3-mobile is-size-4-desktop">{title}</h2>
        <b className="is-block mb-1 is-size-4-mobile is-size-5-desktop"> ${price} </b>
        <small className="tag is-info is-light">In stock: {stock}</small>
      </section>

      <footer className="card-footer is-flex-direction-column is-align-items-center pb-2">
        {children ? children : ""}
        <button className="button" type="button" title="Add to cart">
          Add to cart
        </button>
      </footer>

    </article>
  );
};

export default Item;
