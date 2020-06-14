import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = { color: "white" };

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
