import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <img src={project.coverImage} alt={project.name} />
        <span className={`badge badge-${project.accent}`}>{project.stack[0]}</span>
      </div>

      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>

        <div className="tag-list">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="tag-pill">
              {item}
            </span>
          ))}
        </div>

        <Link className="text-link" to={`/projets/${project.slug}`}>
          Voir le projet
        </Link>
      </div>
    </article>
  );
}
