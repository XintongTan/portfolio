import { Link } from 'react-router-dom';
import { skills } from '../data/profile';

export default function AboutSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className={`about-section${expanded ? ' about-expanded' : ''}`} aria-labelledby="about-heading">
      <div className="about-heading"><p className="eyebrow">About</p></div>
      <div className="about-body">
        <h2 id="about-heading">Design and development, connected.</h2>
        <p>I’m Xintong, a UI/UX Developer and UI Engineer working at the intersection of design and code. My focus is making complex enterprise software feel clear, consistent, and considered.</p>
        <p>From a reusable component to an end-to-end workflow, I care about the details that make a product easier to use—and easier to build.</p>
        {expanded && <p>I’m especially interested in enterprise SaaS, where thoughtful information architecture and well-built interfaces can bring clarity to everyday work. This portfolio is a starting point; project stories and final visuals will be added over time.</p>}
        <ul className="skill-list" aria-label="Skills">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        {!expanded && <Link className="text-link" to="/about">More about me <span aria-hidden="true">↗</span></Link>}
      </div>
    </section>
  );
}
