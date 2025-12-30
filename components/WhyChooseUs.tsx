import React from 'react';

interface WhyChooseUsProps {
  navigate?: (view: any) => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ navigate }) => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Same-Day Deployment',
      desc: 'Emergency crews available within hours. 24/7 dispatch for urgent labor needs across Metro Atlanta.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Vetted & Background-Checked',
      desc: 'Every crew member undergoes thorough screening. Professional, supervised teams you can trust.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Nationwide Reach',
      desc: 'Atlanta-based with coast-to-coast deployment. From local warehouses to national festivals.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Industrial Expertise',
      desc: 'Specialized crews for warehouses, construction, film production, and janitorial services.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Scalable Teams',
      desc: 'From 5 workers to 500+. We scale to meet your project demands, big or small.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'W-2 Compliant',
      desc: 'Fully compliant workforce. We handle payroll, insurance, and worker classification.'
    }
  ];

  return (
    <section className="py-16 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-xs font-black tracking-[0.5em] uppercase text-slate-400 mb-6">Why Choose V&A</h2>
          <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-none mb-6">
            Your Trusted <br className="md:hidden" />
            <span className="opacity-40 italic font-serif">Partner.</span>
          </h3>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            We're not just another labor provider. We're a strategic partner committed to your operational success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 lg:p-10 border border-slate-100 hover:border-black hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-slate-300 group-hover:text-black transition-colors mb-6">
                {feature.icon}
              </div>
              <h4 className="text-lg font-black text-black uppercase tracking-tight mb-4">
                {feature.title}
              </h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate?.('contact')}
            className="bg-black text-white px-10 py-5 font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
