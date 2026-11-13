import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) return <NotFound />;
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="container case-study">
      <Link className="text-link back-link" to="/">← All work</Link>
      <header className="case-header">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="case-headline serif">{project.headline}</p>
        <p className="placeholder-note"><span className="accent-dot" aria-hidden="true" /> Sample case study · Content and visuals are placeholders</p>
      </header>
      <div className={`case-image project-image-${project.theme}`}><img src={`${import.meta.env.BASE_URL}images/${project.image}`} alt={project.imageAlt} width="1200" height="840" /></div>
      <dl className="case-meta"><div><dt>Role / concept</dt><dd>{project.role}</dd></div><div><dt>Focus</dt><dd>{project.focus}</dd></div><div><dt>Toolkit</dt><dd>{project.tools}</dd></div></dl>
      <section className="case-section"><p className="eyebrow">01 / Overview</p><div><h2>A little context.</h2><p>{project.overview}</p></div></section>
      <section className="case-section"><p className="eyebrow">02 / The challenge</p><div><h2>Finding the right focus.</h2><p>{project.challenge}</p></div></section>
      <section className="case-section"><p className="eyebrow">03 / The approach</p><div><h2>From intent to interface.</h2><div className="approach-list">{project.approach.map((step, stepIndex) => <div className="approach-step" key={step.title}><span className="step-number">0{stepIndex + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></div>)}</div></div></section>
      <section className="case-section"><p className="eyebrow">04 / Looking ahead</p><div><h2>Always room to refine.</h2><p>{project.reflection}</p></div></section>
      <Link className="next-project" to={`/work/${nextProject.slug}`}><div><p className="eyebrow">Next project</p><h2>{nextProject.title}</h2></div><span aria-hidden="true">↗</span></Link>
    </article>
  );
}
