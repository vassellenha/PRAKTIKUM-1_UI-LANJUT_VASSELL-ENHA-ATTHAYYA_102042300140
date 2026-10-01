export const events = [
  {
    id: 1,
    title: 'Tech Innovators Summit 2026',
    category: 'Technology',
    date: 'Oct 15, 2026',
    time: '09:00 - 17:00',
    location: 'Jakarta Convention Center',
    shortDesc:
      'A gathering of the brightest minds in tech to discuss the future of AI, cloud, and software engineering.',
    description: [
      'Join hundreds of developers, founders, and tech enthusiasts for a full day of talks, workshops, and networking sessions.',
      'This year’s summit focuses on practical AI adoption, scalable cloud architecture, and the tools shaping the next decade of software development.'
    ],
    agenda: [
      '09:00 - Registration & Morning Coffee',
      '10:00 - Opening Keynote: The Future of AI',
      '12:00 - Networking Lunch',
      '13:30 - Breakout Workshops',
      '16:00 - Closing Panel & Awards'
    ],
    price: 'Rp 250.000',
    ticketDesc: 'Includes full-day access, lunch, and workshop materials.',
    spots: 'Only 12 spots left!'
  },
  {
    id: 2,
    title: 'Jazz Under The Stars',
    category: 'Music & Concerts',
    date: 'Nov 2, 2026',
    time: '19:00 - 22:00',
    location: 'Taman Budaya Amphitheater',
    shortDesc:
      'An intimate outdoor evening of live jazz featuring local and international artists.',
    description: [
      'Bring a blanket and settle in for an evening of smooth jazz under the open sky.',
      'Featuring a rotating lineup of trios and soloists, with a food and drinks corner open throughout the show.'
    ],
    agenda: [
      '19:00 - Doors Open',
      '19:30 - Opening Act',
      '20:30 - Headline Performance',
      '22:00 - Show Ends'
    ],
    price: 'Rp 150.000',
    ticketDesc: 'General admission, standing and seated areas available.',
    spots: '40 spots left'
  },
  {
    id: 3,
    title: 'Startup Pitch Night',
    category: 'Business',
    date: 'Nov 20, 2026',
    time: '18:00 - 21:00',
    location: 'Gatherly Hub, South Jakarta',
    shortDesc:
      'Watch early-stage founders pitch their ideas live to a panel of investors and mentors.',
    description: [
      'Ten startups will take the stage for a 5-minute pitch followed by Q&A with our panel of investors.',
      'A great opportunity to network with founders, mentors, and fellow builders over light refreshments.'
    ],
    agenda: [
      '18:00 - Registration & Networking',
      '18:30 - Pitch Sessions Begin',
      '20:30 - Judges Deliberation & Awards',
      '21:00 - Closing Networking'
    ],
    price: 'Free',
    ticketDesc: 'Free entry, limited seats, registration required.',
    spots: '8 spots left!'
  }
]

export function getEventById(id) {
  return events.find((event) => event.id === Number(id))
}
