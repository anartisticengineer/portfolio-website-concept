/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';

import SeriesCard from '../components/seriescard';

import utils from '../scripts/utilities';
import { series } from '../content/gallery.json';

const Gallery: FunctionComponent = () => {
  const { fadeUp } = utils;

  useEffect(() => {
    document.title = 'Gallery - cyberart_by_justin';
  }, []);

  return (
    <main className="container">
      <h1 className={`container__title ${fadeUp()}`}>Gallery</h1>
      <section className="gallery">
        {series.map((item, index) => <SeriesCard name={item['series-name']} searchIndex={index} previewPieceUrl={item.artworks[0]['artwork-file']} />)}
      </section>
    </main>
  );
};

export default Gallery;
