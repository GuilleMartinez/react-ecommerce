import React from "react";
import { useGeneralDataContext } from "../../context/GeneralContext";

const Notification = () => {
  const { notification, removeNotification } = useGeneralDataContext();

  const clickHandler = () => {
    removeNotification();
    notification.closeAction();
  };

  return (
    <div
      className={`modal ${
        notification.isActive ? "is-active" : ""
      } has-text-centered`}
    >
      <div className="modal-background"></div>
      <div className="modal-content is-clipped m-3">
        <article className={`message is-${notification.type}`}>
          <div className="message-body">
            <h2 className="title">{notification.title}</h2>
            <p className="content">{notification.description}</p>
            <button
              type="button"
              className={`button is-${notification.type}`}
              onClick={clickHandler}
            >
              Close
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Notification;
