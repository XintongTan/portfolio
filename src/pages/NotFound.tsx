import { Link } from 'react-router-dom';

export default function NotFound() {
  return <div className="container not-found"><p className="eyebrow">404 / A little off track</p><h1>Let’s find our<br /><span className="serif">way back.</span></h1><p>This page doesn’t exist. There’s more to explore in selected work.</p><Link className="text-link" to="/">Back to work <span aria-hidden="true">↗</span></Link></div>;
}
