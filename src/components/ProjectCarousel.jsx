import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeProject = useMemo(() => projects[activeIndex], [projects, activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (paused || projects.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [paused, projects.length]);

  if (!activeProject) return null;

  return (
    <section
      className="project-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        onClick={goToPrevious}
        aria-label="Projet précédent"
      >
        ‹
      </button>

      <div className="carousel-stage">
        <div className="carousel-image">
          <img src={activeProject.coverImage} alt={activeProject.name} />
        </div>

        <div className="carousel-content">
          <div className="carousel-meta">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <span>{activeProject.stack[0]}</span>
          </div>

          <h3>{activeProject.name}</h3>

          <p>{activeProject.shortDescription}</p>

          <div className="tag-list">
            {activeProject.stack.slice(0, 5).map((item) => (
              <span className="tag-pill" key={item}>
                {item}
              </span>
            ))}
          </div>

          <Link className="carousel-link" to={`/projets/${activeProject.slug}`}>
            Voir le projet →
          </Link>
        </div>
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        onClick={goToNext}
        aria-label="Projet suivant"
      >
        ›
      </button>

      <div className="carousel-dots">
        {projects.map((project, index) => (
          <button
            type="button"
            key={project.slug}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Voir ${project.name}`}
          />
        ))}
      </div>

      <div className="carousel-thumbs">
        {projects.map((project, index) => (
          <button
            type="button"
            key={project.slug}
            className={`carousel-thumb ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{project.name}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}
