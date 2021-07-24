import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

import { fetchWithDelay } from "../../scripts/fetchWithDelay";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  
  const { id: productId } = useParams();

  const [product, setProduct] = useState({ attributes: {} });
  const { isLoading, setLoading } = useGeneralDataContext();

  const getProductById = () => {
    setLoading(true);
    fetchWithDelay("/JSON/products.json", 700, function getProducts(json) {
      setProduct({
        attributes: json.find((item) => item.id === +productId),
      });
      setLoading(false);
    });
  };

  useEffect(getProductById, [productId, setLoading]);

  return (
    <div className="section">
      {isLoading ? <Loader /> : <ItemDetail item={product.attributes} />}
    </div>
  );
};

export default ItemDetailContainer;
