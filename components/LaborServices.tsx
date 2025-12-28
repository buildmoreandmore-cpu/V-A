import React from 'react';

interface LaborServicesProps {
  fullPage?: boolean;
  navigate?: (view: any) => void;
}

const LaborServices: React.FC<LaborServicesProps> = ({ fullPage, navigate }) => {
  const services = [
    { name: 'Industrial Clean-up', desc: 'Heavy-duty site restoration for construction and festivals.' },
    { name: 'Crowd Dynamics', desc: 'Elite safety staffing for large-scale venue throughput.' },
    { name: 'Structural Labor', desc: 'Precision support for demolition and heavy material removal.' },
    { name: 'Facility Integrity', desc: 'High-standard recurring maintenance for corporate facilities.' },
    { name: 'Media Production', desc: 'Specialized set crews and track mat installation teams.' },
    { name: 'Warehouse Ops', desc: 'Logistical loading, unloading, and fleet support labor.' },
    { name: 'Stadium Turnover', desc: 'Rapid scaling workforce for massive venue operations.' },
    { name: 'Post-Build Polish', desc: 'Meticulous site cleaning for luxury construction projects.' },
    { name: 'Site Preparation', desc: 'Landscaping labor for massive civil and green space works.' },
    { name: 'Asset Protection', desc: 'Vigilant support for on-site inventory and site safety.' }
  ];

  return (
    <div className={`${fullPage ? 'pt-40 pb-32' : 'py-32'} bg-white`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          {fullPage ? (
            <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter leading-[0.85] mb-10">
              Workforce <br/> <span className="opacity-30 italic font-serif">Power.</span>
            </h1>
          ) : (
            <h2 className="text-black text-xs font-black tracking-[0.5em] uppercase mb-10">Core Capabilities</h2>
          )}
          <h3 className="text-5xl font-black text-black tracking-tighter mb-10 leading-none">
            Elite Labor Solutions <br/> for <span className="opacity-40 italic font-serif">Critical Operations.</span>
          </h3>
          <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed">
            We deploy a workforce built on discipline. Our teams are vetted, trained, and integrated directly into your workflow to ensure maximum productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l border-slate-100">
          {services.map((s, i) => (
            <div key={i} className="group p-10 border-r border-b border-slate-100 hover:bg-black transition-all duration-500">
              <div className="w-8 h-1 bg-black mb-10 group-hover:bg-white group-hover:w-full transition-all duration-500"></div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-black group-hover:text-white mb-6 leading-tight">{s.name}</h4>
              <p className="text-slate-500 group-hover:text-slate-400 text-xs font-medium leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <button onClick={() => navigate?.('contact')} className="text-white text-[10px] font-black tracking-[0.3em] uppercase flex items-center border-b border-white/20 pb-1">
                  Deploy Crew
                  <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {fullPage && (
          <div className="mt-48 p-16 lg:p-32 bg-black text-white rounded-sm">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2">
                <h4 className="text-5xl font-black tracking-tighter mb-10">Absolute <br/> Scalability.</h4>
                <p className="text-slate-400 text-xl mb-14 font-medium leading-relaxed">From a tactical team of 5 to a massive workforce of 500+, V&A Workforce manages the entire operational lifecycle. Our high-velocity staffing model delivers results without compromise.</p>
                <button onClick={() => navigate?.('contact')} className="bg-white text-black px-12 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-200 transition-all shadow-2xl">Partner With Us</button>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-10 border border-white/10">
                    <div className="text-white font-black text-4xl mb-3 tracking-tighter font-serif italic">V&A</div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.4em]">Rapid Dispatch</div>
                  </div>
                  <div className="bg-white/5 p-10 border border-white/10">
                    <div className="text-white font-black text-4xl mb-3 tracking-tighter font-serif italic">100%</div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.4em]">Compliance</div>
                  </div>
                  <div className="bg-white/5 p-10 border border-white/10">
                    <div className="text-white font-black text-4xl mb-3 tracking-tighter font-serif italic">Vetted</div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.4em]">Background Check</div>
                  </div>
                  <div className="bg-white/5 p-10 border border-white/10">
                    <div className="text-white font-black text-4xl mb-3 tracking-tighter font-serif italic">Global</div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.4em]">Full Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaborServices;