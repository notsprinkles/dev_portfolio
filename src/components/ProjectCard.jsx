import '../styles/ProjectCard.css';

function ProjectCard({ title, description, tech = [], image, repo, demo }) {
  return (
    <article className="project-card">
      {image && (
        <img
          className="project-image"
          src={image}
          alt={title}
          loading="lazy"
          width="640"
          height="360"
        />
      )}

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        {tech?.length > 0 && (
          <ul className="project-tech" aria-label="Technologies used">
            {tech.map((t) => (
              <li key={t} className="project-pill">{t}</li>
            ))}
          </ul>
        )}

        <div className="project-links">
          {repo && (
            <a
              className="project-link"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source ↗
            </a>
          )}
          {demo && (
            <a
              className="project-link-primary"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
