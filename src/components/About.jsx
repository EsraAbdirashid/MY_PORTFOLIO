function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <span>ABOUT ME</span>
          <h2>Turning Ideas Into Digital Experiences</h2>
          <p>
            I am a passionate Web Developer and Graphic Designer who enjoys
            creating modern, clean and meaningful digital experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="about-grid">

          {/* About Text */}
          <div className="about-content">
            <span className="about-label">WHO I AM</span>

            <h3>
              I create websites and visual designs that make an impact.
            </h3>

            <p>
              I'm Isra Abdirashid, a Web Developer and Graphic Designer
              focused on building modern, responsive and user-friendly
              digital experiences.
            </p>

            <p>
              I combine creativity and technology to transform ideas into
              professional websites, strong visual identities and digital
              solutions that help businesses and individuals stand out.
            </p>

            <p>
              My goal is simple: create work that looks great, works smoothly
              and delivers real value.
            </p>

            {/* Stats */}
            <div className="about-stats">

              <div className="stat-item">
                <h4>2+</h4>
                <span>Years Experience</span>
              </div>

              <div className="stat-item">
                <h4>20+</h4>
                <span>Projects Completed</span>
              </div>

              <div className="stat-item">
                <h4>10+</h4>
                <span>Happy Clients</span>
              </div>

            </div>
          </div>


          {/* What I Do */}
          <div className="what-i-do">

            <span className="about-label">WHAT I DO</span>

            <div className="service-mini-card">

              <div className="service-mini-icon">
                &lt;/&gt;
              </div>

              <div>
                <h4>Web Development</h4>
                <p>
                  Modern and responsive websites built with clean,
                  efficient and user-friendly interfaces.
                </p>
              </div>

            </div>


            <div className="service-mini-card">

              <div className="service-mini-icon">
                ✦
              </div>

              <div>
                <h4>Graphic Design</h4>
                <p>
                  Creative visual designs, branding and digital materials
                  that give businesses a strong identity.
                </p>
              </div>

            </div>


            <div className="service-mini-card">

              <div className="service-mini-icon">
                ◈
              </div>

              <div>
                <h4>UI / UX Design</h4>
                <p>
                  Clean and intuitive interfaces designed to provide
                  smooth and enjoyable user experiences.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* My Skills */}
        <div className="skills-preview">

          <div className="skills-heading">
            <span className="about-label">MY SKILLS</span>
            <h3>Tools & Technologies I Work With</h3>
          </div>

          <div className="skills-list">

            <div className="skill-box">
              <span>HTML</span>
              <div className="skill-bar">
                <span style={{ width: "95%" }}></span>
              </div>
              <strong>95%</strong>
            </div>

            <div className="skill-box">
              <span>CSS</span>
              <div className="skill-bar">
                <span style={{ width: "90%" }}></span>
              </div>
              <strong>90%</strong>
            </div>

            <div className="skill-box">
              <span>JavaScript</span>
              <div className="skill-bar">
                <span style={{ width: "80%" }}></span>
              </div>
              <strong>80%</strong>
            </div>

            <div className="skill-box">
              <span>React</span>
              <div className="skill-bar">
                <span style={{ width: "75%" }}></span>
              </div>
              <strong>75%</strong>
            </div>

            <div className="skill-box">
              <span>Photoshop</span>
              <div className="skill-bar">
                <span style={{ width: "90%" }}></span>
              </div>
              <strong>90%</strong>
            </div>

            <div className="skill-box">
              <span>Illustrator</span>
              <div className="skill-bar">
                <span style={{ width: "85%" }}></span>
              </div>
              <strong>85%</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

