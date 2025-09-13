import SocialBar from './SocialBar';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">
        Hi, I’m <span className="accent">Jea</span> — Frontend Dev
      </h1>
<p className="coffee typewriter" aria-label="I like coffee">
  I like coffee ☕
</p>

      <p className="hero-sub">
        I build accessible, performant web apps in React. Dark-mode lover. Data-driven and detail-obsessed.
      </p>

      

      <SocialBar />
    </section>
  );
}
export default Hero;
