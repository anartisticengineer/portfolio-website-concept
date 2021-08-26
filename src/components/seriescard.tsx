import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeriesCardProps } from '../types/componentprops';

const SeriesCard:FunctionComponent<SeriesCardProps> = ({ name, searchIndex, previewPieceUrl }) => {
  useEffect(() => {

  }, []);

  return (
    <Link to={`/gallery/${searchIndex}`}>
      <figure className="seriescard">
        <img className="seriescard__image" src={previewPieceUrl} alt={`Artwork: ${name}`} />
        <figcaption className="seriescard__caption">{name}</figcaption>
      </figure>
    </Link>
  );
};

export default SeriesCard;
