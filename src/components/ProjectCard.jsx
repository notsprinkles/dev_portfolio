import '../styles/ProjectCard.css';
import OutboundLink from './OutboundLink.jsx';

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

        
        <div className="actions">
  <OutboundLink href={repo} label={`${title}_repo`} target="_blank" rel="noopener noreferrer" className="btn">
    Source ↗
  </OutboundLink>
  {demo && (
    <OutboundLink href={demo} label={`${title}_demo`} target="_blank" rel="noopener noreferrer" className="btn primary">
      Live Demo ↗
    </OutboundLink>
  )}
</div>
      </div>
    </article>
  );
}

export default ProjectCard;
