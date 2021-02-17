/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import Button from './button';
import InputField from './inputfield';

const Form: FunctionComponent = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form className="form " onSubmit={handleSubmit} id="submit-form" autoComplete="off">
      {/** First and last name */}
      <div className="form__block">
        <InputField
          labelId="first-name__label"
          inputId="first-name"
          inputType="text"
          placeholder="First Name"
          isRequired
        >
          First Name:
        </InputField>
        <InputField
          labelId="last-name__label"
          inputId="last-name"
          inputType="text"
          placeholder="Last Name"
          isRequired
        >
          Last Name:
        </InputField>
      </div>
      {/** Text area for email */}
      <div className="form__block">
        <InputField
          labelId="form-email__label"
          inputId="form-email"
          inputType="email"
          placeholder="E-mail"
          isRequired
        >
          E-mail:
        </InputField>
      </div>
      {/* Your message to me here */}
      <div className="form__block">
        <InputField
          labelId="message__label"
          inputId="message"
          inputType="textarea"
          placeholder="Write your message here"
          isRequired
        >
          Your Message:
        </InputField>
        <Button classes="btn--submit" id="submit-btn" isSubmit onClickFcn={() => {}}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
