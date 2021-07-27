import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { fetchWithDelay } from "../../scripts/fetchWithDelay";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { useParams } from "react-router";
import WithLoader from "../HOC/WithLoader";

const ItemDetailContainer = WithLoader(({ visibility }) => {
  const { id: productId } = useParams();

  const [product, setProduct] = useState({ attributes: {} });

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getProductById = () => {
    showLoader();
    fetchWithDelay("/JSON/products.json", 700, function getProducts(json) {
      setProduct({
        attributes: json.find((item) => item.id === +productId),
      });
      hideLoader();
    });
  };

  useEffect(getProductById, [productId, showLoader, hideLoader]);

  return (
    <div className={`section ${visibility}`}>
      <ItemDetail item={product.attributes} />
    </div>
  );
});

export default ItemDetailContainer;
