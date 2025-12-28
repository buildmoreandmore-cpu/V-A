import React from 'react';

interface FooterProps {
  navigate?: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-black text-slate-500 py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter uppercase text-white leading-none">
                Varist <span className="opacity-30 font-serif font-black italic">&</span> Associates
              </span>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-600 mt-2">
                Workforce Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Atlanta's premier industrial labor engine. We build the tactical infrastructure for high-volume operations and elite events since our inception.
            </p>
            <div className="text-[11px] font-black tracking-[0.2em] leading-loose text-slate-400 uppercase">
              196 Peachtree St SW, #121<br/>
              Atlanta, GA 30303
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Architecture</h4>
            <ul className="space-y-6 text-xs font-black tracking-[0.15em]">
              <li><button onClick={() => navigate?.('home')} className="hover:text-white transition-colors uppercase">Home</button></li>
              <li><button onClick={() => navigate?.('events')} className="hover:text-white transition-colors uppercase">Event Force</button></li>
              <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase">Industrial Labor</button></li>
              <li><button onClick={() => navigate?.('employment')} className="hover:text-white transition-colors uppercase">Join the Crew</button></li>
              <li><button onClick={() => navigate?.('about')} className="hover:text-white transition-colors uppercase">Our Mission</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Core Sectors</h4>
            <ul className="space-y-6 text-xs font-black tracking-[0.15em]">
              <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase">Site Clean-ups</button></li>
              <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase">Crowd Dynamics</button></li>
              <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase">Film Infrastructure</button></li>
              <li><button onClick={() => navigate?.('labor')} className="hover:text-white transition-colors uppercase">Heavy Demolition</button></li>
              <li><button onClick={() => navigate?.('events')} className="hover:text-white transition-colors uppercase">Elite Supervision</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-12">Intelligence</h4>
            <p className="text-xs mb-8 font-medium">Monitoring tactical crew deployments and regional hiring metrics in the Southeast.</p>
            <div className="flex space-x-5">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                   <div className="w-4 h-4 bg-current opacity-70"></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.4em] uppercase text-slate-700">
          <div className="mb-8 md:mb-0">
            © 2024 V&A Workforce Solutions. Atlanta, GA.
          </div>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">OSHA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;