import React, { FunctionComponent, useEffect } from 'react';
import { nanoid } from 'nanoid';

import SeriesCard from '../components/seriescard';
import scripts from '../scripts';
import seriesContent from '../content/gallery.json';

import { EffectHookFunctions } from '../types/componentprops';

const Gallery: FunctionComponent<EffectHookFunctions> = ({
  onStart,
  onEnd,
}) => {
  const { series } = seriesContent;
  const { css } = scripts;

  useEffect(() => {
    document.title = 'Gallery - cyberart_by_justin';
    onStart();
    return onEnd;
  }, []);

  return (
    <main className="container">
      <h1 className={`container__title ${css.fadeUp()}`}>Gallery</h1>
      <section className={`gallery ${css.fadeUp()}`}>
        {series.map((item) => (
          <SeriesCard
            name={item['series-name']}
            previewPieceUrl={item.artworks[0]['artwork-file']}
            key={nanoid(10)}
          />
        ))}
      </section>
    </main>
  );
};

export default Gallery;
