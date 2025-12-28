import React, { useState, useEffect } from 'react';
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

type View = 'home' | 'events' | 'labor' | 'employment' | 'about' | 'contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [showSplash, setShowSplash] = useState(true);

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

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigate = (view: View) => {
    setCurrentView(view);
  };

  const renderView = () => {
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
        {renderView()}
      </main>

      <Footer navigate={navigate} />

      {/* Quick Apply Sticky CTA */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => navigate('employment')}
          className="bg-black text-white font-black px-8 py-5 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 tracking-[0.2em] uppercase text-xs"
        >
          <span className="hidden md:inline mr-4 border-r border-white/20 pr-4">Intake Portal</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
