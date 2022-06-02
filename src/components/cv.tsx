import React, { FunctionComponent } from 'react';
import { nanoid } from 'nanoid';

import scripts from '../scripts';
import aboutContent from '../content/about.json';

const CV: FunctionComponent = () => {
  const { css } = scripts;
  const { cv } = aboutContent;

  return (
    <div className={css.fadeInHorizontal('Right')}>
      <h3 className="container__title">CV</h3>
      <h4>Objective</h4>
      <p>{cv.objective}</p>
      <h4>Education</h4>
      <ul>
        {cv.education.map((el) => (
          <li key={nanoid(10)}>{el}</li>
        ))}
      </ul>
      <h4>Notable Projects + Experience</h4>
      <ul>
        {cv.projects.map((el) => (
          <li key={nanoid(10)}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default CV;
