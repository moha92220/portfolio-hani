import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { profile, projects, skills } from '../data/projects';
import { aboutSections } from '../data/about';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const target = sessionStorage.getItem('portfolio-target-section');

    if (target) {
      sessionStorage.removeItem('portfolio-target-section');

      setTimeout(() => {
        const element = document.getElementById(target);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    }
  }, []);

  return (
    <>
      <section className="hero-section" id="hero">
        <div className="container hero-content">
          <span className="hero-kicker">Portfolio — Recherche de CDI</span>

          <h1 className="hero-title">
            Ingénieur DevOps qui conçoit des outils utiles, fiables et adoptés.
          </h1>

          <p className="hero-intro">
            Actuellement ingénieur DevOps en alternance au Crédit Agricole, je travaille autour
            du cloud, de Kubernetes, de l’automatisation, de l’observabilité et du FinOps.
            J’aime partir d’un besoin terrain, créer une solution claire, puis la rendre utile
            au quotidien pour les équipes.
          </p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={() => scrollToSection('projects')}
            >
              Découvrir mes projets
            </button>

            <a
              className="button button-secondary"
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="container portfolio-strip">
          {projects.map((project, index) => (
            <LinkStrip project={project} index={index} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="editorial-section" id="about">
        <div className="container editorial-grid">
          <div>
            <span className="editorial-label">Profil</span>
            <h2 className="editorial-title">
              Un profil DevOps polyvalent, orienté cloud, Kubernetes et création de valeur.
            </h2>
          </div>

          <div className="editorial-text">
            {aboutSections.positioning.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="values-list">
              {profile.values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <span className="editorial-label">Réalisations</span>
            <h2>Des projets conçus pour être utilisés.</h2>
            <p>
              FinOps, testeur de flux, observabilité, automatisation : chaque projet part
              d’un besoin concret et cherche à simplifier le travail des équipes.
            </p>
          </div>

          <div className="showcase-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="human-section">
        <div className="container human-grid">
          <article className="human-card">
            <span className="editorial-label">{aboutSections.motivation.eyebrow}</span>
            <h2>{aboutSections.motivation.title}</h2>

            {aboutSections.motivation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="human-card">
            <span className="editorial-label">{aboutSections.teamwork.eyebrow}</span>
            <h2>{aboutSections.teamwork.title}</h2>

            {aboutSections.teamwork.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      <section className="skills-section">
        <div className="container skills-layout">
          <div>
            <span className="editorial-label">Compétences</span>
            <h2>Une base technique large, avec une trajectoire cloud et Kubernetes.</h2>
            <p>
              Mon objectif est de continuer à apprendre, proposer des solutions,
              monter en responsabilité et évoluer vers un rôle de Tech Lead DevOps.
            </p>
          </div>

          <aside className="skills-panel">
            <div className="skills-cloud">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mini-boxes">
              <div className="mini-box">
                <strong>Orientation</strong>
                <span>Cloud, Kubernetes, automatisation et fiabilité.</span>
              </div>

              <div className="mini-box">
                <strong>Environnement</strong>
                <span>Grand groupe bancaire, production, sécurité et conformité.</span>
              </div>

              <div className="mini-box">
                <strong>Objectif</strong>
                <span>CDI DevOps avec trajectoire Tech Lead.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-card">
          <span className="editorial-label">Contact</span>

          <h2>Discutons de la suite.</h2>

          <p>
            Si vous recherchez un profil DevOps curieux, impliqué, humain et capable
            de transformer des besoins opérationnels en solutions concrètes,
            je serai ravi d’échanger avec vous.
          </p>

          <div className="cta-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              M’écrire
            </a>

            <a
              className="button button-secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Voir LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function LinkStrip({ project, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <a className="strip-panel" href={`#/projets/${project.slug}`}>
      <img src={project.coverImage} alt={project.name} />

      <div>
        <span>{number}</span>
        <strong>{project.name}</strong>
      </div>
    </a>
  );
}
