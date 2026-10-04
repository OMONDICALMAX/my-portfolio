function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <p className="section-label">CONTACT</p>

        <h2>Let’s build something useful.</h2>

        <p className="contact-intro">
          Have a project, business idea, or problem that could benefit from
          technology? I’d be happy to hear about it and explore how I can help.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in touch</h3>

            <p>
              I’m interested in opportunities where I can use software
              engineering, problem-solving, and customer-focused thinking to
              create practical solutions.
            </p>

            <div className="contact-links">
              <a href="mailto:your-email@example.com">
                Email Me
              </a>

              <a
                href="https://github.com/OMONDICALMAX"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can I help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;