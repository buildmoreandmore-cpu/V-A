import React from 'react';

interface AboutProps {
  fullPage?: boolean;
  navigate?: (view: any) => void;
}

const About: React.FC<AboutProps> = ({ fullPage, navigate }) => {
  return (
    <section
      className={`${fullPage ? 'pt-40 pb-32' : 'py-32'} bg-white overflow-hidden`}
      aria-label="About V&A Workforce - Atlanta Staffing Agency"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-6">
        {fullPage && (
          <header className="mb-24 text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none mb-8">
              Reliability <span className="opacity-30 font-serif font-black italic">&</span> Integrity.
            </h1>
            <p className="text-xl text-slate-500 font-medium tracking-tight">Atlanta's standard for logistical excellence and workforce integrity. Serving Fulton County, DeKalb County, Gwinnett County, and the entire Metro Atlanta region.</p>
          </header>
        )}

        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <figure className="relative z-10 rounded-sm overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <video
                src="/va.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover min-h-[500px]"
              />
            </figure>
            {/* Logo-Style Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-black p-12 shadow-2xl hidden md:block">
              <div className="text-5xl font-black text-white mb-2 leading-none tracking-tighter font-serif italic">V&A</div>
              <div className="text-slate-500 font-black uppercase tracking-[0.4em] text-[9px]">Workforce Solutions</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-black text-xs font-black tracking-[0.5em] uppercase mb-8 flex items-center">
              <span className="w-12 h-[2px] bg-black mr-6"></span>
              Atlanta's Trusted Staffing Partner
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-black mb-10 leading-[1] tracking-tighter" itemProp="name">
              A Force for <br/>
              <span className="italic font-serif opacity-40">Precision.</span>
            </h3>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium" itemProp="description">
              <strong itemProp="legalName">Varist & Associates (V&A Workforce)</strong> is Atlanta's strategic labor staffing powerhouse. Based in <span itemProp="addressLocality">Downtown Atlanta</span> on Peachtree Street, we specialize in <strong>same-day workforce deployment</strong> for warehouses, events, construction sites, and industrial facilities across <strong>Metro Atlanta and Georgia</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <article className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center text-black shadow-sm" aria-hidden="true">
                   <span className="font-serif italic font-black text-2xl">V</span>
                </div>
                <div>
                  <h4 className="font-black text-black mb-2 uppercase tracking-widest text-xs">Vetted & Background-Checked Crews</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Every worker undergoes thorough <strong>background screening</strong> and safety training. Unlike gig platforms, we provide supervised professional crews you can trust at Mercedes-Benz Stadium, GWCC, or your Fulton Industrial warehouse.</p>
                </div>
              </article>
              <article className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center text-black shadow-sm" aria-hidden="true">
                  <span className="font-serif italic font-black text-2xl">A</span>
                </div>
                <div>
                  <h4 className="font-black text-black mb-2 uppercase tracking-widest text-xs">Same-Day Deployment Atlanta</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed"><strong>Emergency staffing when you need it.</strong> We deploy vetted workers within hours across Atlanta, Alpharetta, Marietta, Buckhead, Midtown, and the entire Metro Atlanta region. Available 24/7.</p>
                </div>
              </article>
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
              <article>
                <h4 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">Corporate Mission</h4>
                <p className="text-slate-500 leading-relaxed font-medium">To lead Atlanta's staffing industry through unmatched accountability. We don't just fill roles at Mercedes-Benz Stadium, GWCC, or your warehouse—we build the infrastructure of success for our partners across Georgia.</p>
              </article>
              <article>
                <h4 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">Zero-Waste Operations</h4>
                <p className="text-slate-500 leading-relaxed font-medium">Setting the standard for <strong>sustainable event cleanup</strong> and eco-friendly labor practices. Our festival and stadium crews specialize in zero-waste site restoration for Piedmont Park events, Shaky Knees, and major Atlanta venues.</p>
              </article>
              <article>
                <h4 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">Atlanta Roots</h4>
                <p className="text-slate-500 leading-relaxed font-medium">Headquartered on <strong>Peachtree Street in Downtown Atlanta</strong>, we're deeply embedded in the local business ecosystem. From Buckhead to the Fulton Industrial District, we prioritize Georgia talent and community growth.</p>
              </article>
            </div>

            {/* Service Areas SEO Block */}
            <div className="mt-16 p-8 bg-slate-50 rounded-sm">
              <h4 className="text-lg font-black text-black mb-4 uppercase tracking-tight">Areas We Serve in Georgia</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                V&A Workforce provides labor staffing services throughout Metro Atlanta and Georgia including: <strong>Downtown Atlanta</strong>, <strong>Midtown</strong>, <strong>Buckhead</strong>, <strong>Alpharetta</strong>, <strong>Marietta</strong>, <strong>Sandy Springs</strong>, <strong>Decatur</strong>, <strong>Duluth</strong>, <strong>Kennesaw</strong>, <strong>Lawrenceville</strong>, <strong>McDonough</strong>, <strong>Newnan</strong>, <strong>College Park</strong>, <strong>Union City</strong>, and <strong>East Point</strong>. We serve <strong>Fulton County</strong>, <strong>DeKalb County</strong>, <strong>Gwinnett County</strong>, <strong>Cobb County</strong>, <strong>Henry County</strong>, and <strong>Clayton County</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;