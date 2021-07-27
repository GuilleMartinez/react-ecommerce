import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import SearchBarContainer from "../SearchBar/SearchBarContainer";

import { fetchWithDelay } from "../../scripts/fetchWithDelay";
import { useParams } from "react-router-dom";
import { useGeneralDataContext } from "../../context/GeneralContext";
import WithLoader from "../WithLoader/WithLoader";

const ItemListContainer = WithLoader(({ visibility }) => {
  const { id: categoryID } = useParams();

  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getAllProducts = () => {
    fetchWithDelay("/JSON/products.json", 700, function getProducts(json) {
      setAllItems(json);
    });
  };

  const getProductsByCategory = () => {
    showLoader();
    fetchWithDelay("/JSON/products.json", 700, function getProducts(json) {
      setItemsFiltered(
        categoryID ? json.filter((item) => item.category === +categoryID) : json
      );
      hideLoader();
    });
  };

  useEffect(getAllProducts, []);
  useEffect(getProductsByCategory, [categoryID, showLoader, hideLoader]);

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
