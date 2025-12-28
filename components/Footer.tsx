import React from 'react';

interface FooterProps {
  navigate?: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer
      className="bg-black text-slate-500 py-32 border-t border-white/5"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="flex flex-col">
              <img
                src="https://i.ibb.co/Ng71fhm8/logo.jpg"
                alt="V&A Workforce - Atlanta Labor Staffing Agency"
                className="h-16 w-auto object-contain mb-4 invert"
              />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-600">
                Atlanta Labor Staffing Agency
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium" itemProp="description">
              Atlanta's premier labor staffing agency. Same-day warehouse workers, event staff, construction cleanup crews, and industrial labor. Serving Mercedes-Benz Stadium, GWCC, and Metro Atlanta since inception.
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
              <a href="tel:+14044470926" className="block text-white text-sm font-black hover:text-slate-300 transition-colors" itemProp="telephone">
                (404) 447-0926
              </a>
              <a href="tel:+14048617794" className="block text-slate-400 text-sm font-bold hover:text-white transition-colors">
                (404) 861-7794
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
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Venues We Serve</h4>
            <ul className="space-y-6 text-xs font-black tracking-[0.15em]">
              <li><span className="text-slate-400">Mercedes-Benz Stadium</span></li>
              <li><span className="text-slate-400">State Farm Arena</span></li>
              <li><span className="text-slate-400">Georgia World Congress Center</span></li>
              <li><span className="text-slate-400">Truist Park / The Battery</span></li>
              <li><span className="text-slate-400">Piedmont Park Events</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Service Areas</h4>
            <p className="text-xs mb-6 font-medium leading-relaxed">
              Serving Metro Atlanta: Downtown, Midtown, Buckhead, Alpharetta, Marietta, Sandy Springs, Decatur, Duluth, Kennesaw, McDonough, Newnan, and the Fulton Industrial District.
            </p>
            <p className="text-xs font-medium leading-relaxed">
              Counties: Fulton, DeKalb, Gwinnett, Cobb, Henry, Clayton
            </p>
          </div>
        </div>

        {/* SEO Keywords Footer Block */}
        <div className="py-8 border-t border-b border-white/5 mb-12">
          <p className="text-[10px] text-slate-600 leading-relaxed text-center">
            <strong className="text-slate-500">Atlanta Labor Staffing</strong> | Temp Workers Atlanta | Warehouse Staffing Agency | Event Staffing Atlanta | Same Day Workers | Emergency Staffing Atlanta | Forklift Operators Atlanta | Construction Cleanup Atlanta | Festival Staff | Convention Labor GWCC | Stadium Workers | Industrial Labor Georgia | Fulton Industrial Staffing | Loading Dock Workers | Film Production Crews Atlanta
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
