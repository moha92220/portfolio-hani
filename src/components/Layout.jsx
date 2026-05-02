import { Link, useLocation, useNavigate } from 'react-router-dom';
import { profile } from '../data/projects';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-name">Hani Habi</span>
            <span className="brand-sub">DevOps · Cloud · Production</span>
          </Link>
          <nav className="main-nav" aria-label="Navigation principale">
            <button className="nav-btn" onClick={() => scrollTo('hero')}>Accueil</button>
            <button className="nav-btn" onClick={() => scrollTo('profile')}>Profil</button>
            <button className="nav-btn" onClick={() => scrollTo('projects')}>Projets</button>
            <button className="nav-btn nav-contact" onClick={() => scrollTo('contact')}>Contact</button>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-grid">
              <div>
                <div className="footer-brand-name">Hani Habi</div>
                <div className="footer-tagline">Ingénieur DevOps · Cloud · Production · Paris</div>
              </div>
              <div>
                <div className="footer-col-title">Navigation</div>
                <div className="footer-links">
                  <button className="footer-nav-btn" onClick={() => scrollTo('profile')}>Profil</button>
                  <button className="footer-nav-btn" onClick={() => scrollTo('projects')}>Projets</button>
                  <button className="footer-nav-btn" onClick={() => scrollTo('contact')}>Contact</button>
                </div>
              </div>
              <div>
                <div className="footer-col-title">Me contacter</div>
                <div className="footer-links">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
                  <a href={profile.cvPath} download>Télécharger le CV</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2025 Hani Habi — Paris</span>
              <span>DevOps · Cloud · Kubernetes · GitOps · CI/CD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
