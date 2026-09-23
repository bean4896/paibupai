export const aLaCarte = [
  {
    id: 'strategy',
    name: 'Strategy',
    copy: 'Brand, audience and content direction before anyone picks up a camera.',
  },
  {
    id: 'scriptwriting',
    name: 'Scriptwriting',
    copy: 'Topics, directing notes and scripts with a reason to exist.',
  },
  {
    id: 'filming',
    name: 'Filming',
    copy: 'Mobile filming and lighting. On-set decisions, not lucky shots.',
  },
  {
    id: 'editing',
    name: 'Editing',
    copy: 'Cuts built for the account and the platform — not for awards.',
  },
  {
    id: 'diagnostics',
    name: 'Account Diagnostics',
    copy: 'What is working, what is noise, and what to stop filming.',
  },
  {
    id: 'campaign',
    name: 'Campaign Strategy',
    copy: 'A campaign with a job: traffic, bookings, launches or a series.',
  },
] as const

export const founderIpSteps = [
  { id: 'positioning', name: 'Positioning', copy: 'Who this person is for, and why anyone should listen.' },
  { id: 'topic', name: 'Topic', copy: 'A calendar of judgments, not filler talking-heads.' },
  { id: 'script-film', name: 'Script & Filming', copy: 'Say it like the person. Shoot it so weekly output is realistic.' },
  { id: 'persona', name: 'Persona', copy: 'A recognisable way of thinking — not an influencer act.' },
  { id: 'series', name: 'Series', copy: 'Repeatable formats that compound, instead of one viral clip.' },
  { id: 'review', name: 'Review', copy: 'What got saved, who enquired, what we shoot next.' },
] as const

export const socialPlatforms = ['TikTok', 'Instagram', 'Facebook', 'Xiaohongshu', 'WeChat Channels'] as const

export const signageItems = [
  'Lightboxes',
  'Shopfronts',
  'Hoardings',
  'Mall ads',
  'Store visual',
] as const

export const featuredModules = [
  {
    id: 'founder-ip',
    name: 'FOUNDER IP',
    tagline: 'IP that sounds like the person, not a script.',
    copy: 'Positioning, topics, on-camera presence and a series the business can actually keep running.',
  },
  {
    id: 'social',
    name: 'SOCIAL MEDIA MANAGEMENT',
    tagline: 'Shooting is not the end. Publishing is the start.',
    copy: 'TikTok, Instagram, Facebook, Xiaohongshu and WeChat Channels — managed as one publishing system.',
  },
  {
    id: 'signage',
    name: 'SIGNAGE & VISUAL',
    tagline: 'Online they scroll to you. Offline they see you.',
    copy: 'Lightboxes, shopfronts, hoardings and mall ads that speak the same language as the account.',
  },
  {
    id: 'live-academy',
    name: 'LIVE STREAMING & ACADEMY',
    tagline: 'Leave the capability with the team.',
    copy: 'Live as a repeatable content system. Training so the brand can keep producing on its own.',
  },
] as const

