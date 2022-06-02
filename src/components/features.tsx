import React, { FunctionComponent } from 'react';
import { nanoid } from 'nanoid';

import scripts from '../scripts';
import aboutContent from '../content/about.json';

const Features: FunctionComponent = () => {
  const { css } = scripts;
  const { features } = aboutContent;

  return (
    <div className={css.fadeInHorizontal('Right')}>
      <h3 className="container__title">Features</h3>
      <ul>
        {features.map((el) => (
          <li key={nanoid(10)}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
