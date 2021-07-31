import React from "react";
import Notification from "../Notification/Notification";
import { useGeneralDataContext } from "../../context/GeneralContext";

const WithNotification = (Component) => {
  return function ComponentWithLoader(props) {
    const { error } = useGeneralDataContext();
    return (
      <>
        {error.isActive ? (
          <Notification {...error} />
        ) : (
          <Component {...props} />
        )}
      </>
    );
  };
};

export default WithNotification;
