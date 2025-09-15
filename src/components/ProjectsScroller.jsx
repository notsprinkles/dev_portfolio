import { projects } from "../data/projects";
import "../styles/ProjectsScroller.css";

export default function ProjectsScroller() {
  return (
    <section className="projects-scroller" aria-label="Featured Projects">
      <h2 className="scroller-title">Projects</h2>

      <div className="scroller-container">
        {projects.map((proj, i) => (
          <div key={i} className="scroller-card">
            <img
              src={proj.image}
              alt={`${proj.title} preview`}
              className="scroller-img"
            />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="scroller-actions">
              <a className="btn" href={proj.repo} target="_blank" rel="noopener noreferrer">Source ↗</a>
              {proj.demo && (
                <a className="btn primary" href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
