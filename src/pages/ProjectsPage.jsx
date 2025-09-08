import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import ProjectFilters from '../components/ProjectFilters.jsx';
import '../styles/ProjectsPage.css';
import Reveal from '../components/Reveal';

function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [tech, setTech] = useState('');

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const matchesTech =
        !tech || (p.tech || []).includes(tech);
      return matchesQuery && matchesTech;
    });
  }, [query, tech]);

  return (
    <section className="projects-page" id="projects">
      <h1>Projects</h1>
      <p>A selection of things I’ve built recently.</p>

      <ProjectFilters
        projects={projects}
        query={query}
        setQuery={setQuery}
        tech={tech}
        setTech={setTech}
      />

      <div className="projects-grid">
  {filtered.map((p, i) => (
    <Reveal key={p.title} delay={i * 60}>
      <ProjectCard {...p} />
    </Reveal>
  ))}
</div>
      {filtered.length === 0 && <p style={{ opacity: 0.7 }}>No results. Try clearing filters.</p>}
    </section>
  );
}

export default ProjectsPage;
