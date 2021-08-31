import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '../components/button';
import homeContent from '../content/homepage.json';
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
    <main className="container homepage" id="home-page">
      <img
        src={homeContent['home-gif']['gif-image']}
        className="homepage__gif"
        alt={homeContent['home-gif']['gif-alt-text']}
        id="home-banner"
      />
      <section className={utils.fadeUp()}>
        <h1 className="container__title">{homeContent['welcome-text']}</h1>
        <Button
          classes="btn--home"
          id="see-latest"
          isSubmit={false}
          isDisabled={false}
          onClickFcn={() => history.push('/gallery')}
        >
          {homeContent['to-gallery-button-text']}
        </Button>
      </section>
    </main>
  );
};

export default HomePage;
