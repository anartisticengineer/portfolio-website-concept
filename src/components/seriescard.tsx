import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import scripts from '../scripts';
import { SeriesCardProps } from '../types/componentprops';

const SeriesCard: FunctionComponent<SeriesCardProps> = ({
  name,
  previewPieceUrl,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { url } = scripts;
  const nfTransformUrl: string = `${previewPieceUrl}?nf_resize=fit&w=800`;

  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
        />
      ) : (
        <Link
          to={`/gallery/${url.slugify(name)}`}
          aria-label={`Link to series: ${name}`}
        >
          <figure className="seriescard">
            <img
              className="seriescard__image"
              src={nfTransformUrl}
              alt={`Artwork: ${name}`}
            />
            <figcaption className="seriescard__caption">{name}</figcaption>
          </figure>
        </Link>
      )}
    </>
  );
};

export default SeriesCard;
