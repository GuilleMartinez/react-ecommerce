import React, { createContext, useContext, useState } from "react";

const GeneralDataContext = createContext();
const useGeneralDataContext = () => useContext(GeneralDataContext);

const GeneralContext = ({ children }) => {

  const [isLoading, setLoading] = useState(true);

  return (
    <GeneralDataContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};

export default GeneralContext;
export { useGeneralDataContext };
