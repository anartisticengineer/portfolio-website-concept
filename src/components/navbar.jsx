import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/cyberart_by_justin_name_1.png";
import { useEffect } from "react";

const Navbar = () => {
  //toggle the dropdown menu on a mobile display
  const dropDown = () => {
    console.log('toggle');
    let x = document.getElementById("navbar-links");
    if (x.className === "navbar__links--hidden") {
      x.className = "navbar__links"; //if it's hidden, open it up!
    } else {
      x.className = "navbar__links--hidden"; //else hide them
    }
  };

  useEffect(() => {
    if (window.innerWidth > 480){
      document.getElementById('navbar-links').className = "navbar__links";
    }
    document.getElementById('hamburger-btn').addEventListener('click',dropDown);
  });

  const navStyle = { color: "white" };

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
              style={navStyle}
            >
            <FontAwesomeIcon icon={faBars} />
          </a>
        </span>
      </section>
      {/*These should be hidden and collapsible in mobile view */}
      <span className="navbar__links--hidden" id="navbar-links">
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
