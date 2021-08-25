/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect, useState } from 'react';

import utils from '../scripts/utilities';

import CV from '../components/cv';
import Features from '../components/features';
import Button from '../components/button';

import aboutContent from '../content/about.json';
import { EffectHookFunctions } from '../types/componentprops';

const AboutPage: FunctionComponent<EffectHookFunctions> = ({ onStart, onEnd }) => {
  useEffect(() => {
    document.title = 'About Me - cyberart_by_justin';
    onStart();
    return onEnd;
  }, []);
  const { fadeUp } = utils;
  const { summary } = aboutContent;
  const aboutImage = aboutContent['profile-image'];
  const [page, changePage] = useState('cv');

  return (
    <main className="container" id="about-page">
      <h1 className={`container__title ${fadeUp()}`}>About Me</h1>
      <section className={`about ${fadeUp()}`}>
        {/** Grid 1 */}
        <article className="about__article">
          <img className="about__article__photo" src={aboutImage.image} alt={aboutImage['alt-text']} id="about-profile-photo" />
          <h2 className="container__title">{summary.title}</h2>
          <p>
            {summary.body}
          </p>
        </article>
        {/** */}
        <article className="about__article">
          <div id="cv-or-features">
            <Button
              classes=""
              id="cv-btn"
              isSubmit={false}
              isDisabled={false}
              onClickFcn={() => changePage('cv')}
            >
              CV
            </Button>
            <Button
              classes=""
              id="features-btn"
              isSubmit={false}
              isDisabled={false}
              onClickFcn={() => changePage('features')}
            >
              Features
            </Button>
          </div>
          {page === 'cv' ? <CV /> : <Features />}
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
