import { useMemo } from 'react';
import '../styles/ProjectFilters.css';

function ProjectFilters({ projects, query, setQuery, tech, setTech }) {
  const techOptions = useMemo(() => {
    const s = new Set();
    projects.forEach(p => (p.tech || []).forEach(t => s.add(t)));
    return Array.from(s).sort();
  }, [projects]);

  return (
    <div className="filters">
      <input
        className="filter-input"
        type="search"
        placeholder="Search projects…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search projects"
      />
      <select
        className="filter-select"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
        aria-label="Filter by technology"
      >
        <option value="">All technologies</option>
        {techOptions.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  );
}

export default ProjectFilters;
