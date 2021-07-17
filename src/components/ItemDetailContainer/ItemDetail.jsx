import React from "react";

const ItemDetail = ({imgURL, title, price, stock, description, children}) => {
  return (
    <article className="card is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center p-3">

      <header className="card-header">
        <figure className="card-image">
          <img  className="image" src={imgURL} alt="" />
        </figure>
      </header>

      <section className="card-content">
        <h2 className="has-text-centered-mobile subtitle mb-1 is-size-3-mobile is-size-4-desktop mb-3">{title}</h2>
        <p className="has-text-centered-mobile"><small className="tag is-info is-light mb-3">Stock available: {stock}</small></p>
        <p className="mb-3">{description}</p>
        <p className="has-text-centered-mobile mb-3"><b className="is-size-4-mobile is-size-5-desktop"> ${price} </b></p>
        <div className="has-text-centered-mobile">
            <div className="mb-3 is-inline-flex">{children}</div>
            <div><button type="button" title="Add to cart" className="button is-dark">Add to cart</button> </div>
        </div>
      </section>

    </article>
  );
}

export default ItemDetail;