import React, { useRef } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

function NavBar() {
  const mobileMenuRef = useRef();

  const toggleMenu = () => {
    mobileMenuRef.current.classList.toggle("open"); // 👈 toggle "open" class
  };

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktopmenu">
        <li><Link to="home" activeClass="active" spy smooth duration={500}>Home</Link></li>
        <li><Link to="about" activeClass="active" spy smooth duration={500}>About</Link></li>
        <li><Link to="project" activeClass="active" spy smooth duration={500}>Project</Link></li>
        <li><Link to="contact" activeClass="active" spy smooth duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className="mobilemenu" ref={mobileMenuRef}>
        <li><Link onClick={toggleMenu} to="home" activeClass="active" spy smooth duration={500}>Home</Link></li>
        <li><Link onClick={toggleMenu} to="about" activeClass="active" spy smooth duration={500}>About</Link></li>
        <li><Link onClick={toggleMenu} to="project" activeClass="active" spy smooth duration={500}>Project</Link></li>
        <li><Link onClick={toggleMenu} to="contact" activeClass="active" spy smooth duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
