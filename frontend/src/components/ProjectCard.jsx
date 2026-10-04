function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <p className="project-category">{project.category}</p>

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github}>GitHub</a>

        <a href={project.live}>Live Demo</a>
      </div>
    </article>
  );
}

export default ProjectCard;