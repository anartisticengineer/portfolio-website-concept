/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import { InputFieldProps } from '../types/componentprops';

// TODO: Add handler for changed inputs

const InputField: FunctionComponent<InputFieldProps> = ({
  labelId,
  inputId,
  inputType = 'text',
  placeholder,
  isRequired,
  children,
}) => (
  <>
    <label className="form__label" id={labelId} htmlFor={inputId}>
      {children}
    </label>
    {inputType !== 'textarea' ? (
      <input
        className="textarea"
        type={inputType}
        id={inputId}
        name={inputId}
        placeholder={placeholder}
        required={isRequired}
      />
    ) : (
      <textarea
        className="textarea"
        id={inputId}
        name={inputId}
        placeholder={placeholder}
        required={isRequired}
      />
    )}
  </>
);

export default InputField;
