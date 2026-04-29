import { Link, useParams } from 'react-router-dom';
import GoldenCircle from '../components/GoldenCircle';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const projectNumber = String(projectIndex + 1).padStart(2, '0');

  if (!project) {
    return (
      <section className="section">
        <div className="container empty-state">
          <h1>Projet introuvable</h1>
          <p>Le projet demandé n’existe pas ou n’est plus disponible.</p>

          <Link to="/" className="button button-primary">
            Revenir à l’accueil
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="project-hero">
        <div className="container project-hero-grid">
          <div>
            <Link className="back-link" to="/">
              ← Retour à l’accueil
            </Link>

            <span className="eyebrow">Étude de cas — {projectNumber}</span>

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

          <div className="project-visual">
            <img src={project.heroImage} alt={project.name} />
          </div>
        </div>
      </section>

      <section className="section project-reading">
        <div className="container">
          <SectionTitle
            eyebrow="Lecture du projet"
            title="Le besoin, l’approche et le résultat"
            description="Une lecture simple pour comprendre pourquoi le projet existe, comment il a été construit et ce qu’il apporte concrètement."
            centered
          />

          <GoldenCircle
            why={project.why}
            how={project.how}
            what={project.what}
          />
        </div>
      </section>

      <section className="section project-details">
        <div className="container info-grid">
          <div className="info-card">
            <span className="panel-number">01</span>
            <h3>Mon rôle</h3>

            <ul>
              {project.role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <span className="panel-number">02</span>
            <h3>Points forts</h3>

            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container impact-panel">
          <span className="eyebrow">Ce que ça montre</span>

          <h2>Ce que ce projet dit de ma manière de travailler</h2>

          <p>{project.impact}</p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <SectionTitle
            eyebrow="Galerie"
            title="Aperçu du projet"
            centered
          />

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
