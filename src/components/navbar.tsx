/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/cyberart_by_justin_name_1.png';
import utils from '../scripts/utilities';

const Navbar: FunctionComponent = () => {
  // toggle the dropdown menu on a mobile display using a state hook
  const [hidden, toggleHide] = useState(true);
  const location = useLocation();

  useEffect(() => {
    toggleHide(true);
  }, [location.pathname]);

  const { navLinksHidden } = utils;

  return (
    <>
      <nav className="navbar">
        {/* Visible in the mobile view */}
        <section className="navbar__header">
          <img src={logo} className="navbar__logo" alt="cyberart_by_justin" id="nav-logo" />
          {/* Toggle hamburger button */}
          <button
            className="navbar__hamburger-btn"
            type="button"
            aria-label="menu toggle button"
            onClick={() => toggleHide(!hidden)}
          >
            <FontAwesomeIcon icon={hidden ? faBars : faTimes} />
          </button>
        </section>
        {/* These should be hidden and collapsible in mobile view */}
        <ul className={navLinksHidden(hidden)} id="navbar-links">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {/* End of dropdown */}
        </ul>
      </nav>
      {!hidden ? (
        <button type="button" className="mobile-navbar-filler" onClick={() => toggleHide(true)} />
      ) : null}
    </>
  );
};

export default Navbar;
