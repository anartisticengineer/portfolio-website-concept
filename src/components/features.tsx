/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import utils from '../scripts/utilities';

const Features: FunctionComponent = () => {
  const { fadeUp } = utils;

  return (
    <div className={fadeUp()}>
      <h3 className="container__title">Features</h3>
      <ul>
        <li>Jun 2018 - CVA Zine:Glitch</li>
        <li>Oct 2018 - fu:bar/expo in Croatia</li>
        <li>Mar 2019 - Daylighted selected artist</li>
        <li>Jun 2020 - Project V4llain + The Glitch Art Bible</li>
      </ul>
    </div>
  );
};

export default Features;
