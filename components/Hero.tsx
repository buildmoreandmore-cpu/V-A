import React from 'react';

interface HeroProps {
  navigate?: (view: any) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-varist-hero overflow-hidden"
      aria-label="Atlanta Labor Staffing Agency - V&A Workforce"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-5xl">
          {/* Prominent Logo */}
          <div className="mb-10 animate-fade-in-up">
            <img
              src="https://i.ibb.co/NcVBDvH/slazzer-preview-z7e0n.png"
              alt="V&A Workforce"
              className="h-20 md:h-28 w-auto invert mb-4"
            />
            <div className="flex items-center space-x-4">
              <span className="text-white text-2xl md:text-3xl font-black tracking-tight">V&A Workforce</span>
              <span className="hidden md:inline-block h-6 w-px bg-white/30"></span>
              <span className="hidden md:inline-block text-slate-400 text-sm font-bold uppercase tracking-[0.3em]">Contract Service Provider</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] mb-8 animate-fade-in-up delay-75 tracking-tighter" itemProp="name">
            <span className="sr-only">Atlanta Labor Staffing Agency - </span>
            Strength <span className="opacity-50 font-serif italic">&</span> <br/>
            Precision.
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-150 font-medium" itemProp="description">
            <strong className="text-white">Atlanta's trusted workforce solutions.</strong> Same-day warehouse workers, event crews, construction cleanup, and industrial labor. <span className="text-white">Vetted crews available 24/7.</span>
          </p>

          {/* Hidden SEO content - keeps staffing agency keywords for search */}
          <div className="sr-only">
            <p>Atlanta's premier labor staffing agency providing temporary workers</p>
            <p itemProp="areaServed">Serving Atlanta, Buckhead, Midtown, Downtown, Alpharetta, Marietta, Sandy Springs, Decatur, Fulton County, DeKalb County, Gwinnett County, and all of Metro Atlanta, Georgia.</p>
            <p>Emergency staffing Atlanta | Same day temp workers | Warehouse staffing agency Atlanta | Event staffing Mercedes-Benz Stadium | Georgia World Congress Center labor | Forklift operators Atlanta | Construction cleanup crew Atlanta | Festival staff Atlanta | Fulton Industrial staffing | Janitorial services Atlanta</p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 animate-fade-in-up delay-200">
            <button
              onClick={() => navigate?.('labor')}
              className="bg-white hover:bg-slate-200 text-black px-10 md:px-12 py-5 md:py-6 rounded-sm font-black text-sm transition-all shadow-2xl flex items-center justify-center group tracking-[0.2em] uppercase"
              aria-label="Request labor services in Atlanta"
            >
              Request Staff
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => navigate?.('employment')}
              className="bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white border border-white/20 px-10 md:px-12 py-5 md:py-6 rounded-sm font-black text-sm transition-all flex items-center justify-center tracking-[0.2em] uppercase"
              aria-label="Apply for labor jobs in Atlanta"
            >
              Join the Crew
            </button>
          </div>

          {/* Call-to-action with phone */}
          <div className="mt-10 animate-fade-in-up delay-200">
            <a
              href="tel:+14044470926"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm font-medium"
              aria-label="Call V&A Workforce at 404-447-0926"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span itemProp="telephone">Need workers today? Call (404) 447-0926</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-white/10 animate-fade-in-up delay-200">
            <p className="text-slate-500 text-xs uppercase tracking-[0.3em] mb-6 font-bold">Trusted By</p>
            <div className="flex flex-wrap gap-6 md:gap-10 text-slate-400 text-sm font-bold">
              <span>Lollapalooza</span>
              <span>Bonnaroo</span>
              <span>Formula 1</span>
              <span>NASCAR</span>
              <span>Netflix</span>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Decor */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;