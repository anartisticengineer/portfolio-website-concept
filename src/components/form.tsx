/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import Button from './button';

const Form: FunctionComponent = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form className="form " onSubmit={handleSubmit} id="submit-form" autoComplete="off">
      {/** First and last name */}
      <div className="form__block">
        <label className="form__label" id="first-name__label" htmlFor="first-name">First Name: </label>
        <input
          className="textarea"
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          required
        />
        <label className="form__label" id="last-name__label" htmlFor="last-name">Last Name: </label>
        <input
          className="textarea"
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
          required
        />
      </div>
      {/** Text area for email */}
      <div className="form__block">
        <label className="form__label" id="form-email__label" htmlFor="form-email">Email: </label>
        <input
          className="textarea"
          type="email"
          name="form-email"
          id="form-email"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="form__block">
        <label className="form__label" id="message__label" htmlFor="message">Your message: </label>
        <textarea
          className="textarea"
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Write your message here"
          required
        />
        <Button classes="btn--submit" id="submit-btn" isSubmit onClickFcn={() => {}}>Submit</Button>
      </div>
    </form>
  );
};

export default Form;
