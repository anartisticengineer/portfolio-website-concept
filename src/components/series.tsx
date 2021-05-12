/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeriesProps } from '../types/componentprops';
import placeholderImg from '../images/default-placeholder-image.png';

// eslint-disable-next-line no-unused-vars
const Series: FunctionComponent<SeriesProps> = ({ name, associatedPieces = null, children }) => {
  useEffect(() => {
    document.title = name;
  }, []);

  return (
    <Link className="series" to={`/${name}`}>
      <img className="series__image" src={placeholderImg} alt={`Example of ${name}`} />
      <div className="series__caption">{ children }</div>
    </Link>
  );
};

export default Series;
