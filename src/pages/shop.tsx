import React, { FunctionComponent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { nanoid } from 'nanoid';
import { EffectHookFunctions } from '../types/componentprops';

import shopContent from '../content/shop.json';
import utils from '../scripts/utilities';
import Button from '../components/button';

const Shop: FunctionComponent<EffectHookFunctions> = ({ onStart, onEnd }) => {
  useEffect(() => {
    document.title = 'Shop - cyberart_by_justin';
    onStart();
    return onEnd;
  }, []);

  const { fadeUp } = utils;

  return (
    <main className="container shop">
      <h1 className={`container__title ${fadeUp()}`}>Shop</h1>
      <section className={`shop__description ${fadeUp()}`}>
        <ReactMarkdown>{shopContent.description}</ReactMarkdown>

      </section>
      <section className={`shop__sampleimages ${fadeUp()}`}>
        {shopContent['sample-images'].map((im) => (
          <img
            src={im.image}
            alt={im['alt-txt']}
            key={nanoid(10)}
          />
        ))}
      </section>
      <Button
        classes="btn--secondary"
        id="shop-btn"
        isDisabled={false}
        isSubmit={false}
        onClickFcn={() => {
          window.location.href = 'http://bit.ly/cyberArtShop';
        }}
      >
        {shopContent['to-shop-txt']}
      </Button>
    </main>
  );
};

export default Shop;
