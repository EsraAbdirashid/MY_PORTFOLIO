import kitokitoImage from "../assets/kitokito-market.png.png";
import kitokitoImage from "../assets/Bilicsan-zoo.jpeg";


function Projects() {
  return (
    <section className="projects-page">
      <div className="container">

        {/* Back to Home */}
        <a href="/" className="back-home">
          ← Back to Home
        </a>

        {/* Page Heading */}
        <div className="projects-heading">
          <span>MY WORK</span>

          <h1>
            My Projects
          </h1>

          <p>
            Here are some of the projects I have worked on,
            combining development, design and creativity.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">

            {/* Project 1 */}
<article className="project-card">

  <div className="project-image">
    <img
      src={kitokitoImage}
      alt="Kitokito Market"
    />
  </div>

  <div className="project-content">

    <span className="project-category">
      Web Development
    </span>

    <h2>
      Kitokito Market
    </h2>

    <p>
      A modern and responsive e-commerce website designed
      to provide a smooth and easy shopping experience.
    </p>

    <div className="project-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>

    <div className="project-buttons">

      <a
        href="https://esraabdirashid.github.io/KitoKito_Market/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn primary"
      >
        Live Demo →
      </a>

      <a
        href="https://github.com/EsraAbdirashid/KitoKito_Market"
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn secondary"
      >
        GitHub
      </a>

    </div>

  </div>

</article>

            <article className="project-card">

  <div className="project-image">
    <img
      src={kitokitoImage}
      alt="Kitokito Market"
    />
  </div>

  <div className="project-content">

    <span className="project-category">
      Web Development
    </span>

    <h2>
      Kitokito Market
    </h2>

    <p>
      A modern and responsive e-commerce website designed
      to provide a smooth and easy shopping experience.
    </p>

    <div className="project-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>

    <div className="project-buttons">

      <a
        href="https://esraabdirashid.github.io/KitoKito_Market/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn primary"
      >
        Live Demo →
      </a>

      <a
        href="https://github.com/EsraAbdirashid/KitoKito_Market"
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn secondary"
      >
        GitHub
      </a>

    </div>

  </div>

</article>

          {/* Project 3 */}
          <article className="project-card">

            <div className="project-image">
              <span>PROJECT 03</span>
            </div>

            <div className="project-content">

              <span className="project-category">
                Design
              </span>

              <h2>
                Brand & Graphic Design
              </h2>

              <p>
                Creative visual designs focused on branding,
                social media graphics and digital identity.
              </p>

              <div className="project-tech">
                <span>Photoshop</span>
                <span>Illustrator</span>
                <span>CapCut</span>
              </div>

              <div className="project-buttons">
                <a href="#" className="project-btn primary">
                  View Project →
                </a>

              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Projects;