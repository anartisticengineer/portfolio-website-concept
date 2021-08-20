/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeriesCardProps } from '../types/componentprops';

// eslint-disable-next-line no-unused-vars
const SeriesCard:FunctionComponent<SeriesCardProps> = ({ name, searchIndex, previewPieceUrl }) => {
  useEffect(() => {

  }, []);

  return (
    <Link className="seriescard" to={`/gallery/${searchIndex}`}>
      <img className="seriescard__image" src={previewPieceUrl} alt={`Example of ${name}`} />
      <div className="seriescard__caption">{ name }</div>
    </Link>
  );
};

export default SeriesCard;
