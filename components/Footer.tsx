import React from 'react';

interface FooterProps {
  navigate?: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer
      className="bg-black text-slate-500 py-16 lg:py-32 border-t border-white/5"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mb-16 lg:mb-32">
          <div className="space-y-10">
            <div className="flex flex-col">
              <img
                src="https://i.ibb.co/NcVBDvH/slazzer-preview-z7e0n.png"
                alt="V&A Workforce - Atlanta Contract Services"
                className="h-16 w-auto object-contain mb-4 invert"
              />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-600">
                Contract Service Provider
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium" itemProp="description">
              Atlanta-headquartered, nationally deployed. Event crews for Lollapalooza, Bonnaroo, EDC, Formula 1, NASCAR, and Netflix. Plus warehouse, construction, and industrial labor across Metro Atlanta.
            </p>
            <address
              className="text-[11px] font-black tracking-[0.2em] leading-loose text-slate-400 uppercase not-italic"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">196 Peachtree St SW, #121</span><br/>
              <span itemProp="addressLocality">Atlanta</span>, <span itemProp="addressRegion">GA</span> <span itemProp="postalCode">30303</span>
            </address>
            <div className="space-y-2">
              <a href="tel:+14048617794" className="block text-white text-sm font-black hover:text-slate-300 transition-colors" itemProp="telephone">
                404.861.7794
              </a>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.instagram.com/va_workforce"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Follow V&A Workforce on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571aborworkforce"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Follow V&A Workforce on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Services</h4>
            <nav aria-label="Labor services navigation">
              <ul className="space-y-6 text-xs font-black tracking-[0.15em] text-left">
                <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase text-left">Warehouse Staffing</button></li>
                <li><button onClick={() => navigate?.('events')} className="hover:text-white transition-colors uppercase text-left">Event Staffing</button></li>
                <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase text-left">Construction Cleanup</button></li>
                <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase text-left">Forklift Operators</button></li>
                <li><button onClick={() => navigate?.('events')} className="hover:text-white transition-colors uppercase text-left">Stadium Operations</button></li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Events & Clients</h4>
            <ul className="space-y-5 text-xs font-black tracking-[0.15em]">
              <li><span className="text-slate-400">Lollapalooza</span></li>
              <li><span className="text-slate-400">Bonnaroo / EDC</span></li>
              <li><span className="text-slate-400">Formula 1 / NASCAR</span></li>
              <li><span className="text-slate-400">Netflix Productions</span></li>
              <li><span className="text-slate-400">Shaky Knees / Oceans Calling</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Service Areas</h4>
            <p className="text-xs mb-6 font-medium leading-relaxed">
              <strong className="text-white">Nationwide deployment</strong> from our Atlanta HQ. We staff events coast to coast including Chicago, Las Vegas, Tennessee, Maryland, Wisconsin, and beyond.
            </p>
            <p className="text-xs font-medium leading-relaxed">
              Atlanta home base: Fulton, DeKalb, Gwinnett, Cobb, Henry, Clayton counties
            </p>
          </div>
        </div>

        {/* SEO Keywords Footer Block */}
        <div className="py-8 border-t border-b border-white/5 mb-12">
          <p className="text-[10px] text-slate-600 leading-relaxed text-center">
            <strong className="text-slate-500">National Event Services</strong> | Lollapalooza Staff | Bonnaroo Crews | EDC Event Labor | Formula 1 Services | NASCAR Event Crews | Netflix Production Labor | Festival Services Nationwide | Atlanta Labor Provider | Warehouse Labor | Construction Cleanup | Stadium Operations | Convention Center Labor | GWCC Services
          </p>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.4em] uppercase text-slate-700">
          <div className="mb-8 md:mb-0">
            © {new Date().getFullYear()} V&A Workforce Solutions. Atlanta, GA. All Rights Reserved.
          </div>
          <div className="flex space-x-12">
            <button onClick={() => navigate?.('contact')} className="hover:text-slate-400 transition-colors">Contact</button>
            <button onClick={() => navigate?.('employment')} className="hover:text-slate-400 transition-colors">Careers</button>
            <button onClick={() => navigate?.('about')} className="hover:text-slate-400 transition-colors">About</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
