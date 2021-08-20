/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import { ArtworkProps } from '../types/componentprops';

const Artwork: FunctionComponent<ArtworkProps> = ({ name, url }) => (
  <figure className="series__artwork">
    <img className="series__artwork__picture" src={url} alt={`Pic of ${name}`} />
    <figcaption className="series__artwork__title">{name}</figcaption>
  </figure>
);

export default Artwork;
