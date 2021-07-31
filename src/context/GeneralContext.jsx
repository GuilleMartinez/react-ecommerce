import React, { createContext, useCallback, useContext, useState } from "react";

const GeneralDataContext = createContext();
const useGeneralDataContext = () => useContext(GeneralDataContext);

const GeneralContext = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState({
    titlte: "",
    description: "",
    type: "",
    isActive: false
  });

  const showLoader = useCallback(() => setLoading(true), []);

  const hideLoader = useCallback(() => setLoading(false), []);

  const createError = (title, description, type) => setError({ title, description, type, isActive: true });
  
  const removeError = () => setError({ ...error, isActive: false });

  return (
    <GeneralDataContext.Provider
      value={{
        isLoading,
        error,
        showLoader,
        hideLoader,
        createError,
        removeError
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};

export default GeneralContext;
export { useGeneralDataContext };
