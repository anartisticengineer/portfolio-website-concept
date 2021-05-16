/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';

import SeriesCard from '../components/seriescard';

import { SeriesProps } from '../types/componentprops';
import utils from '../scripts/utilities';

const Gallery: FunctionComponent = () => {
  const { fadeUp } = utils;
  const sampleSeries: SeriesProps = { name: 'Sample', associatedPieces: null };

  useEffect(() => {
    document.title = 'Gallery - cyberart_by_justin';
    // TODO: api call to get the series names
  }, []);

  return (
    <main className="container">
      <h1 className={`container__title ${fadeUp()}`}>Gallery</h1>
      <section className="gallery">
        <SeriesCard name={sampleSeries.name} associatedPieces={null}>Dark Vaporwave</SeriesCard>
      </section>
    </main>
  );
};

export default Gallery;
