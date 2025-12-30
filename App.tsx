import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EventsSection from './components/EventsSection';
import LaborServices from './components/LaborServices';
import Employment from './components/Employment';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Careers from './components/Careers';
import EventPage from './components/EventPage';

type View = 'home' | 'events' | 'labor' | 'employment' | 'careers' | 'about' | 'contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [showSplash, setShowSplash] = useState(true);
  const routerNavigate = useNavigate();
  const location = useLocation();

  // Check if splash was already shown this session
  useEffect(() => {
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashShown', 'true');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update view based on route
  useEffect(() => {
    if (location.pathname === '/careers') {
      setCurrentView('careers');
    } else if (location.pathname.startsWith('/events/')) {
      setCurrentView('events');
    } else if (location.pathname === '/') {
      setCurrentView('home');
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigate = (view: View) => {
    setCurrentView(view);
    if (view === 'careers') {
      routerNavigate('/careers');
    } else if (view === 'home') {
      routerNavigate('/');
    } else {
      routerNavigate('/');
      // For section navigation, stay on home and potentially scroll
    }
  };

  const renderHomeView = () => {
    switch (currentView) {
      case 'events':
        return <EventsSection fullPage navigate={navigate} />;
      case 'labor':
        return <LaborServices fullPage navigate={navigate} />;
      case 'employment':
        return <Employment fullPage navigate={navigate} />;
      case 'about':
        return <About fullPage navigate={navigate} />;
      case 'contact':
        return <Contact fullPage title="Secure Deployment" navigate={navigate} />;
      default:
        return (
          <>
            <Hero navigate={navigate} />
            <About navigate={navigate} />
            <EventsSection navigate={navigate} />
            <LaborServices navigate={navigate} />
            <Stats />
            <Employment navigate={navigate} />
            <Contact navigate={navigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <Header isScrolled={isScrolled} currentView={currentView} navigate={navigate} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={renderHomeView()} />
          <Route path="/careers" element={<Careers navigate={navigate} />} />
          <Route path="/events/:eventSlug" element={<EventPage />} />
        </Routes>
      </main>

      <Footer navigate={navigate} />

      {/* Quick Apply Sticky CTA - Links to Careers */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40">
        <button
          onClick={() => navigate('careers')}
          className="bg-black text-white font-black px-5 py-4 md:px-8 md:py-5 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 tracking-[0.2em] uppercase text-xs"
        >
          <span className="hidden md:inline mr-4 border-r border-white/20 pr-4">Join the Crew</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
