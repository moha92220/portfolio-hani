import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-wrap">
      <div className="not-found-panel">
        <h1>404</h1>
        <p>Cette page n'existe pas ou a disparu dans le multivers.</p>
        <Link to="/" className="btn btn--black">← Retour à l'accueil</Link>
      </div>
    </div>
  );
}
