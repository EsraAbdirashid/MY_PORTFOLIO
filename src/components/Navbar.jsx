import { useState } from "react";

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
          <div className="logo-icon">
            <span></span>
            <span></span>
          </div>

          <div className="logo-text">
            ESRA DIGITAL
          </div>
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

          {/* Hire Me - Mobile */}
          <a
            href="#contact"
            className="mobile-hire-btn"
            onClick={closeMenu}
          >
            Hire Me
            <span>→</span>
          </a>
        </nav>

        {/* Hire Me - Desktop */}
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