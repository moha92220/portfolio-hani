import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
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
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Portfolio — Recherche de CDI</span>

            <h1>
              Créer des outils DevOps utiles, fiables et adoptés par les équipes.
            </h1>

            <p className="hero-intro">
              Ingénieur DevOps en alternance au Crédit Agricole, je travaille autour du cloud,
              de Kubernetes, de l’automatisation, de l’observabilité et du FinOps.
              J’aime partir d’un besoin terrain, concevoir une solution claire, puis la rendre
              réellement exploitable par les équipes.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() => scrollToSection('projects')}
              >
                Voir mes projets
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

            <div className="hero-metrics">
              <div>
                <strong>4</strong>
                <span>projets internes</span>
              </div>

              <div>
                <strong>5 ans</strong>
                <span>école supérieure & alternance</span>
              </div>

              <div>
                <strong>Cloud / Kube</strong>
                <span>trajectoire DevOps</span>
              </div>
            </div>
          </div>

          <aside className="hero-profile-board">
            <div className="profile-board-top">
              <img src={profile.heroImage} alt={profile.name} />

              <div>
                <span className="board-label">Profil</span>
                <h2>{profile.name}</h2>
                <p>{profile.title}</p>
              </div>
            </div>

            <div className="profile-board-line" />

            <div className="profile-board-content">
              <div>
                <strong>Mon terrain</strong>
                <span>GitLab CI/CD, Kubernetes, GCP, GitOps, scripts, supervision, FinOps.</span>
              </div>

              <div>
                <strong>Ma posture</strong>
                <span>Autonomie, confiance, entraide, curiosité et sens de la contribution.</span>
              </div>

              <div>
                <strong>Mon cap</strong>
                <span>Monter en compétences et évoluer vers un rôle de Tech Lead DevOps.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section identity-section" id="vision">
        <div className="container identity-grid">
          <div className="identity-title">
            <span className="eyebrow">{aboutSections.positioning.eyebrow}</span>
            <h2>{aboutSections.positioning.title}</h2>
          </div>

          <div className="identity-text">
            {aboutSections.positioning.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section creation-section">
        <div className="container creation-grid">
          <article className="feature-panel large-panel">
            <span className="eyebrow">{aboutSections.motivation.eyebrow}</span>
            <h2>{aboutSections.motivation.title}</h2>

            {aboutSections.motivation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="feature-panel list-panel">
            <span className="panel-number">01</span>
            <h3>Ce que j’aime concevoir</h3>

            <ul>
              <li>Des automatisations qui font gagner du temps.</li>
              <li>Des outils qui rendent la donnée plus lisible.</li>
              <li>Des solutions qui améliorent la réactivité des équipes.</li>
              <li>Des déploiements propres et industrialisés.</li>
              <li>Des projets qui répondent à de vrais besoins terrain.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <SectionTitle
            eyebrow="Réalisations"
            title="Des projets pensés pour être utilisés"
            description="Cloud, Kubernetes, automatisation, observabilité et optimisation : chaque projet répond à un besoin concret."
          />

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section value-section">
        <div className="container">
          <SectionTitle
            eyebrow="Valeur créée"
            title="Ce que mes projets apportent réellement"
            description="Au-delà de la technique, je cherche à construire des outils utiles, adoptables et porteurs de valeur."
          />

          <div className="proof-grid">
            {aboutSections.proof.cards.map((card, index) => (
              <article className="proof-card" key={card.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section posture-section">
        <div className="container posture-grid">
          <article className="feature-panel">
            <span className="eyebrow">{aboutSections.teamwork.eyebrow}</span>
            <h3>{aboutSections.teamwork.title}</h3>

            {aboutSections.teamwork.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="feature-panel">
            <span className="eyebrow">{aboutSections.ambition.eyebrow}</span>
            <h3>{aboutSections.ambition.title}</h3>

            {aboutSections.ambition.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <SectionTitle
              eyebrow="À propos"
              title="Un profil technique, autonome et orienté usage"
              description="Mon parcours m’a permis d’évoluer entre support, systèmes, sécurité, production et DevOps. Aujourd’hui, cela me donne une vision à la fois opérationnelle, transverse et concrète."
            />

            <p>
              J’aime les missions avec un objectif clair, en autonomie comme en équipe.
              Quand le cadre est bien défini, je peux avancer vite, proposer, construire
              et contribuer avec efficacité.
            </p>

            <p>
              Je suis particulièrement fier des projets menés en autonomie,
              car ils montrent ma capacité à partir d’une idée, comprendre un besoin,
              choisir les bons outils et créer une solution réellement utile.
            </p>

            <p>
              Aucun projet ne résume à lui seul mon potentiel. C’est l’ensemble qui compte :
              FinOps, testeur de flux, popup d’observabilité, automatisation du CRA.
              Si cette manière de penser la technique vous parle, je peux apporter cette énergie
              et cette capacité de réalisation à votre équipe.
            </p>
          </div>

          <aside className="skills-panel">
            <span className="panel-number">02</span>
            <h3>Compétences clés</h3>

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

      <section className="section contact-section" id="contact">
        <div className="container contact-card">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Discutons de la suite</h2>

            <p>
              Si vous recherchez un profil DevOps curieux, impliqué, humain et capable
              de transformer des besoins opérationnels en solutions concrètes,
              je serai ravi d’échanger avec vous.
            </p>
          </div>

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
