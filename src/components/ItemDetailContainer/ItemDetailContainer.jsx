import React, { useEffect, useState } from "react";
import WithLoader from "../HOC/WithLoader";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { requestProduct } from "../../scripts/firebaseConfig";

const ItemDetailContainer = WithLoader(({ visibility }) => {
  const { productID } = useParams();

  const [product, setProduct] = useState({ attributes: {} });

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getProductById = () => {
    const onResponse = (response) => setProduct({ attributes: response });
    const onFinally = () => hideLoader();

    showLoader();
    requestProduct(onResponse, onFinally, productID);
  };

  useEffect(getProductById, [productID, showLoader, hideLoader]);

  return (
    <div className={`section ${visibility}`}>
      <ItemDetail item={product.attributes} />
    </div>
  );
});

export default ItemDetailContainer;
