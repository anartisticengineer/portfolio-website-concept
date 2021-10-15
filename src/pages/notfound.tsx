import React, { FunctionComponent, useEffect } from 'react';

import { useHistory } from 'react-router';
import utils from '../scripts/utilities';

import Button from '../components/button';

import notFoundContent from '../content/not-found.json';
import { EffectHookFunctions } from '../types/componentprops';

const NotFound: FunctionComponent<EffectHookFunctions> = ({ onStart, onEnd }) => {
  useEffect(() => {
    document.title = '404 Not Found :P';
    onStart();
    return onEnd;
  }, []);
  const history = useHistory();
  const { fadeUp } = utils;
  return (
    <main className="container notfound">
      <h1 className={`container__title ${fadeUp()}`}>OOF</h1>
      <figure className="notfound__figure">
        <img className="notfound__image" src={notFoundContent['funny-gif']} alt="sample alt text" />
        <figcaption className="notfound__caption">{ notFoundContent['funny-caption'] }</figcaption>
      </figure>
      <div className="notfound__goback">
        <Button
          classes=""
          id="go-back-btn"
          isSubmit={false}
          isDisabled={false}
          onClickFcn={() => {
            history.push('/');
          }}
        >
          {notFoundContent['button-dialog']}
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
