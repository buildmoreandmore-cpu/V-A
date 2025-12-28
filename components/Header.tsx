import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  currentView: string;
  navigate: (view: any) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentView, navigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Events', view: 'events' },
    { name: 'General Labor', view: 'labor' },
    { name: 'Employment', view: 'employment' },
    { name: 'About', view: 'about' }
  ];

  const handleNav = (view: any) => {
    navigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen || currentView !== 'home' ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
      {/* Top Utility Bar */}
      <div className={`hidden md:block py-2 border-b border-white/5 ${isScrolled || currentView !== 'home' ? 'bg-black' : 'bg-black/20 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-400">
          <div className="flex space-x-6">
            <span className="flex items-center hover:text-white transition-colors cursor-default"><svg className="w-3 h-3 mr-1 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg> info@vandahire.com</span>
            <span className="flex items-center hover:text-white transition-colors cursor-default"><svg className="w-3 h-3 mr-1 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.516 5.516l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg> (404) 447-0926</span>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => navigate('employment')} className="hover:text-white uppercase transition-colors">Career Opportunities</button>
            <button onClick={() => navigate('contact')} className="hover:text-white uppercase transition-colors">Inquiries</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        <button onClick={() => navigate('home')} className="flex items-center space-x-4 text-left group">
          <div className="bg-black p-2.5 rounded shadow-2xl transform transition-all group-hover:scale-110">
             <div className="flex flex-col items-center justify-center">
                <span className="text-white font-serif text-xl font-black leading-none italic">V&A</span>
             </div>
          </div>
          <div className={`flex flex-col transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 lg:opacity-100' : 'opacity-100'}`}>
            <span className={`text-xl font-black tracking-tighter uppercase leading-none whitespace-nowrap ${isScrolled || currentView !== 'home' || isMobileMenuOpen ? 'text-black' : 'text-white'}`}>
              Varist <span className="opacity-50">&</span> Associates
            </span>
            <span className={`text-[9px] font-black tracking-[0.4em] uppercase opacity-60 whitespace-nowrap mt-1 ${isScrolled || currentView !== 'home' || isMobileMenuOpen ? 'text-slate-600' : 'text-slate-400'}`}>
              Workforce Solutions
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.view)} 
              className={`text-xs font-black uppercase tracking-widest transition-all hover:opacity-100 hover:scale-105 ${currentView === link.view ? (isScrolled || currentView !== 'home' ? 'text-black' : 'text-white') : (isScrolled || currentView !== 'home' ? 'text-slate-400 opacity-70' : 'text-slate-300 opacity-80')}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNav('contact')} 
            className="bg-black hover:bg-slate-800 text-white px-8 py-3 rounded font-black text-xs transition-all shadow-xl hover:shadow-black/20 uppercase tracking-[0.2em]"
          >
            Get Staffed
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-black p-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isScrolled || currentView !== 'home' ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white text-black z-40 overflow-y-auto animate-fade-in pt-32 px-10 pb-12">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNav(link.view)} 
                className={`text-4xl font-black uppercase tracking-tighter text-left border-b border-slate-100 pb-6 transition-all ${currentView === link.view ? 'text-black' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
            
            <div className="pt-10 space-y-6">
              <button 
                onClick={() => handleNav('contact')}
                className="w-full bg-black text-white py-6 rounded-xl font-black tracking-widest text-lg shadow-2xl active:scale-95 transition-transform"
              >
                GET STAFFED
              </button>
              
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Direct Contact</p>
                <a href="tel:4044470926" className="block text-2xl font-black text-black mb-2 hover:opacity-70 transition-opacity">(404) 447-0926</a>
                <a href="mailto:info@vandahire.com" className="block text-sm font-bold text-slate-500">info@vandahire.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;