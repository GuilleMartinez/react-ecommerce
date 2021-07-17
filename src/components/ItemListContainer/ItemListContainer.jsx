import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";
import { fetchWithDetaly } from "../../scripts/fetchWithDelay";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const { id } = useParams();

  const [data, setData] = useState({
    items: [],
    isLoading: true,
  });

  const requestData = () => {
    fetchWithDetaly("/JSON/products.json", 2000, function updateState(json) {
      const products = id ? json.filter(product => product.category === +id) : json;
      setData({items: products, isLoading: false});
    });
  };

  useEffect(requestData, [id]);

  return (
    <div className="section">
      {data.isLoading ? <Loader /> : <ItemList items={data.items} />}
    </div>
  );
};

export default ItemListContainer;
