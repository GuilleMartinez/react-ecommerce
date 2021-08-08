import React from "react";
import Notification from "../Notification/Notification";
import { useGeneralDataContext } from "../../context/GeneralContext";

const WithNotification = (Component) => {
  return function ComponentWithLoader(props) {
    const { notification } = useGeneralDataContext();
    return (
      <>{notification.isActive ? <Notification /> : <Component {...props} />}</>
    );
  };
};

export default WithNotification;
