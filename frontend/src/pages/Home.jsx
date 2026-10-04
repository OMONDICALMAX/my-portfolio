import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Education from "../components/Education";
import testimonials from "../data/testimonials";
import services from "../data/services";
import TestimonialCard from "../components/TestimonialCard";
import ServiceCard from "../components/ServiceCard";
import Contact from "../components/Contact";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1>Calmax Omondi</h1>

          <h2>Software Engineer</h2>

          <p className="hero-description">
            I build reliable web applications and APIs that solve
            real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Building software with purpose.
          </h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a software engineering professional focused on
                building practical and reliable digital solutions.
                I enjoy turning ideas and real-world problems into
                functional web applications.
              </p>

              <p>
                My development journey has given me experience with
                both frontend and backend technologies, including
                React, JavaScript, Python, Flask, REST APIs, SQL,
                and Git.
              </p>

              <p>
                I'm continuously expanding my skills by building
                projects, working with modern development tools, and
                learning how to design software that is maintainable,
                scalable, and useful.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <span>01</span>
                <h3>Problem Solving</h3>
                <p>
                  Turning real-world requirements into practical
                  software solutions.
                </p>
              </div>

              <div className="highlight">
                <span>02</span>
                <h3>Full-Stack Development</h3>
                <p>
                  Building both user interfaces and backend APIs.
                </p>
              </div>

              <div className="highlight">
                <span>03</span>
                <h3>Continuous Learning</h3>
                <p>
                  Constantly improving my technical skills through
                  projects and hands-on development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className="skills">
  <div className="section-container">
    <p className="section-label">SKILLS</p>

    <h2 className="section-title">
      Technologies I work with.
    </h2>

    <div className="skills-grid">
      <div className="skill-category">
        <h3>Languages</h3>

        <div className="skill-list">
          <span>Python</span>
          <span>JavaScript</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Frontend</h3>

        <div className="skill-list">
          <span>React</span>
          <span>Vite</span>
          <span>React Router</span>
          <span>Responsive Design</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend</h3>

        <div className="skill-list">
          <span>Flask</span>
          <span>REST APIs</span>
          <span>SQLAlchemy</span>
          <span>JWT Authentication</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Databases</h3>

        <div className="skill-list">
          <span>SQLite</span>
          <span>PostgreSQL</span>
          <span>Database Design</span>
          <span>Flask-Migrate</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Tools & Workflow</h3>

        <div className="skill-list">
          <span>Git</span>
          <span>GitHub</span>
          <span>Linux</span>
          <span>WSL</span>
          <span>VS Code</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="projects">
  <div className="section-container">
    <p className="section-label">PROJECTS</p>

    <h2 className="section-title">
      Things I've built.
    </h2>

    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  </div>
</section>

{/* Experience Section */}
<section id="experience" className="experience">
  <div className="section-container">
    <p className="section-label">EXPERIENCE</p>

    <h2 className="section-title">
      My professional journey.
    </h2>

    <ExperienceTimeline />
  </div>
</section>

{/* Education Section */}
<section id="education" className="education">
  <div className="section-container">
    <p className="section-label">EDUCATION</p>

    <h2 className="section-title">
      Learning and growth.
    </h2>

    <Education />
  </div>
</section>

{/* Testimonials Section */}
<section id="testimonials" className="testimonials">
  <div className="section-container">
    <p className="section-label">TESTIMONIALS</p>

    <h2 className="section-title">
      What people say.
    </h2>

    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.name + testimonial.quote}
          testimonial={testimonial}
        />
      ))}
    </div>
  </div>
</section>

{/* Services Section */}
<section id="services" className="services">
  <div className="section-container">
    <p className="section-label">SERVICES</p>

    <h2 className="section-title">
      How I can help.
    </h2>

    <div className="services-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.number}
          service={service}
        />
      ))}
    </div>
  </div>
</section>

<Contact />




    </main>
  );
}

export default Home;