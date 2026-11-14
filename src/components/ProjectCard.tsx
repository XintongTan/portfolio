import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const image = project.screenshot ?? project.image;
  const imageAlt = project.screenshot ? (project.screenshotAlt ?? `${project.title} interface screenshot`) : project.imageAlt;
  return (
    <article className="project-card">
      <Link className="project-card-link" to={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <div className="project-content">
          <h3><span className="project-number">{String(index + 1).padStart(2, '0')} — </span>{project.title}</h3>
          <p className="project-category">{project.category}</p>
          <p className="project-summary">{project.summary}</p>
          <p className={`project-status${project.status === 'In Progress' ? ' project-status-progress' : ''}`}>{project.status}</p>
        </div>
        <figure className="project-preview">
          <div className="project-image"><img src={`${import.meta.env.BASE_URL}images/${image}`} alt={imageAlt} width="1200" height="840" loading="lazy" /></div>
          {!project.screenshot && <figcaption>Illustrative preview</figcaption>}
        </figure>
      </Link>
    </article>
  );
}
