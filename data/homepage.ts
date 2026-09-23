export const services = [
  {
    id: 'studio',
    number: '01',
    name: 'Paibupai Studio',
    en: 'Content Strategy & Video Production',
    value: 'We do not just shoot one video. We help clients keep content going, long term.',
    keywords: [
      'Brand Strategy',
      'Account Positioning',
      'Topic Planning',
      'Directing',
      'Scriptwriting',
      'Mobile Filming',
      'Editing',
      'Founder IP',
      'Corporate Brand Content',
      'Ad Short Videos',
    ],
  },
  {
    id: 'marketing',
    number: '02',
    name: 'Paibupai Marketing',
    en: 'Social Media Marketing & Management',
    value: 'Publishing is only the start. We help brands keep showing up — and stay remembered.',
    keywords: [
      'Social Publishing',
      'Account Management',
      'Content Calendar',
      'Captions',
      'Covers',
      'Platform Management',
      'Performance Review',
      'Brand Exposure',
    ],
    platforms: ['TikTok', 'Instagram', 'Facebook', 'Xiaohongshu', 'WeChat Channels'],
  },
  {
    id: 'live',
    number: '03',
    name: 'Live',
    en: 'Live Streaming',
    value: 'Live streaming as a repeatable content system, not a one-day event.',
    keywords: [
      'Live Planning',
      'Live Execution',
      'Product Lives',
      'Brand Lives',
      'Event Lives',
      'Live Clips',
    ],
  },
  {
    id: 'signage',
    number: '04',
    name: 'Paibupai Signage',
    en: 'Lightbox · Signboard · Offline Advertising',
    tagline: 'From Online Content to Offline Visibility.',
    value: 'When the online content is done, the brand still needs to be seen offline.',
    keywords: [
      'Lightboxes',
      'Signboards',
      'Mall Hoardings',
      'Storefront Ads',
      'Artwork',
      'Production',
      'Installation',
      'Dismantling',
    ],
  },
  {
    id: 'academy',
    number: '05',
    name: 'Academy',
    en: 'Training & Business Content Education',
    value: 'Leave content capability with the team, so the brand can keep producing on its own.',
    keywords: [
      'Founder IP Training',
      'Corporate Short-Video Training',
      'Mobile Filming Training',
      'Social Media Training',
      'In-house Content Team Building',
    ],
  },
] as const

export const shootReels = [
  {
    id: 'technique',
    title: 'Shooting technique',
    copy: 'Lighting, directing and on-set decisions — not lucky shots.',
  },
  {
    id: 'business',
    title: 'Business filming',
    copy: 'Product, service and next-step content that a customer can act on.',
  },
  {
    id: 'founder',
    title: 'Founder on camera',
    copy: 'IP that sounds like the person, not a script.',
  },
  {
    id: 'edit',
    title: 'Cut for the account',
    copy: 'Edits built for publishing, not for awards.',
  },
] as const

export const workflowSteps = [
  {
    id: 'strategy',
    en: 'STRATEGY',
    sub: 'Strategy',
    detail: 'Clarify brand, audience and content direction first.',
  },
  {
    id: 'script',
    en: 'SCRIPT',
    sub: 'Topics / Directing / Scripts',
    detail: 'Every piece of content has a purpose.',
  },
  {
    id: 'shoot',
    en: 'SHOOT',
    sub: 'Mobile Filming / Lighting',
    detail: 'On-set execution. Not luck.',
  },
  {
    id: 'edit',
    en: 'EDIT',
    sub: 'Editing / Packaging',
    detail: 'Edits serve the account, not awards.',
  },
  {
    id: 'publish',
    en: 'PUBLISH',
    sub: 'Social Publishing',
    detail: 'The right time, platform and cover.',
  },
  {
    id: 'operate',
    en: 'OPERATE',
    sub: 'Account Operations',
    detail: 'Show up consistently. Build memory.',
  },
  {
    id: 'review',
    en: 'REVIEW',
    sub: 'Review / Next Strategy',
    detail: 'Results decide what we shoot next.',
  },
] as const

