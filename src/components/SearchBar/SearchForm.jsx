import React from "react";

const SearchForm = ({ list, inputReference, submitHanlder }) => {
  return (
    <form onSubmit={submitHanlder} autoComplete="off" className="mb-3">
      <div className="field is-grouped is-flex is-justify-content-center">
        <div className="control is-flex-grow-1">
          <input
            ref={inputReference}
            className="input has-text-centered"
            type="search"
            name="search-products"
            id="search-products"
            arial-label="Write the product you want to search"
            placeholder="Search a product"
            list="products"
            required
          />
          <datalist id="products">
            {list.map((item) => (
              <option key={item.id}>{item.title}</option>
            ))}
          </datalist>
        </div>
        <div className="control">
          <button
            className="button is-link is-light"
            type="submit"
            aria-label="Find product"
          >
            🔍
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
