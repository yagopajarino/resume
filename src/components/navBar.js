import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  function hamburgerMenu() {
    return (
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <Link to="/about" className="navlink">
            ABOUT
          </Link>
          <Link to="/resume" className="navlink">
            RESUME
          </Link>
          <Link to="/projects" className="navlink">
            PROJECTS
          </Link>
          <Link to="/stats" className="navlink">
            STATS
          </Link>
          <Link to="/contact" className="navlink">
            CONTACT
          </Link>
        </ul>
      </div>
    );
  }

  function fullMenu() {
    return (
      <ul>
        <Link to="/about" className="navlink">
          ABOUT
        </Link>
        <Link to="/resume" className="navlink">
          RESUME
        </Link>
        <Link to="/projects" className="navlink">
          PROJECTS
        </Link>
        <Link to="/stats" className="navlink">
          STATS
        </Link>
        <Link to="/contact" className="navlink">
          CONTACT
        </Link>
      </ul>
    );
  }

  return (
    <nav>
      <Link to="/" className="navNombre spaced black">
        YAGO PAJARIÑO
      </Link>
      {window.innerWidth >= 1280 ? fullMenu() : hamburgerMenu()}
    </nav>
  );
}
