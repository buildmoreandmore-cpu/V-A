import React from 'react';

interface AboutProps {
  fullPage?: boolean;
  navigate?: (view: any) => void;
}

const About: React.FC<AboutProps> = ({ fullPage, navigate }) => {
  return (
    <div className={`${fullPage ? 'pt-40 pb-32' : 'py-32'} bg-white overflow-hidden`}>
      <div className="container mx-auto px-6">
        {fullPage && (
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none mb-8">
              Reliability <span className="opacity-30 font-serif font-black italic">&</span> Integrity.
            </h1>
            <p className="text-xl text-slate-500 font-medium tracking-tight">Atlanta's standard for logistical excellence and workforce integrity.</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1533282960533-51328aa49826?auto=format&fit=crop&q=80&w=1000" 
                alt="Atlanta Industrial Landscape" 
                className="w-full h-auto object-cover min-h-[500px]"
              />
            </div>
            {/* Logo-Style Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-black p-12 shadow-2xl hidden md:block">
              <div className="text-5xl font-black text-white mb-2 leading-none tracking-tighter font-serif italic">V&A</div>
              <div className="text-slate-500 font-black uppercase tracking-[0.4em] text-[9px]">Workforce Solutions</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-black text-xs font-black tracking-[0.5em] uppercase mb-8 flex items-center">
              <span className="w-12 h-[2px] bg-black mr-6"></span>
              The V&A Mission
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-black mb-10 leading-[1] tracking-tighter">
              A Force for <br/>
              <span className="italic font-serif opacity-40">Precision.</span>
            </h3>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">
              Varist & Associates (V&A Workforce) is a strategic labor staffing powerhouse. We specialize in complex logistical deployments where reliability isn't just a requirement—it's the core of the business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center text-black shadow-sm">
                   <span className="font-serif italic font-black text-2xl">V</span>
                </div>
                <div>
                  <h4 className="font-black text-black mb-2 uppercase tracking-widest text-xs">Vetted Crews</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Rigorous screening ensures every individual on site meets our high standards of professionalism.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center text-black shadow-sm">
                  <span className="font-serif italic font-black text-2xl">A</span>
                </div>
                <div>
                  <h4 className="font-black text-black mb-2 uppercase tracking-widest text-xs">Agile Logistics</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Swift deployment capabilities for short-notice industrial and event needs across the Southeast.</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate?.('contact')} 
              className="inline-flex items-center text-black font-black tracking-[0.3em] text-xs hover:opacity-50 transition-all group uppercase border-b-2 border-black pb-2"
            >
              Consult Our Strategy
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {fullPage && (
          <div className="mt-48 pt-24 border-t border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
              <div>
                <h4 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">Corporate Mission</h4>
                <p className="text-slate-500 leading-relaxed font-medium">To lead the staffing industry through unmatched accountability. We don't just fill roles; we build the infrastructure of success for our partners.</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">Industrial Vision</h4>
                <p className="text-slate-500 leading-relaxed font-medium">Setting the standard for zero-waste logistics and sustainable labor practices in high-volume environments across the United States.</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">Regional Roots</h4>
                <p className="text-slate-500 leading-relaxed font-medium">Deeply embedded in the Atlanta business ecosystem, we prioritize local talent and professional growth to strengthen our hometown community.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;