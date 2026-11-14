import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';

export default function About() {
  return (
    <div className="container inner-page">
      <div className="page-intro"><h1>About Xintong Tan</h1><p className="page-lead">UI/UX Developer · UI Engineer</p></div>
      <AboutSection expanded />
      <section className="principles-section" aria-labelledby="principles-heading">
        <div className="section-heading"><h2 id="principles-heading">How I approach the work</h2></div>
        <div className="principles-grid">
          <article><span className="eyebrow">01 / Clarity</span><h3>Make the next step clear.</h3><p>Start with the task, understand the context, and give each screen a useful hierarchy.</p></article>
          <article><span className="eyebrow">02 / Consistency</span><h3>Think beyond one screen.</h3><p>Connect individual decisions through reusable patterns and a shared visual language.</p></article>
          <article><span className="eyebrow">03 / Craft</span><h3>Care about what ships.</h3><p>Bring the same attention to responsive behavior, accessibility, and interaction states as to the visual design.</p></article>
        </div>
        <Link className="text-link" to="/resume">View resume <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
