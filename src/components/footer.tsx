/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import utils from '../scripts/utilities';

const Footer: FunctionComponent = () => (
  <footer className="footer">
    <section className="footer__block">
      <h4>Like what you&apos;re seeing, and wanna help me out (financially)?</h4>
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
    <section className="footer__block">{utils.footerCopyrights()}</section>
  </footer>
);

export default Footer;
