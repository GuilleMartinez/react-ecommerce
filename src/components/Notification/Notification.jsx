import React from "react";
import { useGeneralDataContext } from "../../context/GeneralContext";

const Notification = () => {
  const { error, removeError } = useGeneralDataContext();
  const clickEvent = () => removeError();
  return (
    <div className={`modal ${error.isActive && "is-active"} has-text-centered`}>
      <div className="modal-background"></div>
      <div className="modal-content is-clipped m-3">
        <article className="message is-info">
          <div className="message-body">
            <h2 className="title">{error.title}</h2>
            <p className="content">{error.description}</p>
            <button
              type="button"
              className="button is-info"
              onClick={clickEvent}
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
