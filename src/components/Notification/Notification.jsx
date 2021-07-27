import React from "react";
import { useGeneralDataContext } from "../../context/GeneralContext";

const Notification = () => {
  const { error, removeError } = useGeneralDataContext();
  const clickEvent = () => removeError();
  return (
    <div class={`notification is-${error.type} is-light p-5 my-5 has-text-centered`}>
      <h2 className="subtitle">{error.title}</h2>
      <p className="content">{error.description}</p>
      <button class="delete is-large" onClick={clickEvent}></button>
    </div>
  );
};

export default Notification;
