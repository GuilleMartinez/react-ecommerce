import React, { createContext, useCallback, useContext, useState } from "react";

const GeneralDataContext = createContext();
const useGeneralDataContext = () => useContext(GeneralDataContext);

const GeneralContext = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const [notification, setNotification] = useState({
    titlte: "",
    description: "",
    type: "",
    isActive: false,
  });

  const showLoader = useCallback(() => setLoading(true), []);

  const hideLoader = useCallback(() => setLoading(false), []);

  const createNotification = (title, description, type) =>
    setNotification({ title, description, type, isActive: true });

  const removeNotification = () =>
    setNotification({ ...notification, isActive: false });

  return (
    <GeneralDataContext.Provider
      value={{
        isLoading,
        notification,
        showLoader,
        hideLoader,
        createNotification,
        removeNotification,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};

export default GeneralContext;
export { useGeneralDataContext };
