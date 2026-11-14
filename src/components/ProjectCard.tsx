import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <Link className="project-card-link" to={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <div className="project-image">
          <img src={`${import.meta.env.BASE_URL}images/${project.image}`} alt={project.imageAlt} width="1200" height="840" loading="lazy" />
        </div>
        <p className="project-note">Concept preview <span aria-hidden="true">/ 0{index + 1}</span></p>
        <div className="project-caption">
          <div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>
          <span className="project-index" aria-hidden="true">↗</span>
        </div>
        <p className="project-summary">{project.summary}</p>
      </Link>
    </article>
  );
}
