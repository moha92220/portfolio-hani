import { Link, useLocation, useNavigate } from 'react-router-dom';
import { profile } from '../data/projects';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      return;
    }

    sessionStorage.setItem('portfolio-target-section', sectionId);
    navigate('/');
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand-mark">
          <span className="brand-symbol">HH</span>

          <div>
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </div>
        </Link>

        <nav className="main-nav">
          <button type="button" className="nav-button" onClick={() => goToSection('hero')}>
            Accueil
          </button>

          <button type="button" className="nav-button" onClick={() => goToSection('projects')}>
            Projets
          </button>

          <button type="button" className="nav-button" onClick={() => goToSection('about')}>
            Profil
          </button>

          <button type="button" className="nav-button" onClick={() => goToSection('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <span className="footer-label">Portfolio DevOps</span>
          <h3>{profile.name}</h3>

          <p>
            Ingénieur DevOps orienté cloud, Kubernetes, automatisation et observabilité.
            J’aime concevoir des solutions utiles, fiables et pensées pour les équipes.
          </p>
        </div>

        <div>
          <span className="footer-label">Liens</span>

          <ul>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>

            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>

            <li>
              <a href={profile.cvPath} target="_blank" rel="noreferrer">
                Télécharger le CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Conçu comme un portfolio technique, humain et orienté valeur.</span>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
