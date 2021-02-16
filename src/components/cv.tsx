/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import utils from '../scripts/utilities';

const CV: FunctionComponent = () => {
  const { fadeUp } = utils;

  return (
    <div className={fadeUp()}>
      <h3 className="container__title">CV</h3>
      <h4>Objective</h4>
      <p>
        To specialize in digital art and/or creative coding
        while continuously exploring ways to bring the two together!
      </p>
      <h4>Education</h4>
      <ul>
        <li>
          2018 - B.S. in Electrical Engineering
          (with an emphasis in Digital Signal Processing) at CSU Long Beach
        </li>
        <li>2020 - Software Developer Apprentice at Techtonic in Boulder, Colorado</li>
      </ul>
      <h4>Notable Projects + Experience</h4>
      <ul>
        <li>(Obviously) MAKING THIS WEBSITE!</li>
        <li>Glitch FX Generator</li>
        <li>Generative Patterns</li>
      </ul>
    </div>
  );
};

export default CV;
