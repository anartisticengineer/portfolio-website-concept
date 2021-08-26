import React, { FunctionComponent } from 'react';
import { faBehance, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentContact from '../content/contact.json';

const Social: FunctionComponent = () => (
  <article className="social">
    <p className="social__text">
      {contentContact['sm-dialog']}
    </p>
    <span className="social__logos" id="sm-logos">
      <a href="https://www.facebook.com/cyberartbyjustin" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} id="icon-fb" />
      </a>
      <a
        href="https://www.instagram.com/cyberart_by_justin/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} id="icon-ig" />
      </a>
      <a href="https://www.behance.net/cyberartbyjustin" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={faBehance} id="icon-behance" />
      </a>
    </span>
  </article>
);

export default Social;
