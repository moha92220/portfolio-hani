import { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const INTERVAL = 5000;

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const p = projects[current];
  if (!p) return null;

  return (
    <div
      className="comic-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-stage">
        <div className="carousel-img-wrap">
          <img src={p.coverImage} alt={p.name} key={p.slug} />
          <div className="carousel-num-badge" aria-hidden="true">
            {String(current + 1).padStart(2, '0')}
          </div>
        </div>

        <div className="carousel-content">
          <span className="carousel-cat">
            {p.stack[0]} · {p.stack[1]}
          </span>
          <h3>{p.name}</h3>
          <p>{p.shortDescription}</p>
          <div className="carousel-tags">
            {p.stack.slice(0, 4).map((tech, i) => (
              <span key={tech} className={`tag${i % 2 === 0 ? ' tag--blue' : ''}`}>
                {tech}
              </span>
            ))}
          </div>
          <Link to={`/projets/${p.slug}`} className="carousel-cta">
            Voir le projet →
          </Link>
        </div>
      </div>

      <div className="carousel-nav">
        <button className="carousel-arrow" onClick={prev} aria-label="Projet précédent">
          ←
        </button>
        <div className="carousel-dots" role="tablist">
          {projects.map((proj, i) => (
            <button
              key={proj.slug}
              role="tab"
              aria-selected={i === current}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Projet ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={next} aria-label="Projet suivant">
          →
        </button>
      </div>

      <div className="carousel-thumbs">
        {projects.map((proj, i) => (
          <button
            key={proj.slug}
            className={`c-thumb${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          >
            <span className="c-thumb-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="c-thumb-name">{proj.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
