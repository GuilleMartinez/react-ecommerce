import React, { useEffect, useState } from "react";
import { fetchWithDetaly } from "../../scripts/fetchWithDelay";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

import { useParams } from "react-router";

const ItemDetailContainer = () => {
  
  const { id } = useParams();

  const [product, setProduct] = useState({
    attributes: null,
    isLoading: true,
  });

  const requestData = () => {
    fetchWithDetaly("/JSON/products.json", 700, function getProduct(json) {
      const product = json.find((product) => product.id === +id);
      setProduct({ attributes: product, isLoading: false });
    });
  };

  useEffect(requestData, [id]);

  return (
    <div className="section">
      {product.isLoading ? <Loader /> : <ItemDetail {...product.attributes} />}
    </div>
  );
};

export default ItemDetailContainer;
