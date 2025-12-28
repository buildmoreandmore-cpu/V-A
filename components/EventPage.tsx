import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventBySlug, getRelatedEvents } from '../data/events';

const EventPage: React.FC = () => {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const event = eventSlug ? getEventBySlug(eventSlug) : null;

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | V&A Workforce`;
    }
    return () => {
      document.title = 'V&A Workforce | Atlanta Labor Staffing Agency';
    };
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Event Not Found</h1>
          <Link to="/" className="text-slate-400 hover:text-white">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedEvents = getRelatedEvents(event);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 min-h-[60vh] flex items-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('${event.heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              {event.location}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
              {event.name}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-black text-black mb-8">Our Services for {event.name}</h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {event.services.map((service, i) => (
                <span
                  key={i}
                  className="bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-black mb-2">Need staffing for {event.name}?</h3>
                <p className="text-slate-400">Contact us for a custom quote.</p>
              </div>
              <a
                href="tel:+14044470926"
                className="bg-white text-black px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Call (404) 447-0926
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-xs font-black tracking-[0.5em] uppercase text-slate-400 mb-12">
              Related Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedEvents.map((relEvent) => (
                <Link
                  key={relEvent.id}
                  to={`/events/${relEvent.id}`}
                  className="bg-white border border-slate-200 p-6 hover:border-black transition-colors group"
                >
                  <h3 className="font-black text-lg text-black group-hover:underline">
                    {relEvent.name}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">{relEvent.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EventPage;
