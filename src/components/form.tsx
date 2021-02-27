/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect, useState } from 'react';
import utils from '../scripts/utilities';
import Button from './button';
import InputField from './inputfield';

const Form: FunctionComponent = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [formData, setFormData] = useState({
    'form-name': '',
    'form-email': '',
    'form-message': '',
  });

  useEffect(() => {
    setSubmitDisabled(utils.allowSubmission(formData));
  }, [formData]);

  const handleChange = (event: any) => {
    const { target } = event;
    setFormData({ ...formData, [target.id]: target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form className="form" onSubmit={handleSubmit} id="submit-form" autoComplete="off">
      {/** First and last name */}
      <div className="form__block">
        <InputField
          labelId="name__label"
          inputId="form-name"
          inputType="text"
          placeholder="Name"
          onChangeFcn={handleChange}
          isRequired
        >
          Name:
        </InputField>
        {/** Text area for email */}
        <InputField
          labelId="form-email__label"
          inputId="form-email"
          inputType="email"
          placeholder="E-mail"
          onChangeFcn={handleChange}
          isRequired
        >
          E-mail:
        </InputField>
      </div>
      {/* Your message to me here */}
      <div className="form__block">
        <InputField
          labelId="message__label"
          inputId="form-message"
          inputType="textarea"
          placeholder="Write your message here"
          onChangeFcn={handleChange}
          isRequired
        >
          Your Message:
        </InputField>
        <Button
          classes="btn--submit"
          id="submit-btn"
          isSubmit
          isDisabled={!submitDisabled}
          onClickFcn={() => { }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
