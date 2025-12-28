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
            src="https://i.ibb.co/VYjTfJz/V-A-Logo-1-removebg-preview.png"
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
