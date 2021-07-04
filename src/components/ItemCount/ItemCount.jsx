import React, { Fragment } from "react";

const ItemCount = ({ stock, count, onAdd }) => {
  return (
    <Fragment>
      <button
        className="level-item button is-info is-normal m-0"
        type="button"
        value={1}
        disabled={count >= stock}
        onClick={onAdd}
        title="Increment count"
      >
        +
      </button>
      <small className="level-item tag is-white is-large m-0">{count}</small>
      <button
        className="level-item button is-info is-normal m-0"
        type="button"
        value={-1}
        disabled={count <= 0}
        onClick={onAdd}
        title="Decrement Count"
      >
        -
      </button>
    </Fragment>
  );
};

export default ItemCount;