export const industries = [
  {
    id: 'property',
    name: 'Property',
    pitch: 'From listing photos to content that books viewings.',
    shoot: 'Unit walkthroughs, neighbourhood living radius, consultant Q&As, site progress.',
    formats: ['Founder IP', 'Listing series', 'Viewing conversion'],
  },
  {
    id: 'fnb',
    name: 'F&B',
    pitch: 'Content that fills tables and membership, not just foodie traffic.',
    shoot: 'Kitchen standards, signature logic, daypart menus, regulars, outlet catchments.',
    formats: ['Store content', 'Membership', 'Live clips'],
  },
  {
    id: 'beauty',
    name: 'Beauty',
    pitch: 'Educate the decision first. Then talk treatments.',
    shoot: 'Consult logic, treatment explainers, founder / doctor presence, real client questions.',
    formats: ['Founder IP', 'Education', 'Booking content'],
  },
  {
    id: 'tcm',
    name: 'TCM & Wellness',
    pitch: 'Authority through clarity, not fear.',
    shoot: 'Principle explainers, check-up flow, daily management, family and corporate health.',
    formats: ['Founder IP', 'Education', 'Series'],
  },
  {
    id: 'interior',
    name: 'Interior & Furniture',
    pitch: 'Spaces that are understood, not just browsed.',
    shoot: 'Lived-in layouts, materials, designer voice, install process, floor-plan fit.',
    formats: ['Space narrative', 'Product', 'Showroom visual'],
  },
  {
    id: 'corporate',
    name: 'Corporate & Manufacturing',
    pitch: 'Capability translated into buyer language.',
    shoot: 'Line QC, engineer explainers, lead time, applications, leadership shorts.',
    formats: ['Capability proof', 'Founder IP', 'Hiring'],
  },
  {
    id: 'education',
    name: 'Education',
    pitch: 'Proof of teaching, not brochure campuses.',
    shoot: 'Teacher IP, classroom method, parent questions, student outcomes you can show.',
    formats: ['Teacher IP', 'Course proof', 'Ad series'],
  },
  {
    id: 'professional',
    name: 'Professional Services',
    pitch: 'Trust before the meeting. Judgment on camera.',
    shoot: 'Point-of-view talks, case logic, on-site decisions, working methods.',
    formats: ['Founder IP', 'Authority series', 'Lead magnets'],
  },
] as const

export type IndustryId = (typeof industries)[number]['id']

export const priceCategories = [
  { id: 'all', label: 'All' },
  { id: 'alacarte', label: 'À la carte' },
  { id: 'production', label: 'Content packages' },
  { id: 'social', label: 'Social' },
  { id: 'signage', label: 'Signage' },
  { id: 'live-academy', label: 'Live & Academy' },
  { id: 'partnership', label: 'Partnership' },
] as const

export type PriceCategoryId = Exclude<(typeof priceCategories)[number]['id'], 'all'>

export type PricePlan = {
  id: string
  name: string
  category: PriceCategoryId
  price: string
  period: string
  blurb: string
  includes: string[]
  highlight?: 'popular' | 'featured'
}

