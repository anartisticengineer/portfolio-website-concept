import React, { FunctionComponent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { EffectHookFunctions } from '../types/componentprops';

import shopContent from '../content/shop.json';

const Shop: FunctionComponent<EffectHookFunctions> = ({ onStart, onEnd }) => {
  useEffect(() => {
    document.title = 'Shop - cyberart_by_justin';
    onStart();
    return onEnd;
  }, []);

  return (
    <main className="container shop">
      <h1 className="container__title">Shop</h1>
      <section className="shop__description">
        <ReactMarkdown>{shopContent.description}</ReactMarkdown>
      </section>
      <section className="shop__sampleimages">
        {shopContent['sample-images'].map((im) => <img src={im.image} alt={im['alt-txt']} />)}
      </section>
    </main>
  );
};

export default Shop;
