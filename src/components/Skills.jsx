import { skills } from '../data/skills';
import '../styles/Skills.css';

function Skills() {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <article key={group} className="skill-block">
            <h3>{group}</h3>
            <ul>
              {items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
