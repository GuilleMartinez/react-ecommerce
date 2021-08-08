import React from "react";

const SearchForm = ({ list, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} autoComplete="off" className="mb-3">
      <div className="field is-grouped is-flex is-justify-content-center">
        <div className="control is-flex-grow-1">
          <input
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
            {list.map(({ id, title }) => (
              <option key={id}>{title}</option>
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
