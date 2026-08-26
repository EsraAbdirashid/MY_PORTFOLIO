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

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="GitHub">
                ◉
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