function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading contact-heading">
          <span>CONTACT ME</span>

          <h2>
            Let's Work Together
          </h2>

          <p>
            Have a project in mind or want to work together?
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <span className="about-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's bring your ideas to life.
            </h3>

            <p>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {/* Email */}
            <a
              href="mailto:your@email.com"
              className="contact-info-item"
            >
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>Email</span>
                <strong>your@email.com</strong>
              </div>
            </a>

            {/* Location */}
            <div className="contact-info-item">
              <div className="contact-icon">
                ◉
              </div>

              <div>
                <span>Location</span>
                <strong>Jigjiga, Ethiopia</strong>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-info-item">
              <div className="contact-icon">
                ✓
              </div>

              <div>
                <span>Availability</span>
                <strong>Available for Freelance</strong>
              </div>
            </div>

          </div>


          {/* Contact Form */}
          <div className="contact-form-wrapper">

            <form className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

              </div>


              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  placeholder="What is your project about?"
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;