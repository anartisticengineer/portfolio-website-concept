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
  onChangeFcn,
  children,
}) => (
  <>
    <label className="form__label" id={labelId} htmlFor={inputId}>
      {children}
    </label>
    {inputType !== 'textarea' ? (
      <input
        aria-labelledby={labelId}
        aria-required={isRequired}
        className="textarea"
        type={inputType}
        id={inputId}
        name={inputId}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChangeFcn}
      />
    ) : (
      <textarea
        className="textarea"
        id={inputId}
        name={inputId}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChangeFcn}
      />
    )}
  </>
);

export default InputField;
