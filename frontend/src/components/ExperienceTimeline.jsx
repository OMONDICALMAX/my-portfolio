function ExperienceTimeline() {
  const experience = [
    {
      period: "2025 — Present",
      title: "Direct Sales Representative",
      organization: "NCBA",
      description:
        "Worked directly with customers to understand their needs, explain products and services, solve problems, and build strong customer relationships.",
      skills: [
        "Customer Communication",
        "Needs Analysis",
        "Sales",
        "Problem Solving",
      ],
    },
    {
      period: "2026 — Present",
      title: "Software Engineering",
      organization: "Moringa School",
      description:
        "Developing practical software engineering skills through hands-on projects involving frontend development, backend APIs, databases, authentication, testing, and version control.",
      skills: [
        "React",
        "Python",
        "Flask",
        "SQL",
        "Git",
      ],
    },
  ];

  return (
    <div className="timeline">
      {experience.map((item) => (
        <article className="timeline-item" key={item.title}>
          <div className="timeline-period">
            {item.period}
          </div>

          <div className="timeline-content">
            <h3>{item.title}</h3>

            <p className="timeline-organization">
              {item.organization}
            </p>

            <p className="timeline-description">
              {item.description}
            </p>

            <div className="timeline-skills">
              {item.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ExperienceTimeline;