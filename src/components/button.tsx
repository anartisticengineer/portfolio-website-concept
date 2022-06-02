import React, { FunctionComponent } from 'react';
import scripts from '../scripts';
import { ButtonProps } from '../types/componentprops';

const Button: FunctionComponent<ButtonProps> = ({
  classes,
  id,
  isSubmit,
  isDisabled,
  onClickFcn,
  children,
}) => {
  const { css } = scripts;

  return (
    <button
      aria-disabled={isDisabled}
      className={css.btnClasses(classes)}
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
