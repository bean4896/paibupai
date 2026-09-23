export const workFilters = [
  { id: 'all', label: 'All' },
  { id: 'fnb', label: 'F&B' },
  { id: 'property', label: 'Property' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'founder', label: 'Founder IP' },
  { id: 'events', label: 'Events' },
  { id: 'signage', label: 'Lightboxes' },
] as const

export type WorkFilterId = Exclude<(typeof workFilters)[number]['id'], 'all'>

export type WorkPiece = {
  id: string
  title: string
  industry: WorkFilterId
  kind: 'Film' | 'Still' | 'Signage'
  aspect: '9/16' | '16/9' | '4/5' | '1/1'
}

export const workPieces: WorkPiece[] = [
  { id: 'fnb-kitchen', title: 'Kitchen standard series', industry: 'fnb', kind: 'Film', aspect: '9/16' },
  { id: 'fnb-menu', title: 'Daypart menu stills', industry: 'fnb', kind: 'Still', aspect: '4/5' },
  { id: 'prop-walk', title: 'Unit walkthrough', industry: 'property', kind: 'Film', aspect: '9/16' },
  { id: 'prop-site', title: 'Site progress', industry: 'property', kind: 'Film', aspect: '16/9' },
  { id: 'beauty-consult', title: 'Consult logic', industry: 'beauty', kind: 'Film', aspect: '9/16' },
  { id: 'beauty-cover', title: 'Treatment covers', industry: 'beauty', kind: 'Still', aspect: '4/5' },
  { id: 'corp-line', title: 'Line QC proof', industry: 'corporate', kind: 'Film', aspect: '16/9' },
  { id: 'corp-lead', title: 'Leadership shorts', industry: 'corporate', kind: 'Film', aspect: '9/16' },
  { id: 'founder-pov', title: 'Point-of-view talks', industry: 'founder', kind: 'Film', aspect: '9/16' },
  { id: 'founder-still', title: 'Persona stills', industry: 'founder', kind: 'Still', aspect: '4/5' },
  { id: 'event-live', title: 'Brand live clips', industry: 'events', kind: 'Film', aspect: '16/9' },
  { id: 'event-day', title: 'Launch day coverage', industry: 'events', kind: 'Film', aspect: '4/5' },
  { id: 'sign-box', title: 'Shopfront lightbox', industry: 'signage', kind: 'Signage', aspect: '16/9' },
  { id: 'sign-mall', title: 'Mall hoarding', industry: 'signage', kind: 'Signage', aspect: '1/1' },
]
