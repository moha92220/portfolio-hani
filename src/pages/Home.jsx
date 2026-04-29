import { useEffect } from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import { profile, projects, skills } from '../data/projects';
import { aboutSections } from '../data/about';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const target = sessionStorage.getItem('portfolio-target-section');

    if (target) {
      sessionStorage.removeItem('portfolio-target-section');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  }, []);

  return (
    <>
      <section className="hero-section" id="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="hero-kicker">Portfolio — Ingénieur DevOps</span>

            <h1>
              Un ingénieur DevOps qui apporte de la clarté, de l’automatisation et de la fiabilité.
            </h1>

            <p className="hero-intro">
              Je suis Hani, ingénieur DevOps orienté cloud et Kubernetes.
              J’aime créer, automatiser, fiabiliser et surtout construire des solutions
              que les équipes utilisent vraiment.
            </p>

            <p className="hero-intro secondary">
              Mon terrain : la production réelle, les déploiements, l’observabilité,
              le FinOps, GitLab CI/CD, GCP et Kubernetes. Mon objectif : continuer
              à apprendre, prendre des responsabilités et évoluer vers un rôle de
              Tech Lead DevOps.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() => scrollToSection('profile')}
              >
                Comprendre mon profil
              </button>

              <button
                className="button button-secondary"
                type="button"
                onClick={() => scrollToSection('projects')}
              >
                Voir mes projets
              </button>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="portrait-card">
              <img src={profile.heroImage} alt={profile.name} />
            </div>

            <div className="hero-note">
              <span>Ce que je veux apporter</span>
              <p>
                De l’énergie, du sérieux, une vraie curiosité technique et une capacité
                à transformer une idée en solution concrète.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="profile-section" id="profile">
        <div className="container profile-grid">
          <div className="section-heading sticky-heading">
            <span className="section-kicker">{aboutSections.positioning.eyebrow}</span>
            <h2>{aboutSections.positioning.title}</h2>
          </div>

          <div className="profile-text">
            {aboutSections.positioning.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="contribution-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">{aboutSections.contribution.eyebrow}</span>
            <h2>{aboutSections.contribution.title}</h2>
          </div>

          <div className="contribution-grid">
            {aboutSections.contribution.cards.map((card, index) => (
              <article className="contribution-card" key={card.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mindset-section">
        <div className="container mindset-grid">
          <article className="mindset-card">
            <span className="section-kicker">{aboutSections.creation.eyebrow}</span>
            <h2>{aboutSections.creation.title}</h2>

            {aboutSections.creation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="mindset-card">
            <span className="section-kicker">{aboutSections.mindset.eyebrow}</span>
            <h2>{aboutSections.mindset.title}</h2>

            {aboutSections.mindset.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Projets & réalisations</span>
            <h2>Un projet après l’autre, une preuve après l’autre.</h2>
            <p>
              Mes projets évoluent avec mon parcours. Certains viennent de CAGIP,
              d’autres de mes expériences précédentes ou de mon environnement personnel.
              Tous montrent la même chose : j’aime construire des solutions concrètes.
            </p>
          </div>

          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section className="proof-section">
        <div className="container proof-layout">
          <div className="section-heading">
            <span className="section-kicker">{aboutSections.proof.eyebrow}</span>
            <h2>{aboutSections.proof.title}</h2>
          </div>

          <div className="proof-list">
            {aboutSections.proof.cards.map((card, index) => (
              <article className="proof-item" key={card.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container skills-layout">
          <div>
            <span className="section-kicker">Compétences</span>
            <h2>Une base technique large, avec une trajectoire cloud et Kubernetes.</h2>
            <p>
              J’aime travailler sur des sujets concrets : déployer, superviser, automatiser,
              fiabiliser, optimiser les coûts et améliorer l’usage des outils par les équipes.
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
          </aside>
        </div>
      </section>

      <section className="ambition-section">
        <div className="container ambition-card">
          <span className="section-kicker">{aboutSections.ambition.eyebrow}</span>
          <h2>{aboutSections.ambition.title}</h2>

          {aboutSections.ambition.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-card">
          <span className="section-kicker">Contact</span>
          <h2>Si cette façon de penser la technique vous parle, échangeons.</h2>

          <p>
            Je cherche un CDI dans un environnement où je peux apprendre, contribuer,
            prendre des responsabilités et construire des solutions utiles aux équipes.
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
      </section>
    </>
  );
}
