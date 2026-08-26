import { useState } from "react";
import logo from "../assets/logowhite.png.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="ESRA DIGITAL"
            className="logo-image"
          />
        </a>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="active" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="mobile-hire-btn"
            onClick={closeMenu}
          >
            Hire Me
            <span>→</span>
          </a>
        </nav>

        {/* Desktop Hire Me */}
        <a href="#contact" className="hire-btn">
          Hire Me
          <span>→</span>
        </a>

        {/* Hamburger */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;