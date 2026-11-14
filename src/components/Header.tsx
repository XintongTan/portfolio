import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="brand" to="/" aria-label="Xintong Tan, home">
          <span>Xintong Tan</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navigation.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
