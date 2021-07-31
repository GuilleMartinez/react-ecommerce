import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  const generateItem = (item) => {
    return (
      <div
        key={item.id}
        className="column is-narrow is-flex is-justify-content-center"
      >
        <Item {...item} />
      </div>
    );
  };

  return (
    <div className="columns is-multiline is-centered">
      {items.map(generateItem)}
    </div>
  );
};

export default ItemList;
