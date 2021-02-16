/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import utils from '../scripts/utilities';
import { ButtonProps } from '../types/componentprops';

const Button: FunctionComponent<ButtonProps> = ({
  classes, id, isSubmit, onClickFcn, children,
}) => {
  const { btnClasses } = utils;

  return (
    <button
      className={btnClasses(classes)}
      type={isSubmit ? 'submit' : 'button'}
      id={id}
      onClick={onClickFcn}
    >
      {children}
    </button>
  );
};

export default Button;
