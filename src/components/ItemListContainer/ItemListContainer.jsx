import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";
import { fetchWithDetaly } from "../../scripts/fetchWithDelay";

const ItemListContainer = () => {

  const [data, setData] = useState({
    items: [],
    isLoading: true,
  });

  const requestData = () => {
    fetchWithDetaly("/products.json", 2000, function updateState(json) {
      setData({items: json, isLoading: false})
    });
  };

  useEffect(requestData, []);

  return (
    <div className="box">
      {data.isLoading ? <Loader /> : <ItemList items={data.items} />}
    </div>
  );
};

export default ItemListContainer;
