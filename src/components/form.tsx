/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router';
import Recaptcha from 'react-recaptcha';

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
  const [captchaResponse, setCaptchaResponse] = useState({});

  const history = useHistory();

  const siteKey: string = `${process.env.REACT_APP_SITE_RECAPTCHA_KEY}`;
  const secretKey: string = `${process.env.REACT_APP_SITE_RECAPTCHA_SECRET}`;

  const handleChange = (event: any) => {
    const { target } = event;
    setFormData({ ...formData, [target.id]: target.value });
  };

  const encode = (data: FormData | any): string => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  const verify = (token: any) => {
    fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    }).then((res) => res.json()).then((r) => {
      setCaptchaResponse(r);
    }).catch((err) => console.error(err));
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    if (captchaResponse) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact-form',
          'g-recaptcha-response': captchaResponse,
          ...formData,
        }),
      }).then(() => {
        history.push('/contact/success');
      }).catch((error) => alert(error));
    } else {
      alert('Please verify that you are a human >:(');
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
        <input type="hidden" name="form-name" value="contact-form" />
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
          isDisabled={false}
        >
          Submit
        </Button>
      </div>
      <div className="form__block">
        <Recaptcha
          sitekey={siteKey}
          verifyCallback={verify}
          expiredCallback={() => setCaptchaResponse({})}
        />
      </div>
    </form>
  );
};

export default Form;
