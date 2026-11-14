import { Link } from 'react-router-dom';
import { education, experience, profile } from '../data/profile';
import SkillGroups from '../components/SkillGroups';

export default function Resume() {
  return (
    <div className="container inner-page resume-page">
      <div className="resume-heading"><div><p className="eyebrow">Resume</p><h1>{profile.name}</h1><p className="page-lead">{profile.role}</p></div><button className="button" type="button" onClick={() => window.print()}>Print / Save PDF</button></div>
      <section className="case-section"><h2 className="resume-section-title">Profile</h2><div><p>{profile.introduction}</p><p>{profile.summary}</p><a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a></div></section>
      <section className="case-section"><h2 className="resume-section-title">What I work with</h2><SkillGroups /></section>
      <section className="case-section"><h2 className="resume-section-title">Experience</h2><div><h3>{experience.company} — {experience.role}</h3><p className="resume-date">{experience.period}</p><p>{experience.description}</p></div></section>
      <section className="case-section"><h2 className="resume-section-title">Education</h2><div>{education.map(({ school, degree }) => <div className="education-entry" key={school}><h3>{school}</h3><p>{degree}</p></div>)}</div></section>
      <Link className="text-link" to="/">Explore selected work <span aria-hidden="true">↗</span></Link>
    </div>
  );
}
