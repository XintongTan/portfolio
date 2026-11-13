import { Link } from 'react-router-dom';
import { profile, skills } from '../data/profile';

export default function Resume() {
  return (
    <div className="container inner-page resume-page">
      <div className="resume-heading"><div><p className="eyebrow">Resume / Preview</p><h1>Xintong <span className="serif">Tan.</span></h1><p className="page-lead">UI/UX Developer & UI Engineer</p></div><button className="button" type="button" onClick={() => window.print()}>Print / Save PDF <span aria-hidden="true">↗</span></button></div>
      <p className="placeholder-note">Placeholder resume · Add verified experience, education, and project details before sharing as a final resume.</p>
      <section className="case-section"><h2 className="resume-section-title">Profile</h2><div><p>UI/UX Developer & UI Engineer focused on enterprise SaaS, design systems, and React. Interested in turning complex workflows into clear, consistent interfaces through thoughtful design and frontend development.</p><a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a></div></section>
      <section className="case-section"><h2 className="resume-section-title">Skills</h2><ul className="skill-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>
      <section className="case-section"><h2 className="resume-section-title">Experience</h2><div><h3>Your role · Company name</h3><p className="resume-date">Dates and location to be added</p><p>Replace this section with your responsibilities, contributions, and verified outcomes.</p></div></section>
      <section className="case-section"><h2 className="resume-section-title">Education</h2><div><h3>Degree / Program · Institution</h3><p className="resume-date">Details to be added</p></div></section>
      <Link className="text-link" to="/">Explore selected work <span aria-hidden="true">↗</span></Link>
    </div>
  );
}
