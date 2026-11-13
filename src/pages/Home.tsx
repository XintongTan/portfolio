import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-heading">
        <p className="eyebrow hero-intro"><span className="accent-dot" aria-hidden="true" /> Design-minded. Detail-driven.</p>
        <h1 id="hero-heading">Making complex<br />feel <span className="serif hero-serif">simple.</span><span className="hero-asterisk" aria-hidden="true">✳</span></h1>
        <div className="hero-bottom">
          <p>I’m Xintong, a <strong>UI/UX Developer & UI Engineer</strong><br className="desktop-break" /> specializing in enterprise SaaS, design systems,<br className="desktop-break" /> and thoughtful experiences built with React.</p>
          <a className="hero-work-link" href="#selected-work" onClick={(event) => {
            event.preventDefault();
            document.getElementById('selected-work')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
            document.getElementById('work-heading')?.focus({ preventScroll: true });
          }}>Explore my work <span className="circle-arrow" aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section className="work-section" id="selected-work" aria-labelledby="work-heading">
        <div className="section-heading"><h2 id="work-heading" tabIndex={-1}>Selected work <span className="work-count">(03)</span></h2><p>A few things I’m thinking about & building</p></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>
      <AboutSection />
    </div>
  );
}
