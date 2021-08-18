/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import utils from '../scripts/utilities';

import aboutContent from '../content/about.json';

const CV: FunctionComponent = () => {
  const { fadeUp } = utils;
  const { cv } = aboutContent;

  return (
    <div className={fadeUp()}>
      <h3 className="container__title">CV</h3>
      <h4>Objective</h4>
      <p>{cv.objective}</p>
      <h4>Education</h4>
      <ul>
        {cv.education.map((el) => <li>{el}</li>)}
      </ul>
      <h4>Notable Projects + Experience</h4>
      <ul>
        {cv.projects.map((el) => <li>{el}</li>)}
      </ul>
    </div>
  );
};

export default CV;
