import React from "react";
import "./BuyForm.css";

const BuyForm = ({ submitHandler }) => {
  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <div className="field">
        <label htmlFor="fullname" className="label">
          Fullname
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="fullname"
            id="fullname"
            pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+"
            placeholder="Insert your name"
            minLength="3"
            required
          />
          <p className="help is-link">Your name must contain only characters</p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="example@email.com"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="telephone" className="label">
          Telephone
        </label>
        <input
          type="tel"
          name="telephone"
          id="telephone"
          className="input"
          pattern="^\d+\s{1}\d{3}-\d{4}$"
          placeholder="123 456-7890"
          required
        />
        <p className="help">
          3-digit area code and phone number separate by hyphen
        </p>
      </div>

      <div className="field">
        <div className="control">
          <button type="submit" className="button is-success">
            Finish Buy
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuyForm;