export const audiences = [
  { id: 'corporate', label: 'Corporate Brands' },
  { id: 'sme', label: 'SMEs' },
  { id: 'chain', label: 'Chain Stores' },
  { id: 'fnb', label: 'F&B' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'founders', label: 'Founders' },
  { id: 'personal-ip', label: 'Personal IP' },
  { id: 'manufacturing', label: 'Manufacturing / Factories' },
  { id: 'professional', label: 'Professional Services' },
  { id: 'retail', label: 'Retail Brands' },
] as const

export const differentiators = [
  {
    title: 'STRATEGY FIRST',
    subtitle: 'Strategy before shooting',
    copy: 'Beautiful content without positioning is still waste. We first answer who you are, who it is for, and why anyone should stop scrolling.',
  },
  {
    title: 'IN-HOUSE TEAM',
    subtitle: 'Directing, filming, editing and operations in-house',
    copy: 'Strategy and execution stay together. The same team follows a piece from idea to publish, so the content and the account speak the same language.',
  },
  {
    title: '5 YEARS IN SINGAPORE',
    subtitle: 'Five years in the local market',
    copy: 'We understand how local audiences watch content, and how a brand earns trust and memory in Singapore.',
  },
  {
    title: '300+ BUSINESSES SERVED',
    subtitle: '300+ brands and businesses served',
    copy: 'From one-person companies to chain brands, we use the same discipline — not the same template.',
  },
  {
    title: 'ONLINE + OFFLINE',
    subtitle: 'Short video + social operations + signage',
    copy: 'A brand should not only live on a phone. Online content and offline visibility should tell the same story.',
  },
]

export const caseCategories = [
  { id: 'all', label: 'All' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'fnb', label: 'F&B' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'healthcare', label: 'Healthcare & Wellness' },
  { id: 'furniture', label: 'Furniture & Interior' },
  { id: 'manufacturing', label: 'Manufacturing & Factory' },
  { id: 'corporate', label: 'Corporate Brand' },
  { id: 'founder', label: 'Founder IP' },
] as const

export type CaseCategoryId = Exclude<(typeof caseCategories)[number]['id'], 'all'>

