import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="nav-bar">
      <Link style={navStyle} to="/">
        Logo
      </Link>
      <div className="nav-links" id="theNavBar">
        <Link style={navStyle} to="/">
          Home
        </Link>
        <Link style={navStyle} to="/about">
          About
        </Link>
        <Link style={navStyle} to="/contact">
          Contact
        </Link>
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
