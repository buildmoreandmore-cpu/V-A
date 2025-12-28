import React from 'react';

interface HeroProps {
  navigate?: (view: any) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <div className="relative h-screen flex items-center bg-varist-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-5 py-2 bg-white text-black text-[10px] font-black tracking-[0.3em] uppercase rounded-full mb-10 animate-fade-in-up shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
            <span className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse"></span>
            V&A Workforce Solutions
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] mb-10 animate-fade-in-up delay-75 tracking-tighter">
            Strength <span className="opacity-50 font-serif italic">&</span> <br/>
            Precision.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-14 leading-relaxed max-w-2xl animate-fade-in-up delay-150 font-medium">
            Atlanta's premier workforce engine. From large-scale industrial logistics to elite event support, we deploy the backbone of your operation.
          </p>
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 animate-fade-in-up delay-200">
            <button 
              onClick={() => navigate?.('labor')} 
              className="bg-white hover:bg-slate-200 text-black px-12 py-6 rounded-sm font-black text-sm transition-all shadow-2xl flex items-center justify-center group tracking-[0.2em] uppercase"
            >
              Book Labor
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button 
              onClick={() => navigate?.('employment')} 
              className="bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white border border-white/20 px-12 py-6 rounded-sm font-black text-sm transition-all flex items-center justify-center tracking-[0.2em] uppercase"
            >
              Join the Crew
            </button>
          </div>
        </div>
      </div>
      
      {/* Structural Decor */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;