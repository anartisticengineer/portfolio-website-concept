import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/cyberart_by_justin_name_1.png";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  //toggle the dropdown menu on a mobile display using a state hook

  const [hidden, toggleHide] = useState(true);

  useEffect(() => {
    document.getElementById('hamburger-btn').addEventListener('click',() => {toggleHide(!hidden)});
  });

  return (
    <nav className="navbar">
      {/*Visible in the mobile view */}
      <section className="navbar__header">
        <span>
          <Link to="/">
            <img src={logo} className="navbar__logo" alt="cyberart_by_justin" id="nav-logo" />
          </Link>
        </span>
        {/*Toggle hamburger button */}
        <span className="navbar__hamburger-btn">
          <a
              href="javascript:void(0);"
              id="hamburger-btn"
            >
            <FontAwesomeIcon icon={faBars} />
          </a>
        </span>
      </section>
      {/*These should be hidden and collapsible in mobile view */}
      <span className={`navbar__links${hidden?'--hidden':''}`} id="navbar-links">
        {/*Gallery dropdown */}
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/*End of dropdown*/}
      </span>
    </nav>
  );
};

export default Navbar;
