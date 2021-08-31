import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeriesCardProps } from '../types/componentprops';

const SeriesCard:FunctionComponent<SeriesCardProps> = ({ name, searchIndex, previewPieceUrl }) => {
  useEffect(() => {

  }, []);

  const nfTransformUrl: string = `${previewPieceUrl}?nf_resize=fit&w=800`;

  return (
    <Link to={`/gallery/${searchIndex}`} aria-label={`Link to series: ${name}`}>
      <figure className="seriescard">
        <img className="seriescard__image" src={nfTransformUrl} alt={`Artwork: ${name}`} />
        <figcaption className="seriescard__caption">{name}</figcaption>
      </figure>
    </Link>
  );
};

export default SeriesCard;
