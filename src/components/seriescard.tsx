import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import utils from '../scripts/utilities';
import { SeriesCardProps } from '../types/componentprops';

const SeriesCard: FunctionComponent<SeriesCardProps> = ({ name, previewPieceUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { slugify } = utils;
  const nfTransformUrl: string = `${previewPieceUrl}?nf_resize=fit&w=800`;

  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : (
        <Link to={`/gallery/${slugify(name)}`} aria-label={`Link to series: ${name}`}>
          <figure className="seriescard">
            <img className="seriescard__image" src={nfTransformUrl} alt={`Artwork: ${name}`} />
            <figcaption className="seriescard__caption">{name}</figcaption>
          </figure>
        </Link>
      )}
    </>
  );
};

export default SeriesCard;
