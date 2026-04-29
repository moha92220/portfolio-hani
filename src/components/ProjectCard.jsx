import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index = 0 }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className={`project-card accent-${project.accent}`}>
      <Link to={`/projets/${project.slug}`} className="project-card-link">
        <div className="project-card-image">
          <img src={project.coverImage} alt={project.name} />
        </div>

        <div className="project-card-body">
          <div className="project-card-meta">
            <span>{number}</span>
            <span>{project.stack[0]}</span>
          </div>

          <h3>{project.name}</h3>
          <p>{project.shortDescription}</p>

          <div className="tag-list">
            {project.stack.slice(0, 4).map((item) => (
              <span key={item} className="tag-pill">
                {item}
              </span>
            ))}
          </div>

          <span className="text-link">Voir le projet →</span>
        </div>
      </Link>
    </article>
  );
}
