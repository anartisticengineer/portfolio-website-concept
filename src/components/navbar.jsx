import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/cyberart_by_justin_name_1.png";

const Navbar = () => {
  //toggle the dropdown menu on a mobile display
  const dropDown = () => {
    let x = document.getElementById("theNavBar");
    if (x.className === "nav-links") {
      x.className += " responsive";
    } else {
      x.className = "nav-links";
    }
  };
  const navStyle = { color: "white" };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="navbar__logo" alt="cyberart_by_justin" id="nav-logo" />
      </Link>
      {/*These shoudl be hidden and collapsible in mobile view */}
      <div className="navbar__links" id="theNavBar">
        {/*Gallery dropdown */}
        <Link to="/gallery">Gallery</Link>
        {/*End of dropdown*/}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a
          href="javascript:void(0);"
          onClick={dropDown}
          className="icon"
          id="dropdown-icon"
          style={navStyle}
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
