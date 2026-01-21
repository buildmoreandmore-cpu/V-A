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
            <a href="mailto:Polo@vassoc.com" className="flex items-center hover:text-white transition-colors"><svg className="w-3 h-3 mr-1 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg> Polo@vassoc.com</a>
            <a href="tel:+14048617794" className="flex items-center hover:text-white transition-colors"><svg className="w-3 h-3 mr-1 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.516 5.516l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg> 404.861.7794</a>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => navigate('employment')} className="hover:text-white uppercase transition-colors">Career Opportunities</button>
            <button onClick={() => navigate('contact')} className="hover:text-white uppercase transition-colors">Inquiries</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        <button onClick={() => navigate('home')} className="flex items-center space-x-3 text-left group">
          <img
            src="https://i.ibb.co/NcVBDvH/slazzer-preview-z7e0n.png"
            alt="V&A Workforce - Atlanta Premium Contract Labor Service Providers"
            className={`h-12 w-auto object-contain ${isScrolled || currentView !== 'home' || isMobileMenuOpen ? '' : 'invert'}`}
          />
          <div className={`flex flex-col transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 lg:opacity-100' : 'opacity-100'}`}>
            <span className={`text-lg font-black tracking-tighter uppercase leading-none whitespace-nowrap ${isScrolled || currentView !== 'home' || isMobileMenuOpen ? 'text-black' : 'text-white'}`}>
              V&A Workforce
            </span>
            <span className={`text-[8px] font-black tracking-[0.3em] uppercase opacity-60 whitespace-nowrap mt-0.5 ${isScrolled || currentView !== 'home' || isMobileMenuOpen ? 'text-slate-600' : 'text-slate-400'}`}>
              Contract Services
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
            Request Staff
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                <a href="tel:+14048617794" className="block text-2xl font-black text-black mb-2 hover:opacity-70 transition-opacity">404.861.7794</a>
                <a href="mailto:Polo@vassoc.com" className="block text-sm font-bold text-slate-500 mb-4">Polo@vassoc.com</a>
                <div className="flex space-x-3 pt-2">
                  <a href="https://www.instagram.com/va_workforce" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/VAWorkforce" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;