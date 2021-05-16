/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router';

import Artwork from '../components/artwork';

import seriesSample from '../samples/seriessample.json';

const Series: FunctionComponent = () => {
  const p = useParams();
  const { seriesname, pieces } = seriesSample;

  useEffect(() => {
    console.log(p);
    // TODO: pull up all artworks with id or name from params
  });

  return (
    <main className="container">
      <h1>{seriesname}</h1>
      <section className="series">
        {pieces.map(({ name, url }) => <Artwork key={name} name={name} url={url} />)}
      </section>
    </main>
  );
};

export default Series;
