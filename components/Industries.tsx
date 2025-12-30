import React from 'react';

interface IndustriesProps {
  navigate?: (view: any) => void;
}

const Industries: React.FC<IndustriesProps> = ({ navigate }) => {
  const industries = [
    {
      name: 'Warehousing & Logistics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
      services: ['Forklift Operators', 'Loading Dock Workers', 'Inventory Management', 'Order Fulfillment']
    },
    {
      name: 'Events & Entertainment',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
      services: ['Festival Crews', 'Stadium Operations', 'Concert Setup', 'Convention Support']
    },
    {
      name: 'Construction & Demolition',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
      services: ['Site Cleanup', 'Debris Removal', 'Post-Build Cleaning', 'Demolition Support']
    },
    {
      name: 'Film & Production',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600',
      services: ['Set Construction', 'Track Mat Installation', 'Production Assistants', 'Grip & Electric Support']
    }
  ];

  return (
    <section className="py-16 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-xs font-black tracking-[0.5em] uppercase text-slate-500 mb-6">Industries We Serve</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            Specialized <br className="md:hidden" />
            <span className="opacity-30 italic font-serif">Expertise.</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            From massive festivals to local warehouses, our crews are trained for the demands of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-sm"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                <h4 className="text-2xl lg:text-3xl font-black tracking-tight mb-4">
                  {industry.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry.services.map((service, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate?.('labor')}
            className="border-2 border-white text-white px-10 py-5 font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
