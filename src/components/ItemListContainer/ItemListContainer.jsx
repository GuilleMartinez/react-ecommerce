import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";
import SearchBarContainer from "../SearchBar/SearchBarContainer";

import { fetchWithDelay } from "../../scripts/fetchWithDelay";
import { useParams } from "react-router-dom";
import { useGeneralDataContext } from "../../context/GeneralContext";

const ItemListContainer = () => {
  const { id: categoryID } = useParams();

  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const { isLoading, setLoading } = useGeneralDataContext();

  const getAllProducts = () => {
    fetchWithDelay("/JSON/products.json", 700, function getProducts(json) {
      setAllItems(json);
    });
  };

  const getProductsByCategory = () => {
    setLoading(true);
    fetchWithDelay("/JSON/products.json", 700, function getProducts(json) {
      setItemsFiltered(
        categoryID ? json.filter((item) => item.category === +categoryID) : json
      );
      setLoading(false);
    });
  };

  useEffect(getAllProducts, []);
  useEffect(getProductsByCategory, [categoryID, setLoading]);

  return (
    <div className="block">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchBarContainer items={allItems} />
          <ItemList items={itemsFiltered} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
