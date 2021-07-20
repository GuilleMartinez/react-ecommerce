import React, { useEffect, useState } from "react";
import { fetchWithDelay } from "../../scripts/fetchWithDelay";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    attributes: null,
    isLoading: true,
  });

  const requestProduct = () => {
    fetchWithDelay("/JSON/products.json", 700, function getProduct(json) {
      const product = json.find((product) => product.id === +id);
      setProduct({ attributes: product, isLoading: false });
    });
  };

  useEffect(requestProduct, [id]);

  return (
    <div className="section">
      {product.isLoading
        ? <Loader />
        : <ItemDetail item={product.attributes} />
      }
    </div>
  );
};

export default ItemDetailContainer;
