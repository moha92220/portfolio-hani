import { Link, useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import GoldenCircle from '../components/GoldenCircle';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  const idx = projects.findIndex(p => p.slug === slug);

  return (
    <>
      {/* ── HERO ── */}
      <section className="project-hero">
        <div className="project-hero-left">
          <Link to="/" className="project-back">← Retour aux projets</Link>
          <div className="project-hero-cat">
            Projet {String(idx + 1).padStart(2, '0')} · DevOps
          </div>
          <h1 className="project-hero-title">{project.name}</h1>
          <p className="project-hero-tagline">{project.tagline}</p>
          <div className="project-stack">
            {project.stack.map((tech, i) => (
              <span key={i} className="stack-tag">{tech}</span>
            ))}
          </div>
        </div>
        <div className="project-hero-image">
          <img src={project.heroImage} alt={project.name} />
        </div>
      </section>

      {/* ── CONTEXTE ── */}
      <section className="project-body-section">
        <div className="container">
          <div className="eyebrow eyebrow--blue" style={{ marginBottom: '1.5rem' }}>
            Contexte
          </div>
          <div className="impact-panel" style={{ background: 'var(--white)' }}>
            <p>{project.context}</p>
          </div>
        </div>
      </section>

      {/* ── POURQUOI / COMMENT / QUOI ── */}
      <section className="project-body-section alt">
        <div className="container">
          <div className="eyebrow eyebrow--red" style={{ marginBottom: '1.5rem' }}>
            Pourquoi · Comment · Quoi
          </div>
          <GoldenCircle why={project.why} how={project.how} what={project.what} />
        </div>
      </section>

      {/* ── DÉTAILS ── */}
      <section className="project-body-section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Détails</div>
          <div className="detail-grid">
            <div className="detail-panel">
              <h3>Mon rôle</h3>
              <ul>
                {project.role.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="detail-panel">
              <h3>Points clés</h3>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="project-body-section alt">
        <div className="container">
          <div className="eyebrow eyebrow--black" style={{ marginBottom: '1.5rem' }}>
            Ce que ça montre
          </div>
          <div className="impact-panel">
            <p>{project.impact}</p>
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      {project.gallery?.length > 0 && (
        <section className="project-body-section">
          <div className="container">
            <div className="eyebrow eyebrow--blue" style={{ marginBottom: '1.5rem' }}>
              Galerie
            </div>
            <div className="gallery-grid">
              {project.gallery.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt={`${project.name} — ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RETOUR ── */}
      <section className="project-body-section" style={{ borderBottom: '3px solid var(--black)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" className="btn btn--red">← Retour aux projets</Link>
        </div>
      </section>
    </>
  );
}
