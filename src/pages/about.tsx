/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect, useState } from 'react';
import profilePhoto from '../images/new profile pic oct 2019 smaller.jpg';
import utils from '../scripts/utilities';

import CV from '../components/cv';
import Features from '../components/features';
import Button from '../components/button';

const AboutPage: FunctionComponent = () => {
  useEffect(() => {
    document.title = 'About Me - cyberart_by_justin';
  }, []);

  const { fadeUp } = utils;
  const [page, changePage] = useState('cv');

  return (
    <main className="container" id="about-page">
      <h1 className={`container__title ${fadeUp()}`}>About Me</h1>
      <section className={`about ${fadeUp()}`}>
        {/** Grid 1 */}
        <article className="about__article">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={profilePhoto} alt="profile" id="about-profile-photo" />
          </div>
          <h2 className="container__title">Who am I?</h2>
          <p>
            I am a digital artist/creative coder currently based in Denver,
            Colorado. I&apos;ve been doing digital art since about 2017 and creative
            coding since 2016. As I&apos;ve grown as an artist over the years, I&apos;ve been
            discovering more ways to combine art and technology.
          </p>
          <p>
            Specializing primarily in glitch art, much of my best works come from
            destroying my photos on purpose. Datamoshing, breaking pixels, pixel
            sorting, all of that good stuff. I&apos;ve used my creative coding skills to
            create my own tool for glitching artworks; a tool whose influence can be
            seen in much of my latest artworks.
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
