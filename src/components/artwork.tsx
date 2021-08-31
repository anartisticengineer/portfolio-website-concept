import React, { FunctionComponent } from 'react';
import { ArtworkProps } from '../types/componentprops';

const Artwork: FunctionComponent<ArtworkProps> = ({ name, url }) => {
  const nfTransformUrl: string = `${url}?nf_resize=fit&w=800`;

  return (
    <figure className="series__artwork">
      <img className="series__artwork__picture" src={nfTransformUrl} alt={`Pic of ${name}`} />
      <figcaption className="series__artwork__title">{name}</figcaption>
    </figure>
  );
};

export default Artwork;
