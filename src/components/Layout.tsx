import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { projects } from '../data/projects';

export default function Layout() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const project = projects.find((item) => pathname === `/work/${item.slug}`);
    const pageName = project?.title ?? ({ '/': 'UI/UX Developer & UI Engineer', '/about': 'About', '/resume': 'Resume' }[pathname] ?? 'Page not found');
    document.title = `${pageName} — Xintong Tan`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (previousPath.current !== pathname) mainRef.current?.focus({ preventScroll: true });
    previousPath.current = pathname;
  }, [pathname]);

  return (
    <div className="site-layout">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault();
        mainRef.current?.focus();
        mainRef.current?.scrollIntoView();
      }}>Skip to content</a>
      <Header />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
