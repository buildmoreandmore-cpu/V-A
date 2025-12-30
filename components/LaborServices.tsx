import React from 'react';

interface LaborServicesProps {
  fullPage?: boolean;
  navigate?: (view: any) => void;
}

const LaborServices: React.FC<LaborServicesProps> = ({ fullPage, navigate }) => {
  const services = [
    { name: 'Construction Cleanup', desc: 'Post-construction cleaning crews for Atlanta residential and commercial sites. Debris removal and site restoration.' },
    { name: 'Warehouse Staffing', desc: 'Forklift operators, loading dock workers, and logistics labor for Fulton Industrial and Metro Atlanta distribution centers.' },
    { name: 'Demolition Labor', desc: 'Precision support for demolition projects. Debris removal, heavy material handling, and site clearing crews.' },
    { name: 'Facility Maintenance', desc: 'Janitorial staffing and recurring maintenance crews for corporate facilities, office buildings, and industrial sites.' },
    { name: 'Film Production Crews', desc: 'Specialized set labor, track mat installation, and production support for Tyler Perry Studios and Atlanta film sets.' },
    { name: 'Logistics & Loading', desc: 'Warehouse associates, pickers, packers, and fleet support labor for Atlanta-area fulfillment centers.' },
    { name: 'Stadium Operations', desc: 'Rapid-scaling turnover crews for Mercedes-Benz Stadium, State Farm Arena, and Truist Park events.' },
    { name: 'Post-Build Cleaning', desc: 'Final clean and punch-out crews for new construction. Luxury residential and commercial site polish.' },
    { name: 'Site Preparation', desc: 'Landscaping labor, grading support, and civil works crews for Atlanta construction projects.' },
    { name: 'Industrial Support', desc: 'Manufacturing labor, assembly workers, and production line staffing for Georgia industrial facilities.' }
  ];

  return (
    <section
      className={`${fullPage ? 'pt-32 lg:pt-40 pb-16 lg:pb-32' : 'py-16 lg:py-32'} bg-white`}
      aria-label="Labor Staffing Services Atlanta"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mb-12 lg:mb-24 text-center lg:text-left mx-auto lg:mx-0">
          {fullPage ? (
            <h1 className="text-5xl md:text-9xl font-black text-black tracking-tighter leading-[0.85] mb-6 lg:mb-10" itemProp="name">
              Labor <br/> <span className="opacity-30 italic font-serif">Staffing.</span>
            </h1>
          ) : (
            <h2 className="text-black text-xs font-black tracking-[0.5em] uppercase mb-6 lg:mb-10">Atlanta Labor Services</h2>
          )}
          <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-6 lg:mb-10 leading-none">
            Warehouse, Construction & <br/> <span className="opacity-40 italic font-serif">Industrial Staffing.</span>
          </h3>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0" itemProp="description">
            <strong>Same-day labor deployment</strong> for warehouses, construction sites, and industrial facilities across Metro Atlanta. Our <strong>background-checked, vetted crews</strong> integrate directly into your workflow. From Fulton Industrial to Hartsfield-Jackson airport logistics, we deploy the workers you need.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l border-slate-100">
          {services.map((s, i) => (
            <div key={i} className="group p-6 md:p-10 border-r border-b border-slate-100 hover:bg-black transition-all duration-500">
              <div className="w-8 h-1 bg-black mb-6 md:mb-10 group-hover:bg-white group-hover:w-full transition-all duration-500"></div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-black group-hover:text-white mb-4 md:mb-6 leading-tight">{s.name}</h4>
              <p className="text-slate-500 group-hover:text-slate-400 text-xs font-medium leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-6 md:mt-10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <button onClick={() => navigate?.('contact')} className="text-white text-[10px] font-black tracking-[0.3em] uppercase flex items-center border-b border-white/20 pb-1">
                  Deploy Crew
                  <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {fullPage && (
          <div className="mt-24 lg:mt-48 p-8 md:p-16 lg:p-32 bg-black text-white rounded-sm">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h4 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 lg:mb-10">Same-Day <br/> Deployment.</h4>
                <p className="text-slate-400 text-lg md:text-xl mb-8 lg:mb-14 font-medium leading-relaxed">
                  From a tactical team of 5 to a massive workforce of 500+, V&A Workforce manages the entire operational lifecycle. Need <strong>emergency warehouse workers</strong> for your Fulton Industrial facility? <strong>Last-minute construction cleanup</strong> crew? We deploy vetted Atlanta labor within hours.
                </p>
                <div className="mb-6 lg:mb-10">
                  <a href="tel:+14044470926" className="text-white text-lg font-bold hover:text-slate-300 transition-colors">
                    Call Now: (404) 447-0926
                  </a>
                </div>
                <button onClick={() => navigate?.('contact')} className="bg-white text-black px-10 md:px-12 py-5 md:py-6 rounded-sm font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-200 transition-all shadow-2xl">Request Workers Today</button>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white/5 p-6 md:p-10 border border-white/10 text-center lg:text-left">
                    <div className="text-white font-black text-3xl md:text-4xl mb-2 md:mb-3 tracking-tighter font-serif italic">24/7</div>
                    <div className="text-[9px] md:text-[10px] uppercase font-black text-slate-500 tracking-[0.3em] md:tracking-[0.4em]">Same-Day Dispatch</div>
                  </div>
                  <div className="bg-white/5 p-6 md:p-10 border border-white/10 text-center lg:text-left">
                    <div className="text-white font-black text-3xl md:text-4xl mb-2 md:mb-3 tracking-tighter font-serif italic">100%</div>
                    <div className="text-[9px] md:text-[10px] uppercase font-black text-slate-500 tracking-[0.3em] md:tracking-[0.4em]">W-2 Compliant</div>
                  </div>
                  <div className="bg-white/5 p-6 md:p-10 border border-white/10 text-center lg:text-left">
                    <div className="text-white font-black text-3xl md:text-4xl mb-2 md:mb-3 tracking-tighter font-serif italic">Vetted</div>
                    <div className="text-[9px] md:text-[10px] uppercase font-black text-slate-500 tracking-[0.3em] md:tracking-[0.4em]">Background Checked</div>
                  </div>
                  <div className="bg-white/5 p-6 md:p-10 border border-white/10 text-center lg:text-left">
                    <div className="text-white font-black text-3xl md:text-4xl mb-2 md:mb-3 tracking-tighter font-serif italic">Metro</div>
                    <div className="text-[9px] md:text-[10px] uppercase font-black text-slate-500 tracking-[0.3em] md:tracking-[0.4em]">Atlanta Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industrial Areas SEO Block */}
        {fullPage && (
          <div className="mt-16 p-8 bg-slate-50 rounded-sm">
            <h4 className="text-lg font-black text-black mb-4 uppercase tracking-tight">Atlanta Industrial Areas We Serve</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              V&A Workforce provides warehouse and industrial staffing throughout Metro Atlanta including: <strong>Fulton Industrial District</strong> (52M+ sq ft of warehouse space), <strong>South Fulton Parkway</strong>, <strong>Union City distribution centers</strong>, <strong>McDonough/Henry County</strong> logistics parks, <strong>Hartsfield-Jackson airport area</strong>, <strong>Newnan</strong>, <strong>Peachtree City</strong>, and <strong>Gwinnett County</strong> industrial zones. We staff forklift operators, warehouse associates, loading dock workers, and logistics labor.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LaborServices;