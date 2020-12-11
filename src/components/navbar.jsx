import React from "react";
import { Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/cyberart_by_justin_name_1.png";
import { useState } from "react";

const Navbar = () => {
  //toggle the dropdown menu on a mobile display using a state hook

  const [hidden, toggleHide] = useState(true);

  return (
    <nav className="navbar">
      {/*Visible in the mobile view */}
      <section className="navbar__header">
        <span>
          <Link exact to="/">
            <img src={logo} className="navbar__logo" alt="cyberart_by_justin" id="nav-logo" />
          </Link>
        </span>
        {/*Toggle hamburger button */}
        <span className="navbar__hamburger-btn" onClick={() => toggleHide(!hidden)}>
            <FontAwesomeIcon icon={hidden?faBars:faTimes} />
        </span>
      </section>
      {/*These should be hidden and collapsible in mobile view */}
      <span className={`navbar__links${hidden?'--hidden':''}`} id="navbar-links">
        {/*Gallery dropdown */}
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/*End of dropdown*/}
      </span>
    </nav>
  );
};

export default Navbar;
