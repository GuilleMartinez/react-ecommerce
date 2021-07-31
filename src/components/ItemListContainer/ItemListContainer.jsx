import React, { useEffect, useState } from "react";
import WithLoader from "../HOC/WithLoader";
import ItemList from "./ItemList";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import { useParams } from "react-router-dom";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { requestProducts } from "../../scripts/firebaseConfig";

const ItemListContainer = WithLoader(({ visibility }) => {
  const { categoryName } = useParams();

  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getAllProducts = () => {
    const onResponse = (response) => setAllItems(response);
    requestProducts(onResponse);
  };

  const getProductsByCategory = () => {
    const onResponse = (response) => setItemsFiltered(response);
    const onFinally = () => hideLoader();
    const applyFilter = Boolean(categoryName);

    showLoader();
    requestProducts(onResponse, onFinally, applyFilter, categoryName);
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
