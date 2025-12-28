import React from 'react';

interface EventsProps {
  fullPage?: boolean;
  navigate?: (view: any) => void;
}

const EventsSection: React.FC<EventsProps> = ({ fullPage, navigate }) => {
  const highlights = [
    { title: 'Logistics Control', desc: 'Surgical precision in site setup, asset management, and crowd dynamics.' },
    { title: 'Sustainability Ops', desc: 'Zero-waste initiatives and green-site management for large-scale gatherings.' },
    { title: 'Maintenance Elite', desc: '24/7 technical and janitorial support for high-traffic environments.' }
  ];

  return (
    <div className={`${fullPage ? 'pt-40 pb-32' : 'py-32'} bg-black text-white relative overflow-hidden`}>
      {/* Structural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {fullPage && (
          <div className="mb-24">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10">
              Event <br/> <span className="opacity-30 italic font-serif">Force.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium max-w-2xl">Elite staffing solutions for high-stakes environments: music festivals, global athletics, and industrial summits.</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/2">
            {!fullPage && <h2 className="text-white text-xs font-black tracking-[0.5em] uppercase mb-10 opacity-50">Event Logistics</h2>}
            <h3 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
              Mass Scale. <br/> <span className="opacity-30 italic font-serif">Absolute Detail.</span>
            </h3>
            <p className="text-slate-400 text-xl mb-16 font-medium max-w-xl leading-relaxed">
              From track mat installation to zero-waste recovery, our teams are the invisible engine behind the world's most complex events. 
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
              <div className="mt-24 p-12 bg-white/5 border border-white/10">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Green Site Protocols</h4>
                <p className="text-slate-400 mb-10 font-medium">Our V&A Workforce leads the industry in zero-waste event operations. We deploy specialized teams focused exclusively on recycling dynamics and fair-trade site restoration.</p>
                <div className="flex flex-wrap gap-5">
                  <span className="px-6 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Zero Waste</span>
                  <span className="px-6 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Recycling Ops</span>
                  <span className="px-6 py-2 bg-white/10 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Eco-Logistics</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="space-y-4 pt-16">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-80 w-full object-cover" alt="Festival Labor" />
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-96 w-full object-cover" alt="Crowd Control" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-96 w-full object-cover" alt="Event Maintenance" />
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" className="shadow-2xl h-80 w-full object-cover" alt="Stage Setup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;