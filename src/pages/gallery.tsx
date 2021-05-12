/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import Series from '../components/series';
import { SeriesProps } from '../types/componentprops';

// import { embedMaterial } from '../scripts/embed';
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
      {/* <p id="gallery-description">Some posts of my latest stuff on Instagram!</p> */}
      <section className="gallery">
        <Series name={sampleSeries.name} associatedPieces={null}>Sample</Series>
        <Series name={sampleSeries.name} associatedPieces={null}>Sample</Series>
        <Series name={sampleSeries.name} associatedPieces={null}>Sample</Series>
        <Series name={sampleSeries.name} associatedPieces={null}>Sample</Series>
      </section>
    </main>
  );
};

export default Gallery;
