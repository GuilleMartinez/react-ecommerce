import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import SearchBarContainer from "../SearchBar/SearchBarContainer";

import { useParams } from "react-router-dom";
import { useGeneralDataContext } from "../../context/GeneralContext";
import WithLoader from "../HOC/WithLoader";
import getFromFirebase from "../../scripts/firebaseConfig";

const ItemListContainer = WithLoader(({ visibility }) => {
  const { categoryName } = useParams();

  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getAllProducts = () => {
    const onResponse = (response) => setAllItems(response);
    const onFinally = () => console.log("Search input loaded");
    getFromFirebase("products", onResponse, onFinally);
  };

  const getProductsByCategory = () => {
    const onResponse = (response) => setItemsFiltered(response);
    const onFinally = () => {
      console.log("Product list loaded");
      hideLoader();
    };
    const applyFilter = Boolean(categoryName);
    const filter = { attr: "category", compare: "==", value: categoryName };

    showLoader();
    getFromFirebase("products", onResponse, onFinally, applyFilter, filter);
  };

  useEffect(getAllProducts, []);
  useEffect(getProductsByCategory, [categoryName, showLoader, hideLoader]);

  return (
    <div className={`container ${visibility}`}>
      <>
        <SearchBarContainer items={allItems} />
        <ItemList items={itemsFiltered} />
      </>
    </div>
  );
});

export default ItemListContainer;
