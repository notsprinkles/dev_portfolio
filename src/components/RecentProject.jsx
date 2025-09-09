import '../styles/RecentProject.css';

export default function RecentProject({
  title,
  blurb,
  image = '/assets/whisper-crawler.png',
  repo = 'https://github.com/notsprinkles/whisper-crawler',
  demo, 
}) {
  return (
    <section className="recent" aria-labelledby="recent-title">
      <span className="badge">Recently completed</span>
      <h2 id="recent-title" className="recent-title">{title}</h2>

      <div className="recent-card">
        <img
          className="recent-image"
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          width="640"
          height="360"
        />
        <div className="recent-content">
          <p className="recent-blurb">{blurb}</p>
          <div className="recent-actions">
            <a className="btn" href={repo} target="_blank" rel="noopener noreferrer">Source ↗</a>
            {demo && (
              <a className="btn primary" href={demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
