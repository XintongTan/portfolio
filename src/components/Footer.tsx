import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2>Let’s make it <span className="serif">thoughtful.</span></h2>
          </div>
          <a className="contact-link" href={`mailto:${profile.email}`}>Say hello <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Xintong Tan</p>
          <p className="footer-note">Designed with care. Built with React.</p>
          <div className="social-links">
            <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
