import { Link } from 'react-router-dom';
import SkillGroups from './SkillGroups';

export default function AboutSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className={`about-section${expanded ? ' about-expanded' : ''}`} aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-label">About</h2>
      <div className="about-body">
        <p>I'm a UI/UX Developer and UI Engineer based in Los Angeles.</p>
        <p>With a background in design and hands-on frontend development, I enjoy working at the intersection of visual design, interaction, and engineering.</p>
        <p>At DigitBridge, I've worked on enterprise applications including ERP systems, production management tools, and B2B customer portals. My work spans UI design in Figma, reusable component styling, frontend implementation, and complex business interactions.</p>
        <p>I'm particularly interested in design systems, thoughtful interaction patterns, and bridging the gap between design and code.</p>
        <h3 className="skills-heading">What I work with</h3>
        <SkillGroups />
        {!expanded && <Link className="text-link" to="/about">More about me</Link>}
      </div>
    </section>
  );
}
