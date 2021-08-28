import React, { FunctionComponent } from 'react';
import {
  faBehance, faEllo, faFacebookF, faGithub, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentContact from '../content/contact.json';
import SMLink from './smlink';

const Social: FunctionComponent = () => (
  <article className="social">
    <p className="social__text">
      {contentContact['sm-dialog']}
    </p>
    <span className="social__logos" id="sm-logos">
      <SMLink
        url="https://www.facebook.com/cyberartbyjustin"
        label="link to Justin's facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} id="icon-fb" />
      </SMLink>
      <SMLink
        url="https://www.instagram.com/cyberart_by_justin/"
        label="link to Justin's instagram"
      >
        <FontAwesomeIcon icon={faInstagram} id="icon-ig" />
      </SMLink>
      <SMLink
        url="https://www.behance.net/cyberartbyjustin"
        label="link to Justin's behance portfolio page"
      >
        <FontAwesomeIcon icon={faBehance} id="icon-behance" />
      </SMLink>
      <SMLink
        url="https://ello.co/cyberart_by_justin"
        label="link to Justin's ello page"
      >
        <FontAwesomeIcon icon={faEllo} id="icon-ello" />
      </SMLink>
      <SMLink
        url="https://github.com/anartisticengineer"
        label="link to Justin's github page"
      >
        <FontAwesomeIcon icon={faGithub} id="icon-github" />
      </SMLink>
    </span>
  </article>
);

export default Social;
