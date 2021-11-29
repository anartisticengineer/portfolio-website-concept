import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ArtworkProps } from '../types/componentprops';

const Artwork: FunctionComponent<ArtworkProps> = ({ name, url }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const nfTransformUrl: string = `${url}?nf_resize=fit&w=800`;

  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : (
        <figure className="series__artwork">
          <img className="series__artwork__picture" src={nfTransformUrl} alt={`Pic of ${name}`} />
          <figcaption className="series__artwork__title">{name}</figcaption>
        </figure>
      )}
    </>
  );
};

export default Artwork;
