import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";
import { fetchWithDelay } from "../../scripts/fetchWithDelay";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    items: [],
    isLoading: true,
  });

  const requestProducts = () => {
    fetchWithDelay("/JSON/products.json", 700, function updateState(json) {
      const products = id
        ? json.filter((product) => product.category === +id)
        : json;
      setData({ items: products, isLoading: false });
    });
  };

  useEffect(requestProducts, [id]);

  return (
    <div className="section">
      {data.isLoading
        ? <Loader />
        : <ItemList items={data.items} />
      }
    </div>
  );
};

export default ItemListContainer;
