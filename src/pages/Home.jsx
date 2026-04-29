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
              Ingénieur DevOps passionné par le cloud, Kubernetes et la création
              de solutions utiles pour les équipes.
            </h1>

            <p className="hero-intro">
              Actuellement ingénieur DevOps en alternance au Crédit Agricole,
              je conçois des outils autour du cloud, de Kubernetes, de
              l’automatisation, de l’observabilité et du FinOps.
              Mon objectif : rejoindre une équipe exigeante, apprendre vite,
              contribuer concrètement et évoluer vers un rôle de Tech Lead DevOps.
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

            <div className="value-row">
              {profile.values.map((value) => (
                <span key={value} className="value-chip">
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-profile-card">
              <img src={profile.heroImage} alt={profile.name} />

              <div>
                <h2>{profile.name}</h2>
                <p>{profile.title}</p>
              </div>
            </div>

            <div className="hero-highlights">
              <div>
                <strong>Approche</strong>
                <span>Concevoir, automatiser, fiabiliser et faciliter le quotidien des équipes.</span>
              </div>

              <div>
                <strong>Stack</strong>
                <span>GitLab CI/CD, Kubernetes, GCP, GitOps, scripts, supervision, observabilité, FinOps.</span>
              </div>

              <div>
                <strong>Cap</strong>
                <span>Évoluer vers un rôle de Tech Lead DevOps orienté cloud et Kubernetes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="vision">
        <div className="container about-story">
          <div>
            <span className="eyebrow">{aboutSections.positioning.eyebrow}</span>
            <h2>{aboutSections.positioning.title}</h2>
          </div>

          <div className="story-text">
            {aboutSections.positioning.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="big-quote-card">
            <span className="eyebrow">{aboutSections.motivation.eyebrow}</span>
            <h2>{aboutSections.motivation.title}</h2>

            {aboutSections.motivation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="principle-card">
            <h3>Ce que j’aime construire</h3>

            <ul>
              <li>Des outils qui automatisent les tâches répétitives.</li>
              <li>Des interfaces qui rendent la donnée plus lisible.</li>
              <li>Des solutions qui améliorent la réactivité des équipes.</li>
              <li>Des déploiements industrialisés via GitLab CI/CD, GitOps et Kubernetes.</li>
              <li>Des projets qui partent d’un besoin terrain et deviennent utiles à plusieurs équipes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionTitle
            eyebrow="Réalisations"
            title="Des solutions concrètes, conçues pour être utiles"
            description="Cloud, Kubernetes, automatisation, observabilité et optimisation : chaque projet répond à un besoin réel."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Valeur créée"
            title="Ce que mes projets apportent réellement"
            description="Au-delà de la technique, je cherche à produire des outils utiles, adoptables et porteurs de valeur pour les équipes."
          />

          <div className="proof-grid">
            {aboutSections.proof.cards.map((card) => (
              <article className="proof-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container statement-grid">
          <div className="statement-card">
            <span className="eyebrow">{aboutSections.teamwork.eyebrow}</span>
            <h3>{aboutSections.teamwork.title}</h3>

            {aboutSections.teamwork.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="statement-card">
            <span className="eyebrow">{aboutSections.ambition.eyebrow}</span>
            <h3>{aboutSections.ambition.title}</h3>

            {aboutSections.ambition.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <div>
            <SectionTitle
              eyebrow="À propos"
              title="Un profil technique avec une vraie sensibilité usage et humaine"
              description="Mon parcours m’a permis d’évoluer entre support, systèmes, sécurité, production et DevOps. Aujourd’hui, cette progression me donne une vision à la fois opérationnelle, transverse et orientée usage."
            />

            <p>
              J’aime les missions où l’objectif est clair, que ce soit en autonomie ou en équipe.
              Quand le cap est bien défini, je peux avancer, proposer, construire et contribuer
              avec efficacité.
            </p>

            <p>
              Je suis particulièrement fier des projets menés en autonomie, car ils montrent ma capacité
              à partir d’une idée, comprendre un besoin, choisir les bonnes technologies et créer
              une solution réellement utilisable par d’autres collaborateurs.
            </p>

            <p>
              Aucun projet ne résume à lui seul mon potentiel. C’est l’ensemble qui compte :
              FinOps, testeur de flux, popup d’observabilité, automatisation du CRA.
              Si cette manière de penser la technique vous parle, alors je peux apporter cette énergie,
              cette créativité et cette capacité de réalisation à votre équipe.
            </p>
          </div>

          <div className="skills-panel">
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
          </div>
        </div>
      </section>

      <section className="section section-cta" id="contact">
        <div className="container cta-card">
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
