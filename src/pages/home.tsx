import React, { FunctionComponent, useEffect } from 'react';
import { NavigateFunction } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import homeContent from '../content/homepage.json';
import scripts from '../scripts';
import { EffectHookFunctions } from '../types/componentprops';

const HomePage: FunctionComponent<EffectHookFunctions> = ({
  onStart,
  onEnd,
}) => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    document.title = 'cyberart_by_justin';
    onStart();
    return onEnd;
  }, []);

  const { css } = scripts;

  return (
    <main
      className="container homepage"
      id="home-page"
    >
      <img
        src={homeContent['home-gif']['gif-image']}
        className="homepage__gif"
        alt={homeContent['home-gif']['gif-alt-text']}
        id="home-banner"
      />
      <section className={css.fadeUp()}>
        <h1 className="container__title">{homeContent['welcome-text']}</h1>
        <Button
          classes="btn--home"
          id="see-latest"
          isSubmit={false}
          isDisabled={false}
          onClickFcn={() => navigate('/gallery', { replace: true })}
        >
          {homeContent['to-gallery-button-text']}
        </Button>
      </section>
    </main>
  );
};

export default HomePage;
