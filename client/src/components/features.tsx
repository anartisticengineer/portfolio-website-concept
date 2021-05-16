/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import utils from '../scripts/utilities';

import aboutSample from '../samples/aboutsample.json';

const Features: FunctionComponent = () => {
  const { fadeUp } = utils;
  const { features } = aboutSample;

  return (
    <div className={fadeUp()}>
      <h3 className="container__title">Features</h3>
      <ul>
        {features.map((el) => <li>{el}</li>)}
      </ul>
    </div>
  );
};

export default Features;
