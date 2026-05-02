import { useEffect } from 'react';
import { profile, skills } from '../data/projects';
import { aboutSections } from '../data/about';
import ProjectCarousel from '../components/ProjectCarousel';

export default function Home() {
  useEffect(() => {
    const target = sessionStorage.getItem('portfolio-target-section');
    if (target) {
      sessionStorage.removeItem('portfolio-target-section');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="hero-section">
        <div className="hero-bg" aria-hidden="true" />

        <div className="hero-left">
          <span className="hero-kicker">— Origin Story —</span>
          <h1 className="hero-name">
            Hani<br />Habi
          </h1>
          <div className="hero-title-badge">
            ⚡ Ingénieur DevOps · Cloud · Production
          </div>
          <div className="hero-bubble">
            <p>
              Un ingénieur DevOps qui apporte de la clarté, de l'automatisation
              et de la fiabilité dans les environnements cloud et Kubernetes.
              J'aime créer, construire et livrer des solutions qui servent vraiment les équipes.
            </p>
          </div>
          <div className="hero-ctas">
            <a href="#profile" className="btn btn--blue">Mon profil →</a>
            <a href="#projects" className="btn btn--yellow">Voir mes projets →</a>
            <a href={profile.cvPath} download className="btn">Télécharger le CV</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <img src={profile.heroImage} alt={profile.name} />
          </div>
          <div className="hero-info-box">
            <div className="hero-info-title">Paris · DevOps</div>
            <div className="hero-info-sub">Cloud · Kubernetes · GitOps · CI/CD · GCP</div>
          </div>
        </div>
      </section>

      {/* ── PROFIL ── */}
      <section id="profile" className="section-pad">
        <div className="container">
          <div className="profile-layout">
            <div className="profile-sticky">
              <div className="eyebrow eyebrow--white">Profil</div>
              <h2>{aboutSections.positioning.title}</h2>
            </div>
            <div className="profile-paras">
              {aboutSections.positioning.paragraphs.map((para, i) => (
                <div key={i} className="profile-para">
                  <p>{para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QUE J'APPORTE ── */}
      <section className="section-alt section-pad">
        <div className="container">
          <div className="title-wrap">
            <div className="eyebrow">Ce que j'apporte</div>
            <h2 className="section-h2">Je ne viens pas seulement<br />avec des compétences.</h2>
          </div>
          <div className="contribution-grid">
            {aboutSections.contribution.cards.map((card, i) => (
              <div key={i} className="c-panel">
                <div className="c-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div className="c-title">{card.title}</div>
                <p className="c-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MINDSET ── */}
      <section className="section-pad">
        <div className="container">
          <div className="title-wrap">
            <div className="eyebrow eyebrow--blue">Ma façon de penser</div>
            <h2 className="section-h2">Confiance, autonomie<br />et envie de construire.</h2>
          </div>
          <div className="mindset-grid">
            <div className="m-panel">
              <h3>Création &amp; Comics</h3>
              {aboutSections.creation.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="m-panel">
              <h3>Ma façon de penser</h3>
              {aboutSections.mindset.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projects" className="section-alt section-pad">
        <div className="container">
          <div className="title-wrap center">
            <div className="eyebrow eyebrow--red">Featured Stories</div>
            <h2 className="section-h2">Mes projets</h2>
            <p className="section-desc">
              Des solutions concrètes nées de vrais besoins terrain. Chaque projet raconte
              une histoire : un problème, une idée, une solution.
            </p>
          </div>
          <ProjectCarousel />
        </div>
      </section>

      {/* ── PREUVES ── */}
      <section className="section-pad">
        <div className="container">
          <div className="proof-layout">
            <div className="proof-sticky">
              <div className="eyebrow eyebrow--black">Preuves concrètes</div>
              <h2>{aboutSections.proof.title}</h2>
            </div>
            <div className="proof-list">
              {aboutSections.proof.cards.map((card, i) => (
                <div key={i} className="proof-item">
                  <div className="proof-n">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPÉTENCES ── */}
      <section className="section-dark section-pad">
        <div className="container">
          <div className="skills-inner">
            <div>
              <div className="eyebrow" style={{ marginBottom: '1.2rem' }}>Super Powers</div>
              <h2 className="section-h2 inv">Mes compétences techniques</h2>
              <p className="section-desc inv" style={{ marginTop: '1rem' }}>
                Un profil polyvalent : cloud, Kubernetes, CI/CD, automatisation, supervision et sécurité.
                Une base système solide, une trajectoire DevOps cloud ambitieuse.
              </p>
            </div>
            <div className="skills-cloud">
              {skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AMBITION ── */}
      <section className="section-alt section-pad">
        <div className="container">
          <div className="title-wrap center">
            <div className="eyebrow">Objectif CDI</div>
          </div>
          <div className="ambition-card">
            <h2>{aboutSections.ambition.title}</h2>
            <div className="ambition-paras">
              {aboutSections.ambition.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-pad">
        <div className="container">
          <div className="contact-card">
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Me contacter</div>
            <h2>Travaillons ensemble !</h2>
            <div className="contact-bubble">
              <p>
                Disponible pour un CDI en DevOps, Cloud ou Kubernetes. Je cherche un environnement
                exigeant, une équipe solide et des sujets techniques ambitieux.
              </p>
            </div>
            <div className="contact-ctas">
              <a href={`mailto:${profile.email}`} className="btn btn--yellow">
                Envoyer un email
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">
                LinkedIn →
              </a>
              <a href={profile.cvPath} download className="btn btn--red">
                Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
