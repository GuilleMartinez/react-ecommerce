import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useGeneralDataContext } from "../../context/GeneralContext";
import { useParams } from "react-router";
import WithLoader from "../HOC/WithLoader";
import getFromFirebase from "../../scripts/firebaseConfig";

const ItemDetailContainer = WithLoader(({ visibility }) => {

  const { productName } = useParams();

  const [product, setProduct] = useState({ attributes: {} });

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getProductById = () => {
    const onResponse = (response) => {
      const [productFiltered] = response;
      setProduct({ attributes: productFiltered });
    };

    const onFinally = () => {
     console.log("Filtered Product Loaded");
      hideLoader();
    };

    showLoader();
    getFromFirebase("products", onResponse, onFinally, true, { attr: "title", compare: "==", value: productName });
  };

  useEffect(getProductById, [productName, showLoader, hideLoader]);

  return (
    <div className={`section ${visibility}`}>
      <ItemDetail item={product.attributes} />
    </div>
  );
});

export default ItemDetailContainer;
