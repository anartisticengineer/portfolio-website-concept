/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  const date: Date = new Date();

  return (
    <footer className="footer">
      <section className="footer__block">
        <h4>
          Like what you&apos;re seeing, and wanna help me out (financially)?
        </h4>
        <p>Conisder supporting me on Ko-fi!</p>
        <a href="https://ko-fi.com/K3K2S71S" target="_blank" rel="noopener noreferrer">
          <img
            height="36"
            style={{ border: '0px', height: '36px' }}
            src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"

            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </section>
      {/* From 2020 onwards */}
      <section className="footer__block">
        &copy; Justin Johnson
        {' '}
        {date.getFullYear() === 2020 ? 2020 : `2020 - ${date.getFullYear()}`}
      </section>
    </footer>
  );
};

export default Footer;
