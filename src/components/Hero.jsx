import profileImage from "../assets/portifolio-picture.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-content">

          <span className="hero-greeting">
            HELLO, I'M
          </span>

          <h1>
            Isra Abdirashid
          </h1>

          <h2>
            Web Developer & Graphic Designer
          </h2>

          <p className="hero-description">
            I build modern, responsive websites and create visual
            identities that help brands stand out and grow.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work
              <span>→</span>
            </a>

            <a href="/cv.pdf" className="secondary-btn" download>
              Download CV
              <span>↓</span>
            </a>

          </div>

          {/* Social Media */}
          <div className="social-area">

            <span className="social-title">
              FOLLOW ME
            </span>

              <div className="social-links">

  {/* Facebook */}
  <a href="#" aria-label="Facebook">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z"
      />
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="#" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.2 8.3H3V21h3.2V8.3ZM4.6 3A1.9 1.9 0 1 0 4.6 6.8 1.9 1.9 0 0 0 4.6 3ZM21 13.7c0-3.8-2-5.6-4.8-5.6-2.2 0-3.2 1.2-3.8 2v-1.8H9.2V21h3.2v-6.3c0-1.7.3-3.3 2.4-3.3 2.1 0 2.1 1.9 2.1 3.4V21H21v-7.3Z"
      />
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" aria-label="Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  </a>

  {/* GitHub */}
  <a href="#" aria-label="GitHub">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C15.5 3.9 16.5 4.2 16.5 4.2c.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
      />
    </svg>
  </a>

</div>

          </div>

        </div>


        {/* ================= RIGHT IMAGE ================= */}
        <div className="hero-visual">

          {/* Digital background */}
          <div className="hero-circle"></div>

          <div className="digital-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="digital-dots"></div>

          {/* Profile Image */}
          <div className="profile-wrapper">
            <img
              src={profileImage}
              alt="Isra Abdirashid"
              className="profile-image"
            />
          </div>

          {/* Freelance Card */}
          <div className="freelance-card">

            <div className="freelance-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="17"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M8 2V6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M3 9H21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M8 13H8.01"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <path
                  d="M12 13H12.01"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <path
                  d="M16 13H16.01"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="freelance-content">
              <h3>
                Available for
                <br />
                Freelance Projects
              </h3>

              <p>
                Let's bring your ideas
                <br />
                to life.
                <span>→</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;