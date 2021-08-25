/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '../components/button';
import bannerImg from '../images/banner-glitch.gif';
import utils from '../scripts/utilities';
import { EffectHookFunctions } from '../types/componentprops';

const HomePage: FunctionComponent<EffectHookFunctions> = ({ onStart, onEnd }) => {
  const history = useHistory();

  useEffect(() => {
    document.title = 'cyberart_by_justin';
    onStart();
    return onEnd;
  }, []);

  return (
    <main className="container" id="home-page">
      {/* <SketchHome /> */}
      <img src={bannerImg} alt="banner" id="home-banner" />
      <section className={utils.fadeUp()}>
        <h1 className="container__title">Welcome to the cyber art gallery!</h1>
        <Button
          classes="btn--home"
          id="see-latest"
          isSubmit={false}
          isDisabled={false}
          onClickFcn={() => history.push('/gallery')}
        >
          See my latest stuff
        </Button>
      </section>
    </main>
  );
};

export default HomePage;
