import React, { FunctionComponent } from 'react';
import utils from '../scripts/utilities';
import { ButtonProps } from '../types/componentprops';

const Button: FunctionComponent<ButtonProps> = ({
  classes,
  id,
  isSubmit,
  isDisabled,
  onClickFcn,
  children,
}) => {
  const { btnClasses } = utils;

  return (
    <button
      aria-disabled={isDisabled}
      className={btnClasses(classes)}
      type={isSubmit ? 'submit' : 'button'}
      id={id}
      onClick={onClickFcn}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
