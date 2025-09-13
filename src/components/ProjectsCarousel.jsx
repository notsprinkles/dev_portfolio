import Slider from "react-slick";
import { projects } from '../data/projects.js';
import "../styles/ProjectsCarousel.css";

export default function ProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,   
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section className="projects-carousel" aria-label="Featured Projects">
      <span className="badge">Featured Projects</span>
      <Slider {...settings}>
        {projects.map((proj, i) => (
          <div key={i} className="carousel-slide">
            <img
              src={proj.image}
              alt={`${proj.title} preview`}
              className="carousel-img"
            />
            <div className="carousel-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="carousel-actions">
                <a className="btn" href={proj.repo} target="_blank" rel="noopener noreferrer">Source ↗</a>
                {proj.demo && (
                  <a className="btn primary" href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
