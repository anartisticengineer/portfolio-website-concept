import React, { useEffect, FunctionComponent } from 'react';
import Social from '../components/social';
import scripts from '../scripts';

import contactContent from '../content/contact.json';
import { EffectHookFunctions } from '../types/componentprops';

const ContactPage: FunctionComponent<EffectHookFunctions> = ({
  onStart,
  onEnd,
}) => {
  useEffect(() => {
    document.title = 'Contact - cyberart_by_justin';
    onStart();
    return onEnd;
  }, []);

  const { css } = scripts;

  return (
    <main className="container container--contact">
      <h1 className={`container__title ${css.fadeUp()}`}>Contact</h1>
      <p>{contactContent['get-in-touch']}</p>
      <section className={css.fadeUp()}>
        <Social />
      </section>
    </main>
  );
};

export default ContactPage;
