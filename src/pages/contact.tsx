/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, FunctionComponent } from 'react';
import Form from '../components/form';
import Social from '../components/social';
import utils from '../scripts/utilities';

import contactContent from '../content/contact.json';

const ContactPage: FunctionComponent = () => {
  useEffect(() => {
    document.title = 'Contact - cyberart_by_justin';
  }, []);

  const { fadeUp } = utils;

  return (
    <main className="container container--contact">
      <h1 className={`container__title ${fadeUp()}`}>Contact</h1>
      <p>
        {contactContent['get-in-touch']}
      </p>
      <section className={fadeUp()}>
        <article>
          <Form />
        </article>
        <Social />
      </section>
    </main>
  );
};

export default ContactPage;
