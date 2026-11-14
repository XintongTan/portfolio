import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="contact-section">
          <h2>Get in touch</h2>
          <p>I'm open to opportunities in UI Engineering, UX Engineering, and UI-focused Frontend Development.</p>
          <p>If you're building thoughtful digital products, I'd love to connect.</p>
          <nav className="social-links" aria-label="Contact links">
            <a href={`mailto:${profile.email}`}>Email</a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <Link to="/resume">Resume</Link>
          </nav>
        </div>
        <div className="footer-content"><p>© {new Date().getFullYear()} {profile.name}</p></div>
      </div>
    </footer>
  );
}
