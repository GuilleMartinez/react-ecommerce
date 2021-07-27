import React from "react";
import { useGeneralDataContext } from "../../context/GeneralContext";
import Notification from "../Notification/Notification";

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
