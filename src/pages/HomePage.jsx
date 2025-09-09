import '../styles/HomePage.css';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import RecentProject from '../components/RecentProject.jsx';
import Reveal from '../components/Reveal';

function HomePage() {
  return (
    <div className="home-page">
      <Reveal><Hero /></Reveal>
      <Reveal delay={120}><Skills /></Reveal>

      <Reveal delay={200}>
        <RecentProject
          title="Whisper Crawler"
          blurb="A Node + Puppeteer scanner that detects ARIA “whisper traps” (invisible announcements) and risky roles. Exports JSON/Markdown reports to help teams fix accessibility regressions fast."
          repo="https://github.com/notsprinkles"       
          image="/assets/whisper-crawler.png"       
        />
      </Reveal>
    </div>
  );
}

export default HomePage;
