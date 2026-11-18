import { useEffect, useState } from 'react';
import { HomePage } from './components/HomePage';
import { Layout, type ActiveRoute } from './components/Layout';
import { AwarenessSection } from './components/sections/AwarenessSection';
import { BlackmailSection } from './components/sections/BlackmailSection';
import { DeepfakesSection } from './components/sections/DeepfakesSection';
import { FactCheckSection } from './components/sections/FactCheckSection';
import { ImageRemovalSection } from './components/sections/ImageRemovalSection';
import { NumbersSection } from './components/sections/NumbersSection';
import { contentRepository } from './services/contentRepository';
import type { SectionSlug } from './types/content';

const ROUTE_PATHS: Record<ActiveRoute, string> = {
  home: '/',
  awareness: '/awareness',
  'blackmail-support': '/blackmail-support',
  'all-the-numbers': '/all-the-numbers',
  deepfakes: '/deepfakes',
  'fact-checking': '/fact-checking',
  'image-removal': '/image-removal',
};

function resolveRouteFromPath(pathname: string): ActiveRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const matchedEntry = (Object.entries(ROUTE_PATHS) as [ActiveRoute, string][]).find(
    ([, path]) => path === normalized,
  );
  return matchedEntry ? matchedEntry[0] : 'home';
}

export default function App() {
  const [activeRoute, setActiveRoute] = useState<ActiveRoute>(() =>
    resolveRouteFromPath(window.location.pathname),
  );

  useEffect(() => {
    const handlePopState = () => {
      setActiveRoute(resolveRouteFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const section =
      activeRoute !== 'home'
        ? contentRepository.getSectionBySlug(activeRoute as SectionSlug)
        : undefined;
    document.title = section
      ? `${section.title} — iZoon Digital Safety Guide`
      : 'iZoon — Gender Disinformation & Digital Safety Guide';
  }, [activeRoute]);

  const handleNavigate = (route: ActiveRoute) => {
    const nextPath = ROUTE_PATHS[route];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    const nextPath = ROUTE_PATHS.home;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setActiveRoute('home');
    window.setTimeout(() => {
      const target = document.getElementById('why-matters');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const renderPage = () => {
    switch (activeRoute) {
      case 'awareness':
        return <AwarenessSection onNavigate={handleNavigate} />;
      case 'blackmail-support':
        return <BlackmailSection onNavigate={handleNavigate} />;
      case 'all-the-numbers':
        return <NumbersSection />;
      case 'deepfakes':
        return <DeepfakesSection onNavigate={handleNavigate} />;
      case 'fact-checking':
        return <FactCheckSection />;
      case 'image-removal':
        return <ImageRemovalSection />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout
      activeRoute={activeRoute}
      onNavigate={handleNavigate}
      onNavigateAbout={handleNavigateAbout}
    >
      {renderPage()}
    </Layout>
  );
}
