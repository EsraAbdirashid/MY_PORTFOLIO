import logo from "../assets/logowhite.png.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <img src={logo} alt="ESRA DIGITAL" className="logo-image" />
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Hire Me */}
        <a href="#contact" className="hire-btn">
          Hire Me
          <span>→</span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;