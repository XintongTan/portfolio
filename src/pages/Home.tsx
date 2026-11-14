import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-heading">
        <p className="eyebrow hero-role">UI/UX Developer & UI Engineer</p>
        <h1 id="hero-heading">Designing interfaces.<br />Building experiences.</h1>
        <p className="hero-description">I'm Xintong, a UI/UX Developer with 4+ years of experience designing and building enterprise SaaS applications. I work across Figma, React, and TypeScript to turn complex B2B workflows into clear, functional interfaces.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#selected-work" onClick={(event) => {
            event.preventDefault();
            document.getElementById('selected-work')?.scrollIntoView();
            document.getElementById('work-heading')?.focus({ preventScroll: true });
          }}>View Work <span aria-hidden="true">↓</span></a>
          <Link className="button" to="/resume">Resume <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="work-section" id="selected-work" aria-labelledby="work-heading">
        <div className="section-heading"><h2 id="work-heading" tabIndex={-1}>Selected Work</h2><p>Enterprise SaaS, design systems, and customer experiences.</p></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>
      <AboutSection />
    </div>
  );
}
