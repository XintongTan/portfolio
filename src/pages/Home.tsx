import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import { projects } from '../data/projects';
import { education, experience, expertise, profile } from '../data/profile';

export default function Home() {
  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-heading">
        <p className="eyebrow hero-role">{profile.role}</p>
        <h1 id="hero-heading">{profile.headline}</h1>
        <div className="hero-description"><p>{profile.introduction}</p><p>{profile.summary}</p></div>
        <ul className="expertise-list" aria-label="Areas of expertise">{expertise.map((area) => <li key={area}>{area}</li>)}</ul>
        <div className="hero-actions">
          <a className="text-link" href="#selected-work" onClick={(event) => {
            event.preventDefault();
            document.getElementById('selected-work')?.scrollIntoView();
            document.getElementById('work-heading')?.focus({ preventScroll: true });
          }}>View Work</a>
          <Link className="text-link" to="/resume">Resume</Link>
        </div>
      </section>
      <section className="work-section" id="selected-work" aria-labelledby="work-heading">
        <div className="section-heading"><h2 id="work-heading" tabIndex={-1}>Selected Work</h2><p>A selection of projects focused on design systems, complex workflows, and frontend implementation.</p></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>
      <AboutSection />
      <section className="experience-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="section-label">Experience</h2>
        <div className="experience-body">
          <div className="experience-entry">
            <div className="experience-title"><h3>{experience.company} — {experience.role}</h3><p className="experience-period">{experience.period}</p></div>
            <p>{experience.description}</p>
          </div>
          {education.map(({ school, degree }) => <div className="education-entry" key={school}><h3>{school}</h3><p>{degree}</p></div>)}
        </div>
      </section>
    </div>
  );
}
