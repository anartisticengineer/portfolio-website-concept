/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/cyberart_by_justin_name_1.png';
import utils from '../scripts/utilities';

const Navbar: FunctionComponent = () => {
  // toggle the dropdown menu on a mobile display using a state hook
  const [hidden, toggleHide] = useState(true);

  return (
    <nav className="navbar">
      {/* Visible in the mobile view */}
      <section className="navbar__header">
        <img src={logo} className="navbar__logo" alt="cyberart_by_justin" id="nav-logo"/>
        {/* Toggle hamburger button */}
        <span className="navbar__hamburger-btn" onClick={() => toggleHide(!hidden)}>
          <FontAwesomeIcon icon={hidden ? faBars : faTimes} />
        </span>
      </section>
      {/* These should be hidden and collapsible in mobile view */}
      <span className={utils.navLinksHidden(hidden)} id="navbar-links">
        {/* Gallery dropdown */}
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* End of dropdown */}
      </span>
    </nav>
  );
};

export default Navbar;
