#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "=== Step 1: Reset to GitHub origin/main ==="
git fetch origin
git reset --hard origin/main
echo "Reset complete!"

echo ""
echo "=== Step 2: Adding SplashScreen component ==="
mkdir -p components

cat > components/SplashScreen.tsx << 'SPLASHEOF'
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setFadeIn(true), 100);
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 2500);
    const completeTimer = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-1000 ease-out ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="mb-8">
          <img
            src="https://i.ibb.co/whSyPsxS/V-A-Logo-1-removebg-preview.png"
            alt="V&A Logo"
            className="h-24 w-auto"
          />
        </div>

        <h1
          className={`text-white text-3xl md:text-4xl font-light tracking-[0.3em] uppercase mb-4 transition-all duration-1000 delay-300 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Varist & Associates
        </h1>

        <p
          className={`text-slate-400 text-sm md:text-base tracking-[0.4em] uppercase transition-all duration-1000 delay-500 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Workforce Solutions
        </p>

        <div
          className={`mt-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent transition-all duration-1000 delay-700 ${
            fadeIn ? 'w-32 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
SPLASHEOF

echo "SplashScreen component created!"

echo ""
echo "=== Step 3: Updating App.tsx to include SplashScreen ==="

cat > App.tsx << 'APPEOF'
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
APPEOF

echo "App.tsx updated!"

echo ""
echo "=== Step 4: Committing changes ==="
git add components/SplashScreen.tsx App.tsx
git commit -m "Add splash screen with V&A logo and Varist & Associates fade-in animation"

echo ""
echo "=== Step 5: Pushing to GitHub ==="
git push origin main

echo ""
echo "=== Step 6: Installing dependencies ==="
npm install

echo ""
echo "=== Step 7: Building project ==="
npm run build

echo ""
echo "=== Step 8: Deploying to Vercel ==="
vercel --prod --yes

echo ""
echo "=== ALL DONE! ==="
echo "Site deployed with splash screen!"
