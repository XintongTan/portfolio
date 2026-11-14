import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav className="social-links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </footer>
  );
}
