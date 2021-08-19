/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { useHistory } from 'react-router';
import utils from '../scripts/utilities';

import defaultPic from '../images/default-placeholder-image.png';
import Button from '../components/button';

const NotFound = () => {
  const history = useHistory();
  const { fadeUp } = utils;
  return (
    <main className="container notfound">
      <h1 className={`container__title ${fadeUp()}`}>OOF</h1>
      <figure className="notfound__figure">
        <img className="notfound__image" src={defaultPic} alt="sample alt text" />
        <figcaption className="notfound__caption">I think we hit a dead end...</figcaption>
      </figure>
      <div className="notfound__goback">
        <Button
          classes=""
          id="go-back-btn"
          isSubmit={false}
          isDisabled={false}
          onClickFcn={() => {
            history.goBack();
          }}
        >
          Go back.
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
