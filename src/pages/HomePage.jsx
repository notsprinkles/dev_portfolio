import '../styles/HomePage.css';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectsScroller from '../components/ProjectsScroller';
import Reveal from '../components/Reveal';
import { useEffect } from 'react';
import { trackEvent } from '../utils/trackEvent';


function ScrollTracker() {
  useEffect(() => {
    let sent = false;
    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop + clientHeight) / scrollHeight;
      if (!sent && pct > 0.95) {
        trackEvent('scroll_bottom', { pct: Math.round(pct * 100) });
        sent = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}

function HomePage() {
  return (
    <div className="home-page">
      <Reveal><Hero /></Reveal>
      <Reveal delay={120}><Skills /></Reveal>
      <Reveal delay={200}><ProjectsScroller /></Reveal>
      <ScrollTracker />
    </div>
  );
}

export default HomePage;

