import { Link, useParams } from 'react-router-dom';
import GoldenCircle from '../components/GoldenCircle';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="empty-page">
        <div className="container">
          <h1>Projet introuvable</h1>
          <p>Le projet demandé n’existe pas ou n’est plus disponible.</p>

          <Link to="/" className="button button-primary">
            Revenir à l’accueil
          </Link>
        </div>
      </section>
    );
  }

  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const projectNumber = String(projectIndex + 1).padStart(2, '0');

  return (
    <>
      <section className="project-article-hero">
        <div className="container article-hero-grid">
          <div>
            <Link className="back-link" to="/">
              ← Retour à l’accueil
            </Link>

            <span className="project-number">Projet {projectNumber}</span>

            <h1>{project.name}</h1>

            <p className="project-tagline">{project.tagline}</p>
            <p>{project.context}</p>

            <div className="tag-list large">
              {project.stack.map((item) => (
                <span key={item} className="tag-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="article-hero-image">
            <img src={project.heroImage} alt={project.name} />
          </div>
        </div>
      </section>

      <section className="project-reading">
        <div className="container">
          <div className="section-heading centered">
            <span className="editorial-label">Lecture du projet</span>
            <h2>Le besoin, l’approche et le résultat.</h2>
            <p>
              Une lecture simple pour comprendre pourquoi le projet existe,
              comment il a été construit et ce qu’il apporte concrètement.
            </p>
          </div>

          <GoldenCircle
            why={project.why}
            how={project.how}
            what={project.what}
          />
        </div>
      </section>

      <section className="project-details">
        <div className="container details-grid">
          <article className="detail-card">
            <span className="project-number">01</span>
            <h2>Mon rôle</h2>

            <ul>
              {project.role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card">
            <span className="project-number">02</span>
            <h2>Points forts</h2>

            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="impact-section">
        <div className="container impact-panel">
          <span className="editorial-label">Ce que ça montre</span>

          <h2>Ce que ce projet dit de ma manière de travailler.</h2>

          <p>{project.impact}</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="editorial-label">Galerie</span>
            <h2>Aperçu du projet.</h2>
          </div>

          <div className="gallery-grid">
            {project.gallery.map((image) => (
              <div className="gallery-card" key={image}>
                <img src={image} alt={project.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
