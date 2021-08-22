/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeriesCardProps } from '../types/componentprops';

// eslint-disable-next-line no-unused-vars
const SeriesCard:FunctionComponent<SeriesCardProps> = ({ name, searchIndex, previewPieceUrl }) => {
  useEffect(() => {

  }, []);

  return (
    <Link to={`/gallery/${searchIndex}`}>
      <figure className="seriescard">
        <img className="seriescard__image" src={previewPieceUrl} alt={`Example of ${name}`} />
        <figcaption className="seriescard__caption">{name}</figcaption>
      </figure>
    </Link>
  );
};

export default SeriesCard;
