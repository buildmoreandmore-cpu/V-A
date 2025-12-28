import React from 'react';

interface EventsProps {
  fullPage?: boolean;
  navigate?: (view: any) => void;
}

const EventsSection: React.FC<EventsProps> = ({ fullPage, navigate }) => {
  const highlights = [
    { title: 'National Festival Crews', desc: 'Professional crews deployed nationwide for Lollapalooza, Bonnaroo, EDC, Shaky Knees, and major music festivals coast to coast.' },
    { title: 'Motorsports & Productions', desc: 'Experienced teams for Formula 1, NASCAR events, and Netflix productions. Track-tested reliability at scale.' },
    { title: 'Convention & Corporate', desc: '24/7 setup, turnover, and support crews for Georgia World Congress Center and convention centers nationwide.' }
  ];

  return (
    <section
      className={`${fullPage ? 'pt-40 pb-32' : 'py-32'} bg-black text-white relative overflow-hidden`}
      aria-label="Event Staffing Services Atlanta"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Structural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {fullPage && (
          <header className="mb-24">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10" itemProp="name">
              Event <br/> <span className="opacity-30 italic font-serif">Staffing.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium max-w-2xl" itemProp="description">
              <strong>Nationwide event staffing</strong> from our Atlanta headquarters. Professional crews for Lollapalooza, Bonnaroo, EDC, Formula 1, NASCAR, and major festivals coast to coast. From Mercedes-Benz Stadium to venues across America.
            </p>
          </header>
        )}

        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/2">
            {!fullPage && <h2 className="text-white text-xs font-black tracking-[0.5em] uppercase mb-10 opacity-50">Atlanta Event Staffing</h2>}
            <h3 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
              Mass Scale. <br/> <span className="opacity-30 italic font-serif">Absolute Detail.</span>
            </h3>
            <p className="text-slate-400 text-xl mb-16 font-medium max-w-xl leading-relaxed">
              From <strong>track mat installation</strong> at film sets to <strong>zero-waste festival cleanup</strong>, our teams are the invisible engine behind Atlanta's most complex events. We staff <strong>Mercedes-Benz Stadium</strong> game days, <strong>GWCC conventions</strong>, and every major venue in between.
            </p>
            
            <div className="space-y-12">
              {highlights.map((h, i) => (
                <div key={i} className="flex space-x-8 group border-l-2 border-white/10 pl-8 hover:border-white transition-all">
                  <div className="text-4xl font-black text-white/10 group-hover:text-white transition-colors">0{i+1}</div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-[0.2em] mb-3">{h.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {fullPage && (
              <>
                <div className="mt-24 p-12 bg-white/5 border border-white/10">
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">National Event Portfolio</h4>
                  <p className="text-slate-400 mb-10 font-medium">V&A Workforce deploys professional crews <strong>nationwide</strong> for the world's largest festivals, motorsports events, and productions. Atlanta-headquartered, nationally deployed.</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Lollapalooza</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Bonnaroo</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">EDC</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Formula 1</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">NASCAR</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Netflix</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Shaky Knees</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Oceans Calling</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Country Calling</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Wisconsin State Fair</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">GWCC</span>
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">Peachtree Road Race</span>
                  </div>
                </div>

                <div className="mt-12 p-12 bg-white/5 border border-white/10">
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Atlanta Home Base Venues</h4>
                  <p className="text-slate-400 mb-10 font-medium">Our Atlanta headquarters provides crews for local venues including <strong>Falcons and United games</strong>, <strong>Hawks games</strong>, and <strong>Braves games</strong>.</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-5 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.2em]">Mercedes-Benz Stadium</span>
                    <span className="px-5 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.2em]">State Farm Arena</span>
                    <span className="px-5 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.2em]">Georgia World Congress Center</span>
                    <span className="px-5 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.2em]">Truist Park</span>
                    <span className="px-5 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.2em]">Piedmont Park</span>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <figure className="lg:w-1/2 grid grid-cols-2 gap-4 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="space-y-4 pt-16">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-80 w-full object-cover" alt="Atlanta festival staffing and concert crew services - V&A Workforce provides event labor for music festivals" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-96 w-full object-cover" alt="Convention staffing Georgia World Congress Center Atlanta - trade show setup and teardown crews" loading="lazy" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-96 w-full object-cover" alt="Concert event staff Atlanta - Mercedes-Benz Stadium and State Farm Arena staffing services" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-80 w-full object-cover" alt="Stage setup crews and event production labor Atlanta Georgia - festival and venue support" loading="lazy" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;