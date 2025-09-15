import '../styles/AboutPage.css';
import { experience } from '../data/experience';
import { certifications } from '../data/certifications';
import Reveal from '../components/Reveal';

function AboutPage() {
  return (
    <div className="about-page">
      <Reveal as="header">
        <h1>About Me</h1>
        <p className="lede">
          I’m Jea Laraia — a frontend developer who ships clean, accessible, and
          delightful interfaces in React. Dark-mode enthusiast, security-curious, and
          obsessed with smooth UX and tiny details.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <section className="bio-card">
          <img
            className="avatar"
            src="/assets/avatar.jpg"
            alt="Jea Laraia headshot"
            loading="lazy"
            width="160"
            height="160"
          />
          <div className="bio-copy">
            <h2>Who I Am</h2>
            <p>
              I build fast, accessible web apps with React + Vite, and I love
              polishing the last 10%: clear states, keyboard flows, and
              micro-interactions that feel alive (without hurting performance).
            </p>
            <ul className="highlights">
              <li>Accessibility-minded (a11y, ARIA, focus rings)</li>
              <li>Design tokens, consistent theming (#da26da 💜)</li>
              <li>DX: clean component APIs, predictable file structure</li>
              <li>Security curiosity: DOM traps, content scanning, safe UX</li>
            </ul>

            <div className="bio-actions">
              <a className="btn primary" href="/resume" aria-label="View resume">View Resume</a>
              <a className="btn" href="/#projects">See Projects</a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="stats">
          <div className="stat">
            <div className="stat-num">25+</div>
            <div className="stat-label">React Projects</div>
          </div>
          <div className="stat">
            <div className="stat-num">95+</div>
            <div className="stat-label">Lighthouse Perf/A11y</div>
          </div>
          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Hackathon Sprints</div>
          </div>
          <div className="stat">
            <div className="stat-num">∞</div>
            <div className="stat-label">Purple Energy</div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={160}>
        <section className="tooling">
          <h2>Toolbox</h2>
          <ul className="pills">
            {[
              'React', 'Vite', 'React Router', 'Node (basics)',
              'Puppeteer', 'Git/GitHub', 'Figma', 'Chart.js',
              'ARIA/a11y', 'Netlify', 'Vercel'
            ].map(t => <li key={t} className="pill">{t}</li>)}
          </ul>
        </section>
      </Reveal>

      <Reveal delay={200}>
        <section className="timeline">
          <h2>Experience & Projects</h2>
          <ol className="timeline-list">
            {experience.map((item) => (
              <li key={item.title} className="timeline-item">
                <div className="tl-dot" aria-hidden="true" />
                <div className="tl-content">
                  <div className="tl-head">
                    <h3>{item.title}</h3>
                    <span className="tl-period">{item.period}</span>
                  </div>
                  <ul className="tl-bullets">
                    {item.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  {item.links?.length > 0 && (
                    <div className="tl-links">
                      {item.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal delay={240}>
        <section className="certs">
          <h2>Certifications</h2>
          <ul className="cert-list">
            {certifications.map((c) => <li key={c.name}>✅ {c.name}</li>)}
          </ul>
        </section>
      </Reveal>

      <Reveal delay={280}>
        <section className="about-cta">
          <h2>Let’s Build Something People Love</h2>
          <p>
            I’m looking for a team that values accessibility, craftsmanship, and learning.
            Need a frontend who cares about details and can ship fast?
          </p>
          <div className="bio-actions">
            <a className="btn primary" href="j.laraia@icloud.com">Email Me</a>
            <a className="btn" href="https://github.com/notsprinkles" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

export default AboutPage;
