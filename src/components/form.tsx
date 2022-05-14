/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
// eslint-disable-next-line object-curly-newline
import React, { FunctionComponent, useState } from 'react';
import { NavigateFunction } from 'react-router';
import { useNavigate } from 'react-router-dom';

import utils from '../scripts/utilities';

import { FormData } from '../types/componentstates';
import Button from './button';
import InputField from './inputfield';

const Form: FunctionComponent = () => {
  const initialData: FormData = {
    'form-username': '',
    'form-email': '',
    'form-message': '',
  };

  const [formData, setFormData] = useState(initialData);

  const navigate: NavigateFunction = useNavigate();

  const { allowSubmission } = utils;

  const handleChange = (event: any) => {
    const { target } = event;
    setFormData({ ...formData, [target.id]: target.value });
  };

  const encode = (data: FormData | any): string =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    const confirmSubmit: boolean = confirm('Submit Form?');

    if (confirmSubmit) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact-form',
          ...formData,
        }),
      })
        .then(() => {
          // history.push('/contact/success');
          navigate('/contact/success', { replace: true });
        })
        .catch((error) => alert(error));
    } else {
      alert('Form not submitted yet.');
    }
  };

  return (
    <form
      name="contact-form"
      className="form"
      id="submit-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {/** Name */}
      <div className="form__block">
        <input
          type="hidden"
          name="form-name"
          value="contact-form"
        />
        <InputField
          labelId="name__label"
          inputId="form-username"
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
          isDisabled={!allowSubmission(formData)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
