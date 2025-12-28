import React, { useEffect, useState } from 'react';

interface CareersProps {
  navigate?: (view: string) => void;
}

const Careers: React.FC<CareersProps> = () => {
  useEffect(() => {
    document.title = 'Join Our Crew | Careers at V&A Workforce | Atlanta Jobs';
    return () => {
      document.title = 'V&A Workforce | Atlanta Labor Staffing Agency';
    };
  }, []);

  const benefits = [
    { num: '01', title: 'Competitive Pay', desc: 'Performance-based pay with weekly direct deposit' },
    { num: '02', title: 'Flexible Shifts', desc: '24/7 availability - work when it fits your schedule' },
    { num: '03', title: 'Travel Opportunities', desc: 'Work major festivals nationwide - Lollapalooza, Bonnaroo, EDC' },
    { num: '04', title: 'Career Growth', desc: 'Clear pathways to supervisor and management roles' },
    { num: '05', title: 'Safety Training', desc: 'Professional certification and safety training provided' },
    { num: '06', title: 'Premier Venues', desc: 'Work at Mercedes-Benz Stadium, GWCC, and more' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    driversLicense: '',
    willingToTravel: '',
    address: '',
    about: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! We will contact you within 48 hours.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Now Hiring
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Join Our <br />
              <span className="opacity-30 italic font-serif">Crew.</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-10">
              No experience needed. We're looking for hardworking individuals ready to join Atlanta's premier labor workforce.
              Work events like <strong className="text-white">Lollapalooza</strong>, <strong className="text-white">Bonnaroo</strong>, and <strong className="text-white">NASCAR</strong> - or stay local with warehouse and construction work.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="bg-white text-black px-10 py-5 font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-colors inline-flex items-center"
              >
                Apply Now
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="tel:+14044470926"
                className="border-2 border-white text-white px-10 py-5 font-black text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Call (404) 447-0926
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-xs font-black tracking-[0.5em] uppercase text-slate-400 mb-16">Why Work With V&A</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.num} className="border border-slate-200 p-6 hover:border-black transition-colors group">
                <span className="text-4xl font-black text-slate-200 group-hover:text-slate-400 transition-colors">
                  {benefit.num}
                </span>
                <h3 className="text-lg font-black text-black mt-2 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-xs font-black tracking-[0.5em] uppercase text-slate-500 mb-4">Apply Now</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-12">Join Our Team</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full px-4 py-4 bg-black border border-slate-700 text-white placeholder-slate-500 focus:border-white focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-4 bg-black border border-slate-700 text-white placeholder-slate-500 focus:border-white focus:outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-4 bg-black border border-slate-700 text-white placeholder-slate-500 focus:border-white focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Do you have a Driver's License? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="driversLicense"
                        value="yes"
                        required
                        className="accent-white"
                        onChange={(e) => setFormData({ ...formData, driversLicense: e.target.value })}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="driversLicense"
                        value="no"
                        className="accent-white"
                        onChange={(e) => setFormData({ ...formData, driversLicense: e.target.value })}
                      />
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Willing to Travel? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="willingToTravel"
                        value="yes"
                        required
                        className="accent-white"
                        onChange={(e) => setFormData({ ...formData, willingToTravel: e.target.value })}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="willingToTravel"
                        value="no"
                        className="accent-white"
                        onChange={(e) => setFormData({ ...formData, willingToTravel: e.target.value })}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-4 bg-black border border-slate-700 text-white placeholder-slate-500 focus:border-white focus:outline-none"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />

              <textarea
                placeholder="Tell us about yourself..."
                rows={4}
                className="w-full px-4 py-4 bg-black border border-slate-700 text-white placeholder-slate-500 focus:border-white focus:outline-none resize-none"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-5 font-black uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
