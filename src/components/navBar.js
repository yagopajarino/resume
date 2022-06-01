import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="navNombre spaced black">
        YAGO PAJARIÑO
      </Link>
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
    </nav>
  );
}
