export interface EventConfig {
  id: string;
  name: string;
  title: string;
  description: string;
  location: string;
  category: 'festival' | 'motorsports' | 'convention' | 'sports';
  heroImage: string;
  services: string[];
}

export const EVENTS: EventConfig[] = [
  {
    id: 'lollapalooza',
    name: 'Lollapalooza',
    title: 'Lollapalooza Staffing Services',
    description: 'Professional event staffing for Lollapalooza music festival. Setup, operations, and teardown crews.',
    location: 'Chicago, IL',
    category: 'festival',
    heroImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=2070',
    services: ['Stage setup', 'Crowd management', 'VIP services', 'Teardown crews'],
  },
  {
    id: 'bonnaroo',
    name: 'Bonnaroo',
    title: 'Bonnaroo Festival Staffing',
    description: 'Expert staffing solutions for Bonnaroo Music & Arts Festival in Tennessee.',
    location: 'Manchester, TN',
    category: 'festival',
    heroImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070',
    services: ['Festival setup', 'Campground operations', 'Stage crews', 'Cleanup teams'],
  },
  {
    id: 'edc-las-vegas',
    name: 'EDC Las Vegas',
    title: 'EDC Las Vegas Event Staff',
    description: 'Professional staffing for Electric Daisy Carnival Las Vegas.',
    location: 'Las Vegas, NV',
    category: 'festival',
    heroImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070',
    services: ['Production support', 'VIP services', 'Security assist', 'Night operations'],
  },
  {
    id: 'coachella',
    name: 'Coachella',
    title: 'Coachella Valley Music Festival Staffing',
    description: 'Elite staffing services for Coachella Valley Music and Arts Festival.',
    location: 'Indio, CA',
    category: 'festival',
    heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2070',
    services: ['Art installation', 'VIP areas', 'General operations', 'Artist hospitality'],
  },
  {
    id: 'nascar-events',
    name: 'NASCAR Events',
    title: 'NASCAR Event Staffing',
    description: 'Professional staffing for NASCAR races and motorsports events nationwide.',
    location: 'Nationwide',
    category: 'motorsports',
    heroImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=2070',
    services: ['Track setup', 'Fan zones', 'Parking operations', 'Vendor support'],
  },
  {
    id: 'formula-1-miami',
    name: 'Formula 1 Miami',
    title: 'Formula 1 Miami Grand Prix Staffing',
    description: 'Premium staffing for the F1 Miami Grand Prix and related events.',
    location: 'Miami, FL',
    category: 'motorsports',
    heroImage: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=2070',
    services: ['Paddock support', 'Hospitality', 'Track operations', 'VIP services'],
  },
  {
    id: 'super-bowl',
    name: 'Super Bowl',
    title: 'Super Bowl Event Staffing',
    description: 'Championship-level staffing for Super Bowl and related NFL events.',
    location: 'Varies',
    category: 'sports',
    heroImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=2070',
    services: ['Stadium setup', 'Fan fest', 'Media support', 'Hospitality'],
  },
  {
    id: 'ces-las-vegas',
    name: 'CES Las Vegas',
    title: 'CES Las Vegas Convention Staffing',
    description: "Trade show staffing for CES - the world's largest tech convention.",
    location: 'Las Vegas, NV',
    category: 'convention',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070',
    services: ['Booth setup', 'Logistics', 'Registration', 'Teardown'],
  },
  {
    id: 'sxsw',
    name: 'SXSW',
    title: 'SXSW Festival Staffing',
    description: 'Staffing solutions for South by Southwest festival in Austin.',
    location: 'Austin, TX',
    category: 'festival',
    heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=2070',
    services: ['Venue setup', 'Registration', 'Film screenings', 'Concert support'],
  },
  {
    id: 'austin-city-limits',
    name: 'Austin City Limits',
    title: 'Austin City Limits Festival Staffing',
    description: 'Professional staffing for ACL Festival at Zilker Park.',
    location: 'Austin, TX',
    category: 'festival',
    heroImage: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=2070',
    services: ['Park setup', 'Stage crews', 'Vendor support', 'Cleanup'],
  },
  {
    id: 'ultra-music-festival',
    name: 'Ultra Music Festival',
    title: 'Ultra Music Festival Staffing',
    description: 'Event staffing for Ultra Music Festival in Miami.',
    location: 'Miami, FL',
    category: 'festival',
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2070',
    services: ['Stage production', 'VIP areas', 'Security support', 'Cleanup'],
  },
  {
    id: 'comic-con',
    name: 'Comic-Con',
    title: 'Comic-Con Convention Staffing',
    description: 'Convention staffing for Comic-Con events nationwide.',
    location: 'San Diego, CA & More',
    category: 'convention',
    heroImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=2070',
    services: ['Exhibit setup', 'Registration', 'Crowd management', 'Logistics'],
  },
];

export const getEventBySlug = (slug: string): EventConfig | undefined => {
  return EVENTS.find(event => event.id === slug);
};

export const getRelatedEvents = (event: EventConfig, limit: number = 3): EventConfig[] => {
  return EVENTS.filter(e => e.category === event.category && e.id !== event.id).slice(0, limit);
};
