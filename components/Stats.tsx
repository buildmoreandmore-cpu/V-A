import React from 'react';

const stats = [
  { label: 'Crew Members', value: '15,000+' },
  { label: 'Event Sites', value: '120+' },
  { label: 'Industrial Ops', value: '600+' },
  { label: 'Strategic Partners', value: '200+' }
];

const Stats: React.FC = () => {
  return (
    <div className="bg-black py-16 lg:py-32 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter group-hover:opacity-40 transition-all duration-700 font-serif italic">
                {stat.value}
              </div>
              <div className="text-slate-500 font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;