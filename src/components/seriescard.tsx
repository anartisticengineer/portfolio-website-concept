/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeriesProps } from '../types/componentprops';
import placeholderImg from '../images/default-placeholder-image.png';

// eslint-disable-next-line no-unused-vars
const SeriesCard:FunctionComponent<SeriesProps> = ({ name, associatedPieces = null, children }) => {
  useEffect(() => {

  }, []);

  return (
    <Link className="seriescard" to={`/gallery/${name}`}>
      <img className="seriescard__image" src={placeholderImg} alt={`Example of ${name}`} />
      <div className="seriescard__caption">{ children }</div>
    </Link>
  );
};

export default SeriesCard;
