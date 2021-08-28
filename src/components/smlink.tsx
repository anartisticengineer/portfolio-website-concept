import React, { FunctionComponent } from 'react';
import { SMLinkProps } from '../types/componentprops';

const SMLink: FunctionComponent<SMLinkProps> = ({ url, label, children }) => (
  <a href={url} aria-label={label} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

export default SMLink;
