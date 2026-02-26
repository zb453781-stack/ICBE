import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { trackPageView } from '../lib/analytics';
import SEO from '../lib/seo';

function RouteAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}${location.hash}`);
  }, [location.pathname, location.search, location.hash]);

  return null;
}

function scrollToHashTarget(hash: string, attempt = 0) {
  const targetId = decodeURIComponent(hash.replace(/^#/, ''));
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const navbarOffset = 96;
    const top = Math.max(targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset, 0);
    window.scrollTo({ top, left: 0, behavior: 'smooth' });
    return;
  }

  if (attempt < 10) {
    window.setTimeout(() => scrollToHashTarget(hash, attempt + 1), 50);
  }
}

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToHashTarget(location.hash);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname, location.search, location.hash]);

  return null;
}

function normalizeBasename(value?: string): string {
  const input = (value || '/').trim();

  if (!input || input === '/' || input === './') {
    return '/';
  }

  const normalized = input.replace(/^\/+|\/+$/g, '');
  return normalized ? `/${normalized}` : '/';
}

export default function App() {
  const routerBasename = normalizeBasename(
    import.meta.env.VITE_APP_BASENAME || import.meta.env.BASE_URL
  );

  return (
    <Router basename={routerBasename}>
      <RouteAnalyticsTracker />
      <RouteScrollManager />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO
                    title="Home"
                    description="Institute for Community Building and Empowerment (ICBE): empowering communities across Balochistan through climate resilience, gender justice, mental health support, and youth leadership."
                    canonical="/"
                  />
                  <HomePage />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <SEO
                    title="About Us"
                    description="Learn about ICBE's mission, vision, core values, and strategic objectives for resilient and inclusive communities in Balochistan."
                    canonical="/about"
                  />
                  <AboutPage />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <SEO
                    title="Our Services"
                    description="Explore ICBE core focus areas: climate resilience, mental health and psychosocial support, GBV and SEA prevention, youth leadership, and community governance."
                    canonical="/services"
                  />
                  <ServicesPage />
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <SEO
                    title="Gallery"
                    description="View field stories and impact moments from ICBE community sessions, outreach visits, and training programs across Balochistan."
                    canonical="/gallery"
                  />
                  <GalleryPage />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <SEO
                    title="Contact Us"
                    description="Contact ICBE to collaborate, volunteer, partner, or support ongoing programs across Balochistan."
                    canonical="/contact"
                  />
                  <ContactPage />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <SEO
                    title="Page Not Found"
                    description="The page you requested could not be found."
                    canonical="/"
                  />
                  <NotFoundPage />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
