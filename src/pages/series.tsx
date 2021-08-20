/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Artwork from '../components/artwork';

import { series } from '../content/gallery.json';
import { ArtworkProps } from '../types/componentprops';

const Series: FunctionComponent = () => {
  const { index } = useParams<{index: string}>();
  const initSeriesArtworks: ArtworkProps[] = [];

  const [fullSeries, setFullSeries] = useState({
    seriesName: '',
    artworks: initSeriesArtworks,
  });

  const convertToArtworkProps = (arr: any[]): ArtworkProps[] => arr.map((item) => {
    const artProps: ArtworkProps = { name: item['artwork-name'], url: item['artwork-file'] };
    return artProps;
  });

  useEffect(() => {
    const selectedSeries = series[parseInt(index, 10)];
    document.title = `Gallery - ${selectedSeries['series-name']}`;
    setFullSeries({ seriesName: selectedSeries['series-name'], artworks: convertToArtworkProps(selectedSeries.artworks) });
  }, []);

  return (
    <main className="container">
      <h1>{fullSeries.seriesName}</h1>
      <section className="series">
        {fullSeries.artworks.map((artwork) => <Artwork name={artwork.name} url={artwork.url} />)}
      </section>
    </main>
  );
};

export default Series;
