/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */

import React, { createRef, FunctionComponent, useState } from 'react';
import { NavigateFunction } from 'react-router';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import scripts from '../scripts';
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

  const recaptchaRef: React.RefObject<any> = createRef();

  const { url, otherUtils } = scripts;

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const token = await recaptchaRef.current.executeAsync();
    const data = await fetch(
      `/.netlify/functions/verifyrecaptcha?token=${token}`,
    );

    const gRecaptchaResponse = await data.json();

    const res: Response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: url.encode({
        'g-recaptcha-response': url.encode(gRecaptchaResponse),
        'form-name': 'contact-form',
        ...formData,
      }),
    });
    if (res.ok) {
      navigate('/contact/success', { replace: true });
    } else {
      alert(res.statusText);
    }
  };

  return (
    <form
      name="contact-form"
      className="form"
      id="submit-form"
      method="post"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
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
          isDisabled={!otherUtils.allowSubmission(formData)}
        >
          Submit
        </Button>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_SITE_RECAPTCHA_KEY || ''}
      />
    </form>
  );
};

export default Form;
