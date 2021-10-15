import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { nanoid } from 'nanoid';

import Artwork from '../components/artwork';
import utils from '../scripts/utilities';

import { ArtworkProps, EffectHookFunctions, FullSeriesContentProps } from '../types/componentprops';
import { series } from '../content/gallery.json';

const Series: FunctionComponent<EffectHookFunctions> = ({ onStart, onEnd }) => {
  const { title } = useParams<{ title: string }>();

  const initSeriesArtworks: FullSeriesContentProps = {
    'series-name': '',
    artworks: [],
  };

  const [fullSeries, setFullSeries] = useState(initSeriesArtworks);

  const { fadeUp } = utils;
  // const history = useHistory();

  const convertToArtworkProps = (arr: any[]): ArtworkProps[] => arr.map((item) => {
    const artProps: ArtworkProps = { name: item['artwork-name'], url: item['artwork-file'] };
    return artProps;
  });

  useEffect(() => {
    onStart();
    const regEx: RegExp = new RegExp(title.replace('-', ' '), 'i');
    let selectedSeries: FullSeriesContentProps = { 'series-name': '', artworks: [] };
    const seriesSet: Set<any> = new Set(series);
    seriesSet.forEach((item) => {
      if (item['series-name'].match(regEx)) {
        selectedSeries = item;
      }
    });
    document.title = `Gallery - ${selectedSeries['series-name']}`;
    setFullSeries({ ...selectedSeries, artworks: convertToArtworkProps(selectedSeries.artworks) });
    return onEnd;
  }, []);

  return (
    <main className="container">
      <h1 className="container__title">{fullSeries['series-name']}</h1>
      <section className={`series ${fadeUp()}`}>
        {fullSeries.artworks.map((artwork) => (
          <Artwork
            name={artwork.name}
            url={artwork.url}
            key={nanoid(10)}
          />
        ))}
      </section>
    </main>
  );
};

export default Series;
