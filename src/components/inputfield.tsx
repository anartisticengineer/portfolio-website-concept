/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import { InputFieldProps } from '../types/componentprops';

const InputField: FunctionComponent<InputFieldProps> = ({
  labelId, inputId, placeholder, isRequired, children,
}) => (
  <>
    <label className="form__label" id={labelId} htmlFor={inputId}>{children}</label>
    <input type="text" id={inputId} name={inputId} placeholder={placeholder} required={isRequired} />
  </>
);

export default InputField;
