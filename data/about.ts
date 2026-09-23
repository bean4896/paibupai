export const brandReasons = [
  {
    title: 'One line from brief to publish',
    copy: 'The person who writes the script is in the room when we shoot. The editor already knows why the shot exists. Nothing gets lost in a vendor handoff.',
  },
  {
    title: 'The account stays consistent',
    copy: 'Outsourcing a shoot is easy. Keeping the next twenty posts in the same voice is not. In-house means the brand does not reset every time a freelancer leaves.',
  },
  {
    title: 'Feedback stays inside the work',
    copy: 'If a cut is wrong, we fix the method — not a purchase order. Strategy, directing, filming, editing and operations sit in one team, so the next shoot is smarter.',
  },
] as const

export const team = [
  {
    id: 'kai',
    name: 'Kai Tan',
    role: 'Director',
    industries: ['F&B', 'Beauty', 'Founder IP'],
    shoots: '420+ shoots',
    languages: ['English', 'Mandarin'],
    persona: 'Quiet on set. The brief is the brief — no lucky shots, no filler talking-heads.',
  },
  {
    id: 'mira',
    name: 'Mira Ong',
    role: 'Director',
    industries: ['Property', 'Interior', 'Corporate'],
    shoots: '310+ shoots',
    languages: ['English', 'Mandarin'],
    persona: 'Builds walkthroughs that help someone decide, not just look. Space first, flex second.',
  },
  {
    id: 'jordan',
    name: 'Jordan Lee',
    role: 'Photographer',
    industries: ['Signage', 'Retail', 'Events'],
    shoots: '380+ shoots',
    languages: ['English'],
    persona: 'Still frames that match the cover of the account. Offline visual is not a leftover template.',
  },
  {
    id: 'elena',
    name: 'Elena Cruz',
    role: 'Editor',
    industries: ['Founder IP', 'Beauty', 'Education'],
    shoots: '700+ cuts',
    languages: ['English', 'Mandarin'],
    persona: 'Cuts for the platform and the next action. Covers that get tapped, not showreels.',
  },
  {
    id: 'arun',
    name: 'Arun Nair',
    role: 'Editor',
    industries: ['Corporate', 'Manufacturing', 'F&B'],
    shoots: '540+ cuts',
    languages: ['English'],
    persona: 'Capability, QC, kitchen, line — made readable. Specs without the spec-sheet boredom.',
  },
  {
    id: 'siti',
    name: 'Siti Rahman',
    role: 'Operations lead',
    industries: ['Social', 'All verticals'],
    shoots: '12-month desks',
    languages: ['English', 'Malay', 'Mandarin'],
    persona: 'Calendar, captions, covers, review. Shooting is not the end — publishing is the start.',
  },
] as const

export const packages = [
  {
    id: 'starter',
    name: 'Starter',
    fit: 'First diagnostic, a workshop, or one shoot day.',
    includes: ['Account diagnostic', 'Strategy note', 'One production block'],
    href: '/services#pricing',
  },
  {
    id: 'monthly',
    name: 'Monthly Content',
    fit: 'The brand already knows the direction. Keep showing up.',
    includes: ['Content calendar', 'Shooting + editing cadence', 'Publishing desk'],
    href: '/services#pricing',
  },
  {
    id: 'founder-ip',
    name: 'Founder IP',
    fit: 'The person is the brand. Camera without the performance.',
    includes: ['Positioning + persona', 'Topic calendar', 'Series + review'],
    href: '/services#founder-ip',
    highlight: true,
  },
  {
    id: 'full-service',
    name: 'Full-Service',
    fit: 'Strategy, production and posting on one line — including 12 months.',
    includes: ['Strategy', 'Production', '12-month posting'],
    href: '/services#pricing',
    highlight: true,
  },
  {
    id: 'custom',
    name: 'Custom Plan',
    fit: 'The catalogue is a starting point. The plan follows the business.',
    includes: ['Industry-specific method', 'Mix of à la carte + retainer', 'Quoted after a call'],
    href: '/#book',
  },
] as const
