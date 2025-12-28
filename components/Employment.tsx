import React from 'react';

interface EmploymentProps {
  fullPage?: boolean;
  navigate?: (view: any) => void;
}

const Employment: React.FC<EmploymentProps> = ({ fullPage, navigate }) => {
  return (
    <div className={`${fullPage ? 'pt-40 pb-32' : 'py-32'} bg-slate-50`}>
      <div className="container mx-auto px-6">
        {fullPage && (
          <div className="mb-24 text-center">
            <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter leading-none mb-10">
              The <span className="opacity-30 italic font-serif">Crew.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto tracking-tight">V&A Workforce provides professional pathways for the modern industrial laborer.</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            {!fullPage && <h2 className="text-black text-xs font-black tracking-[0.5em] uppercase mb-10">Careers</h2>}
            <h3 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-12 leading-[1]">
              Built for the <br/> <span className="opacity-40 italic font-serif">Hardworking.</span>
            </h3>
            <p className="text-slate-600 text-xl font-medium mb-16 leading-relaxed">
              We offer more than just shifts. We offer discipline, reliability, and professional growth in Atlanta's most active industrial sectors. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="p-10 bg-white shadow-xl border-t-4 border-black group hover:-translate-y-2 transition-all">
                <div className="text-black/10 group-hover:text-black font-black text-4xl mb-6 leading-none transition-colors italic font-serif">01</div>
                <h4 className="text-black font-black uppercase tracking-[0.2em] text-xs mb-4">Strategic Labor</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">Industrial cleaning, warehouse ops, and construction support across the GA region.</p>
              </div>
              <div className="p-10 bg-white shadow-xl border-t-4 border-black group hover:-translate-y-2 transition-all">
                <div className="text-black/10 group-hover:text-black font-black text-4xl mb-6 leading-none transition-colors italic font-serif">02</div>
                <h4 className="text-black font-black uppercase tracking-[0.2em] text-xs mb-4">Event Operations</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">Logistical support for high-profile music, sporting, and corporate gatherings.</p>
              </div>
              {fullPage && (
                <>
                  <div className="p-10 bg-white shadow-xl border-t-4 border-black group hover:-translate-y-2 transition-all">
                    <div className="text-black/10 group-hover:text-black font-black text-4xl mb-6 leading-none transition-colors italic font-serif">03</div>
                    <h4 className="text-black font-black uppercase tracking-[0.2em] text-xs mb-4">Operational Lead</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">Advanced supervisor tracks for experienced team managers and logistics coordinators.</p>
                  </div>
                  <div className="p-10 bg-white shadow-xl border-t-4 border-black group hover:-translate-y-2 transition-all">
                    <div className="text-black/10 group-hover:text-black font-black text-4xl mb-6 leading-none transition-colors italic font-serif">04</div>
                    <h4 className="text-black font-black uppercase tracking-[0.2em] text-xs mb-4">Site Production</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">Specialized technical crew roles for film sets and media infrastructure projects.</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
              <button onClick={() => navigate?.('contact')} className="bg-black text-white px-12 py-6 rounded-sm font-black text-xs tracking-[0.2em] uppercase hover:bg-slate-800 transition-all text-center shadow-2xl">
                Apply to Crew
              </button>
              <a href="tel:4044470926" className="border-2 border-black text-black px-12 py-6 rounded-sm font-black text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center">
                Contact Recruiter
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-black p-16 lg:p-24 text-white shadow-2xl">
              <h4 className="text-4xl font-black tracking-tighter mb-10 font-serif italic">The V&A Advantage</h4>
              <ul className="space-y-8">
                {[
                  'Elite performance-based pay schedules.',
                  '24/7 flexible shift availability.',
                  'Advanced safety and technical certification.',
                  'Deployment at Atlanta\'s premier venues.',
                  'Clear professional management pathways.'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center mr-6 border border-white/20">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="text-lg font-medium text-slate-300 leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {fullPage && (
          <div className="mt-48 bg-white p-16 lg:p-32 shadow-sm border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <h4 className="text-4xl font-black text-black mb-16 tracking-tighter text-center uppercase">V&A Intake Protocol</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {[
                  { title: 'Asset Inquiry', desc: 'Submit your resume and professional summary via administrator@vandahire.com.' },
                  { title: 'Strategic Review', desc: 'Our intake team performs a thorough vetting of skills, history, and reliability.' },
                  { title: 'Technical Check', desc: 'Brief safety assessment and protocol alignment for site integration.' },
                  { title: 'Deployment', desc: 'Integration into the active V&A Workforce for your first operational shift.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-20 h-20 bg-black text-white flex items-center justify-center text-3xl font-black font-serif italic">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-black uppercase tracking-[0.2em] mb-4">{step.title}</h5>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employment;