import '../styles/HomePage.css';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectsScroller from '../components/ProjectsScroller';
import Reveal from '../components/Reveal';

function HomePage() {
  return (
    <div className="home-page">
      <Reveal><Hero /></Reveal>
      <Reveal delay={120}><Skills /></Reveal>
       <Reveal delay={200}><ProjectsScroller /></Reveal>
    </div>
  );
}

export default HomePage;
