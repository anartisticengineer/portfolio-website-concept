import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
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

  const history = useHistory();

  const { fadeUp, slugify } = utils;

  const regEx: RegExp = new RegExp(title.replace('-', ' '), 'i');

  const convertToArtworkProps = (arr: any[]): ArtworkProps[] => arr.map((item) => {
    const artProps: ArtworkProps = { name: item['artwork-name'], url: item['artwork-file'] };
    return artProps;
  });

  useEffect(() => {
    onStart();
    let selectedSeries: FullSeriesContentProps = { 'series-name': '', artworks: [] };

    const seriesSet: Set<any> = new Set(series);
    const seriesNames: Set<string> = new Set(series.map((item) => slugify(item['series-name'])));

    if (seriesNames.has(title)) {
      seriesSet.forEach((item) => {
        if (item['series-name'].match(regEx)) {
          selectedSeries = item;
        }
      });
      // set series
      setFullSeries({
        ...selectedSeries,
        artworks: convertToArtworkProps(selectedSeries.artworks),
      });
      document.title = `Gallery - ${selectedSeries['series-name']}`;
    } else {
      history.replace('/not-found');
    }
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