export const pricePlans: PricePlan[] = [
  {
    id: 'diagnostic',
    name: 'Account Diagnostic',
    category: 'alacarte',
    price: 'S$980',
    period: 'one-off',
    blurb: 'A read of the account before anyone films more of the wrong thing.',
    includes: ['Account & competitor scan', 'What to stop / start', '90-day direction note'],
  },
  {
    id: 'strategy-workshop',
    name: 'Strategy Workshop',
    category: 'alacarte',
    price: 'S$1,800',
    period: 'one-off',
    blurb: 'Brand, audience and content direction in one working session.',
    includes: ['Half-day workshop', 'Positioning one-pager', 'Topic pillars'],
  },
  {
    id: 'campaign-strategy',
    name: 'Campaign Strategy',
    category: 'alacarte',
    price: 'S$2,400',
    period: 'one-off',
    blurb: 'A campaign with a job — launch, bookings, or a series.',
    includes: ['Campaign idea & hooks', 'Platform plan', 'Shoot list'],
  },
  {
    id: 'script-pack',
    name: 'Scriptwriting Pack',
    category: 'alacarte',
    price: 'S$1,200',
    period: '8 scripts',
    blurb: 'Topics and scripts written for this brand, not a template stack.',
    includes: ['8 short-form scripts', 'Directing notes', 'Hook variants'],
  },
  {
    id: 'half-day-film',
    name: 'Half-day Filming',
    category: 'alacarte',
    price: 'S$1,500',
    period: 'half day',
    blurb: 'On-set execution. Lighting, directing, coverage.',
    includes: ['Director + camera', 'On-site lighting', 'Shot log for edit'],
  },
  {
    id: 'full-day-film',
    name: 'Full-day Filming',
    category: 'alacarte',
    price: 'S$2,800',
    period: 'full day',
    blurb: 'A full day built around the content plan, not a highlight reel.',
    includes: ['Director + camera', 'Multi-setup coverage', 'Shot log for edit'],
  },
  {
    id: 'edit-pack',
    name: 'Editing Pack',
    category: 'alacarte',
    price: 'S$1,600',
    period: '8 cuts',
    blurb: 'Cuts for the account and the platform, with covers that get tapped.',
    includes: ['8 short cuts', 'Captions + covers', '1 revision round'],
  },
  {
    id: 'founder-starter',
    name: 'Founder IP Starter',
    category: 'production',
    price: 'S$4,800',
    period: '4 weeks',
    blurb: 'Get the founder on camera without the awkwardness, then lock a weekly format.',
    includes: ['Positioning + persona', 'Topic calendar', '2 shoot days + edits'],
  },
  {
    id: 'founder-series',
    name: 'Founder IP Series',
    category: 'production',
    price: 'S$12,800',
    period: '12 weeks',
    blurb: 'A recognisable series the business can keep running.',
    includes: ['Full IP path', 'Monthly review', '12-week publishing plan'],
    highlight: 'featured',
  },
  {
    id: 'content-sprint',
    name: 'Content Sprint',
    category: 'production',
    price: 'S$3,600',
    period: '1 week',
    blurb: 'One intense week: plan, shoot, cut, ready to publish.',
    includes: ['Strategy huddle', '1–2 shoot days', '8–12 cuts'],
  },
  {
    id: 'social-starter',
    name: 'Social Starter',
    category: 'social',
    price: 'S$1,980',
    period: '/ mo',
    blurb: 'One platform, run properly — calendar, posting, light review.',
    includes: ['1 platform', '12 posts / month', 'Monthly review'],
  },
  {
    id: 'social-growth',
    name: 'Social Growth',
    category: 'social',
    price: 'S$3,800',
    period: '/ mo',
    blurb: 'Three platforms, one calendar, one story.',
    includes: ['3 platforms', 'Content calendar', 'Captions, covers, posting'],
  },
  {
    id: 'fabufa-full',
    name: 'Social Full House',
    category: 'social',
    price: 'S$5,800',
    period: '/ mo',
    blurb: 'TikTok, IG, FB, Xiaohongshu, WeChat Channels — full desk.',
    includes: ['5 platforms', 'Calendar + posting', 'Performance review'],
    highlight: 'popular',
  },
  {
    id: 'publishing-desk',
    name: 'Publishing Desk',
    category: 'social',
    price: 'S$1,280',
    period: '/ mo',
    blurb: 'You shoot. We get it out — covers, captions, schedule.',
    includes: ['Posting management', 'Covers + captions', '1 platform to start'],
  },
  {
    id: 'lightbox',
    name: 'Lightbox',
    category: 'signage',
    price: 'From S$880',
    period: 'per unit',
    blurb: 'A lightbox that matches the online cover, not a leftover template.',
    includes: ['Artwork', 'Production', 'Install'],
  },
  {
    id: 'shopfront',
    name: 'Shopfront Visual',
    category: 'signage',
    price: 'From S$2,400',
    period: 'package',
    blurb: 'Shopfront, window and indoor visual as one set.',
    includes: ['Visual direction', 'Artwork', 'Production + install'],
  },
  {
    id: 'hoarding',
    name: 'Hoarding / Mall Campaign',
    category: 'signage',
    price: 'From S$8,800',
    period: 'campaign',
    blurb: 'Site hoardings and mall ads that continue the account, not a second brand.',
    includes: ['Campaign visual', 'Production', 'Install + dismantle'],
  },
  {
    id: 'live-day',
    name: 'Live Streaming Day',
    category: 'live-academy',
    price: 'S$3,200',
    period: 'per day',
    blurb: 'A live with a job — product, brand, or event — plus clips after.',
    includes: ['Live plan', 'On-site execution', 'Highlight clips'],
  },
  {
    id: 'academy-founder',
    name: 'Academy: Founder on Camera',
    category: 'live-academy',
    price: 'S$1,280',
    period: '/ seat',
    blurb: 'Leave the capability with the founder, not only with the agency.',
    includes: ['On-camera training', 'Topic method', 'Phone filming basics'],
  },
  {
    id: 'partnership-12',
    name: '12-Month Partnership',
    category: 'partnership',
    price: 'Custom',
    period: '/ year',
    blurb: 'Strategy, production and 12 months of posting on one line.',
    includes: ['Strategy + production', '12 months posting included', 'Monthly review'],
    highlight: 'featured',
  },
]
