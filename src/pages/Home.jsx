import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { profile, projects, skills } from '../data/projects';

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
              Je conçois des outils DevOps et d’automatisation qui rendent la technique
              plus utile, plus lisible et plus efficace.
            </h1>

            <p className="hero-intro">
              Actuellement ingénieur DevOps en alternance au Crédit Agricole, je souhaite
              poursuivre en CDI dans un environnement où je peux continuer à apprendre,
              assumer davantage de responsabilités et contribuer durablement à une équipe.
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
                <strong>4 projets clés</strong>
                <span>FinOps, automatisation, observabilité, cloud</span>
              </div>

              <div>
                <strong>Stack</strong>
                <span>GitLab CI/CD, Kubernetes, GCP, GitOps, scripts, supervision</span>
              </div>

              <div>
                <strong>Approche</strong>
                <span>Produit, terrain, amélioration continue et esprit d’équipe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionTitle
            eyebrow="Mes réalisations"
            title="Des projets concrets, pensés comme de vrais produits internes"
            description="Chaque projet répond à un besoin réel : visibilité des coûts, automatisation, observabilité ou amélioration du quotidien des équipes."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container statement-grid">
          <div className="statement-card">
            <span className="eyebrow">Ma manière de travailler</span>
            <h3>Confiance, progression, coopération.</h3>
            <p>
              Je crois qu’une équipe solide se construit sur la confiance réciproque, la
              clarté et la volonté de progresser ensemble. J’aime évoluer dans un cadre où
              chacun peut apporter, apprendre et s’appuyer sur les autres pour aller plus loin.
            </p>
          </div>

          <div className="statement-card">
            <span className="eyebrow">Ce que je recherche</span>
            <h3>Grandir durablement dans un environnement exigeant.</h3>
            <p>
              Je souhaite rejoindre une équipe dans laquelle je peux enrichir mon expérience,
              monter en responsabilité et m’épanouir professionnellement, tout en apportant une
              réelle valeur sur des sujets DevOps, cloud et automatisation.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <div>
            <SectionTitle
              eyebrow="À propos"
              title="Un profil technique avec une vraie sensibilité produit et humaine"
              description="Mon parcours m’a permis d’évoluer entre support, systèmes, sécurité et DevOps. Aujourd’hui, cette progression me donne une vision à la fois opérationnelle et transverse."
            />

            <p>
              J’aime les sujets qui relient la technique aux usages : industrialiser un besoin,
              rendre une donnée lisible, fluidifier une tâche répétitive, rapprocher une alerte
              de la bonne personne, ou encore proposer un outil qui simplifie réellement le
              quotidien des équipes.
            </p>

            <p>
              Au-delà de la technique, j’accorde beaucoup d’importance à la qualité des relations,
              à la confiance et à la dynamique collective. J’ai envie d’intégrer une équipe dans
              laquelle on peut construire, apprendre et évoluer ensemble sur le long terme.
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
                <span>Automatisation & fiabilité</span>
              </div>

              <div className="mini-box">
                <strong>Environnement</strong>
                <span>Grand groupe bancaire</span>
              </div>

              <div className="mini-box">
                <strong>Objectif</strong>
                <span>Poursuivre en CDI</span>
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
              Si vous recherchez un profil DevOps curieux, impliqué et orienté amélioration
              continue, je serai ravi d’échanger avec vous.
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
