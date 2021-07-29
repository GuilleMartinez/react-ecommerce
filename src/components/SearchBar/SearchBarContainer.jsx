import React, { createRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { useGeneralDataContext } from "../../context/GeneralContext";
import WithNotification from "../HOC/WithNotification";

import SearchForm from "./SearchForm";

const SearchBarContainer = WithNotification(({ items }) => {
  const [productSearched, setProductSearched] = useState(null);

  const [hasSubmitted, setSubmit] = useState(false);
  const searchRef = createRef();

  const { createError } = useGeneralDataContext();

  const executeForm = (id) => {
    setProductSearched(id);
    setSubmit(true);
  };

  const onSubmitHanlder = (event) => {
    event.preventDefault();
    const searchedProduct = searchRef.current.value;
    const { title } =
      items.find(
        (item) => item.title.toLowerCase() === searchedProduct.toLowerCase()
      ) || false;
    if (title) executeForm(title);
    else
      createError(
        "Product not found",
        "The product you searched is not available. Please try again",
        "info"
      );
  };

  return (
    <div className="section has-text-centered">
      <h2 className="title mb-3">What're you looking for?</h2>
      {hasSubmitted ? (
        <Redirect to={`/product/${productSearched}`} />
      ) : (
        <SearchForm
          list={items}
          submitHanlder={onSubmitHanlder}
          inputReference={searchRef}
        />
      )}
    </div>
  );
});

export default SearchBarContainer;
