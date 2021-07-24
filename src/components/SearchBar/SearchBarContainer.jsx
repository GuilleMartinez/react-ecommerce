import React, { createRef, useState } from "react";
import { Redirect } from "react-router-dom";
import SearchForm from "./SearchForm";


const SearchBarContainer = ({items}) => {
  const [productSearched, setProductSearched] = useState(null);

  const [hasSubmitted, setSubmit] = useState(false);
  const searchRef = createRef();

  const submitEvent = (event) => {
    event.preventDefault();
    const searchedProduct = searchRef.current.value;
    setProductSearched(searchedProduct);
    setSubmit(true);
  };

  return (
    <div className="section has-text-centered">
      <h2 className="subtitle mb-3">What're you looking for?</h2>
      {hasSubmitted ? (
        <Redirect to={`/product/${productSearched}`} />
      ) : (
        <SearchForm
          list={items}
          submitHanlder={submitEvent}
          inputReference={searchRef}
        />
      )}
    </div>
  );
};

export default SearchBarContainer;
