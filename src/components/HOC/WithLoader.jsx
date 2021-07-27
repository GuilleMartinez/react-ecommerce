import React from "react";
import { useGeneralDataContext } from "../../context/GeneralContext";
import Loader from "../Loader/Loader";

const WithLoader = (Component) => {
  return function ComponentWithLoader(props) {
    const { isLoading } = useGeneralDataContext();
    return (
      <>
        {isLoading && <Loader /> }
        <Component
          {...props}
          visibility={isLoading ? "is-hidden" : "is-visible"}
        />
      </>
    );
  };
};

export default WithLoader;
