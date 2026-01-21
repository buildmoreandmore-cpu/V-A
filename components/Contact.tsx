import React, { useState } from 'react';

interface ContactProps {
  fullPage?: boolean;
  title?: string;
  navigate?: (view: any) => void;
}

const Contact: React.FC<ContactProps> = ({ fullPage, title, navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Workforce Deployment',
    urgency: 'Immediate / < 24 hrs',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send email via mailto
    const subject = `V&A Workforce Inquiry - ${formData.service}`;
    const body = `Name/Company: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0AUrgency: ${formData.urgency}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:Polo@vassoc.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      className={`${fullPage ? 'pt-32 lg:pt-40 pb-16 lg:pb-32' : 'py-16 lg:py-32'} bg-white`}
      aria-label="Contact V&A Workforce - Atlanta Premium Contract Labor Service Provider"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto px-6">
        {fullPage && (
          <header className="mb-12 lg:mb-24">
            <h1 className="text-5xl md:text-9xl font-black text-black tracking-tighter leading-none mb-6 lg:mb-10">
              Contact <br/> <span className="opacity-30 italic font-serif">Us.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl tracking-tight leading-relaxed">
              Partner with <strong>Atlanta's premier contract labor service provider</strong>. Same-day deployment, vetted crews, and professional accountability. Call <strong>404.861.7794</strong> for immediate staffing needs.
            </p>
          </header>
        )}

        <div className="bg-white rounded-sm overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-2/5 bg-black p-8 md:p-16 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 skew-y-12 transform origin-bottom-right pointer-events-none"></div>
            
            <h2 className="text-slate-500 text-[10px] font-black tracking-[0.5em] uppercase mb-10 relative z-10">Communications</h2>
            <h3 className="text-6xl font-black mb-16 tracking-tighter leading-none relative z-10 font-serif italic opacity-30">V&A.</h3>
            
            <div className="space-y-14 relative z-10">
              <div className="flex items-start space-x-8">
                <div className="bg-white/10 p-4 border border-white/20" aria-hidden="true">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <div className="text-slate-500 text-[9px] uppercase tracking-[0.4em] font-black mb-3">Call Now - 24/7</div>
                  <a href="tel:+14048617794" className="text-xl font-black tracking-tight mb-1 block hover:text-slate-300 transition-colors" itemProp="telephone">404.861.7794</a>
                </div>
              </div>

              <div className="flex items-start space-x-8" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="bg-white/10 p-4 border border-white/20" aria-hidden="true">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div className="text-slate-500 text-[9px] uppercase tracking-[0.4em] font-black mb-3">Downtown Atlanta HQ</div>
                  <address className="text-lg font-black leading-snug not-italic whitespace-nowrap">
                    <span itemProp="streetAddress">196 Peachtree St SW, #121</span><br/>
                    <span itemProp="addressLocality">Atlanta</span>, <span itemProp="addressRegion">GA</span> <span itemProp="postalCode">30303</span>
                  </address>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="bg-white/10 p-4 border border-white/20" aria-hidden="true">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-slate-500 text-[9px] uppercase tracking-[0.4em] font-black mb-3">Email Us</div>
                  <a href="mailto:Polo@vassoc.com" className="text-sm font-bold opacity-80 mb-1 block hover:opacity-100 transition-opacity" itemProp="email">President: Polo@vassoc.com</a>
                  <a href="mailto:Jasia@vassoc.com" className="text-sm font-bold opacity-80 mb-1 block hover:opacity-100 transition-opacity">Accounts: Jasia@vassoc.com</a>
                  <a href="mailto:Shaun@vassoc.com" className="text-sm font-bold opacity-80 block hover:opacity-100 transition-opacity">Admin: Shaun@vassoc.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-8 md:p-16 lg:p-24 bg-white">
            <h4 className="text-3xl font-black text-black mb-14 tracking-tighter uppercase border-b border-slate-100 pb-8">Inquiry Protocol</h4>
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">✓</div>
                <h5 className="text-2xl font-black text-black mb-4">Inquiry Submitted!</h5>
                <p className="text-slate-500">Your email client should open. If not, please call us directly at <strong>404.861.7794</strong></p>
              </div>
            ) : (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Corporate Identity</label>
                    <input type="text" required className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:outline-none focus:border-black transition-all font-bold placeholder-slate-300" placeholder="Full Name / Company" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Secure Channel</label>
                    <input type="email" required className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:outline-none focus:border-black transition-all font-bold placeholder-slate-300" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Operational Need</label>
                    <select className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:outline-none focus:border-black transition-all font-bold appearance-none cursor-pointer" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                      <option>Workforce Deployment</option>
                      <option>Logistical Supervision</option>
                      <option>Career Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Response Velocity</label>
                    <select className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:outline-none focus:border-black transition-all font-bold appearance-none cursor-pointer" value={formData.urgency} onChange={(e) => setFormData({...formData, urgency: e.target.value})}>
                      <option>Immediate / &lt; 24 hrs</option>
                      <option>Strategic / This Week</option>
                      <option>Planning / Future</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Strategic Requirements</label>
                  <textarea rows={4} required className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:outline-none focus:border-black transition-all font-bold placeholder-slate-300" placeholder="Detail your project scope..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white font-black py-7 rounded-sm hover:bg-slate-800 transition-all shadow-2xl active:scale-[0.98] tracking-[0.3em] uppercase text-xs">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;