export type CaseStudy = {
  id: string
  category: CaseCategoryId
  client: string
  industry: string
  result: string
  problem: string
  strategy: string
  shoot: string
  operations: string
  outcome: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'orchard-living',
    category: 'real-estate',
    client: 'Boutique Developer',
    industry: 'Real Estate',
    result: 'From listing photos to a content system that actually books viewings',
    problem: 'The project only posted polished stills and launch events. Leads came in, but there was no content to keep them moving. Buyers saw one image and had no next step.',
    strategy: 'Shift content from “showing the unit” to “helping buyers decide”. Position the account as a trusted neighbourhood advisor, not a hard-sell window.',
    shoot: 'Unit walkthroughs, living radius around the site, owner routines, and consultant Q&As. Less aerial flex, more answers to “why here”.',
    operations: 'TikTok / IG / Xiaohongshu scheduled along the buying path: awareness → comparison → booking. Comments and DMs aligned with the sales team.',
    outcome: 'Content became a decision aid, not a brochure. Viewing bookings could be traced back to specific posts instead of random reach.',
  },
  {
    id: 'harbour-kitchen',
    category: 'fnb',
    client: 'Multi-outlet F&B Brand',
    industry: 'F&B',
    result: 'Content that fills tables and membership, not just foodie traffic',
    problem: 'The videos looked great, but they attracted tourists, not the real customer. The outlets needed repeat visits and off-peak seats.',
    strategy: 'Turn the account from food porn into brand habit: why this place works for weekday lunch, family dinners, and coming back.',
    shoot: 'Kitchen standards, why the signature dish exists, manager picks, daypart menus, regulars’ stories. The camera serves ordering, not filters.',
    operations: 'Platform and outlet calendars matched to catchments. Live clips fed back into menu and membership conversion.',
    outcome: 'Content started serving operations: daypart traffic and membership enquiries rose, instead of empty view counts.',
  },
  {
    id: 'atelier-skin',
    category: 'beauty',
    client: 'Aesthetic Clinic Group',
    industry: 'Beauty',
    result: 'From “too risky to try” to trusted professional content',
    problem: 'Aesthetics content was either too salesy or too clinical. Clients were afraid to ask, and afraid to book.',
    strategy: 'Position as a clear-headed skin advisor: educate the decision first, then talk treatments. Founder IP builds trust; treatment content converts.',
    shoot: 'Consultation logic, before/after principles, doctor explainers, real client questions. No exaggerated glow-ups — shoot “why this is right for you”.',
    operations: 'Xiaohongshu for discovery, Instagram for trust, WeChat Channels for consistency. Sales scripts matched the content so no one said a different story.',
    outcome: 'Enquiry quality went up, junk leads went down. Content became the first professional conversation before anyone walked in.',
  },
  {
    id: 'wellspring',
    category: 'healthcare',
    client: 'Wellness Practice',
    industry: 'Healthcare & Wellness',
    result: 'Authority through clarity, not fear',
    problem: 'Health content easily slides into scare tactics or empty comfort. The brand wanted to be a long-term partner, not a one-session pitch.',
    strategy: 'Make complex things clear. Target families and corporate audiences who care about long-term management.',
    shoot: 'Principle explainers, check-up flow, daily management tips, team profiles. Clean, restrained visuals that match a medical tone.',
    operations: 'Monthly themes: sleep, metabolism, recovery, family health. After publishing, data showed which questions people actually saved and asked about.',
    outcome: 'The account moved from promo page to a referable professional presence, with a clear path from content to booking.',
  },
  {
    id: 'studio-house',
    category: 'furniture',
    client: 'Furniture & Interior Brand',
    industry: 'Furniture & Interior',
    result: 'Spaces that are understood, not just browsed',
    problem: 'Product shots were beautiful, but customers still did not know who the furniture was for, or which floor plan it fitted.',
    strategy: 'Move from SKU display to space narrative: who lives here, how it is used, why the price makes sense.',
    shoot: 'Real layouts, material close-ups, designer voiceover, install and use details. Fewer stacked studio shots, more lived-in scenes.',
    operations: 'Instagram for style, Xiaohongshu for decisions, WeChat Channels for process. Offline signage and online covers used the same visual language.',
    outcome: 'Walk-ins arrived with a clear style and budget. Conversations were far more efficient than “just looking”.',
  },
  {
    id: 'pacific-works',
    category: 'manufacturing',
    client: 'Precision Manufacturer',
    industry: 'Manufacturing & Factory',
    result: 'Factory capability translated into buyer language',
    problem: 'The plant was strong, but the content either looked like a corporate film or a spec sheet. Local and overseas buyers bounced.',
    strategy: 'Position as a verifiable manufacturing partner. Content answers lead time, QC and use cases — not sentiment.',
    shoot: 'Line checkpoints, QC in action, engineer explainers, outbound loading, customer applications. Real, stable, repeatable filming.',
    operations: 'LinkedIn / WeChat Channels / Facebook. Each post mapped to one procurement question, building a searchable content library.',
    outcome: 'Enquiries started quoting specific videos. Sales no longer had to explain from zero who the factory was.',
  },
  {
    id: 'north-group',
    category: 'corporate',
    client: 'Regional Corporate Brand',
    industry: 'Corporate Brand',
    result: 'From noticeboard to brand presence',
    problem: 'The company socials were festival graphics and press releases. Staff did not share, clients did not watch, leadership felt posting was pointless.',
    strategy: 'Split the corporate account into three layers: brand stance, proof of work, and human temperature. Each layer has a content quota.',
    shoot: 'Leadership shorts, project sites, client outcomes, working methods people can actually understand. No empty team-building clips.',
    operations: 'Monthly plans aligned to business moments. Internal alignment first, then publish, so the message stays consistent.',
    outcome: 'The account started supporting sales and hiring trust — not just proving that “we posted”.',
  },
  {
    id: 'founder-voice',
    category: 'founder',
    client: 'Founder-led Service Brand',
    industry: 'Founder IP',
    result: 'The founder on camera without the awkwardness, content that works for the business',
    problem: 'The founder knew they should appear, but every shoot felt like reading a script. The team also did not know what to film each week.',
    strategy: 'Define the IP as professional judgment plus industry observation — not influencer performance. Content serves acquisition, not persona games.',
    shoot: 'Point-of-view talks, client-question breakdowns, on-site decisions, working methods. Lower the filming load so weekly output is realistic.',
    operations: 'Topic calendar synced to business rhythm. Publishing, pinning, DMs and sales follow-up sit on one line.',
    outcome: 'Clients started recognising the founder before the meeting. By the time they enquired, they already trusted how the founder thinks.',
  },
]
