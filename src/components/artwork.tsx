/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import { ArtworkProps } from '../types/componentprops';

const Artwork: FunctionComponent<ArtworkProps> = ({ name, url }) => (
  <figure>
    <img src={url} alt={`Pic of ${name}`} />
    <figcaption>{name}</figcaption>
  </figure>
);

export default Artwork;
