export type AccordionItem = {
  title: string
  body: string[]
}

export type PriceItem = {
  eyebrow?: string
  price: string
  title: string
  features: string[]
}

export type Service = {
  slug: string
  shortTitle: string
  title: string
  heroTitle: string
  tagline: string
  intro: string
  accordion: AccordionItem[]
  pricingTitle: string
  pricingIntro: string
  prices: PriceItem[]
  pricingCta: string
}

const enquiryCards: PriceItem[] = [
  {
    eyebrow: 'Availability',
    price: 'Enquire',
    title: 'Share your event details',
    features: ['Event type, date, location and audience size.'],
  },
  {
    eyebrow: 'Management',
    price: 'Source',
    title: 'Discuss the right format',
    features: ['Performance format and requirements confirmed by management.'],
  },
  {
    eyebrow: 'Planning',
    price: 'Details',
    title: 'Receive a tailored response',
    features: ['Fees and logistics are confirmed after a formal enquiry.'],
  },
]

export const services: Service[] = [
  {
    slug: 'live-performances',
    shortTitle: 'Concerts & live performances',
    title: 'Concerts & live performances',
    heroTitle: 'Bring the Bruno K experience to your stage',
    tagline: 'Live bookings',
    intro:
      'Enquire about Bruno K for concerts, festivals, cultural events, international performances and live showcases. Performance availability, format and fees are confirmed by Source Management.',
    accordion: [
      {
        title: 'Concerts and festivals',
        body: ['For concert, festival and cultural-event enquiries, share the proposed date, location and event details with management.'],
      },
      {
        title: 'International performances',
        body: ['International appearance and touring enquiries are welcome. Travel, production and scheduling requirements must be confirmed by management.'],
      },
      {
        title: 'Live music experience',
        body: ['Bruno K is a singer, songwriter and guitarist. Specific set formats, technical requirements and availability are to be confirmed for each booking.'],
      },
    ],
    pricingTitle: 'Plan a Bruno K performance',
    pricingIntro:
      'Share your event brief with Source Management. Pricing and availability have not been published and should be confirmed directly.',
    prices: enquiryCards,
    pricingCta: 'Submit a booking enquiry',
  },
  {
    slug: 'events-partnerships',
    shortTitle: 'Events & partnerships',
    title: 'Events & partnerships',
    heroTitle: 'Create a memorable event with Bruno K',
    tagline: 'Bookings and collaborations',
    intro:
      'Source Management welcomes enquiries for corporate events, private functions, brand endorsements, television and media appearances, and acting opportunities.',
    accordion: [
      {
        title: 'Corporate and private events',
        body: ['Include the event date, venue, audience and expected performance format so management can review the request.'],
      },
      {
        title: 'Brand endorsements',
        body: ['Share the brand, campaign scope, audience and proposed timing. Endorsements and partnerships require management approval.'],
      },
      {
        title: 'Television, media and acting',
        body: ['For media appearances and acting opportunities, provide the production or outlet, role or request, schedule and contact person.'],
      },
    ],
    pricingTitle: 'Start a professional enquiry',
    pricingIntro:
      'Details, terms and availability are arranged through Source Management. No rates or contact details have been published.',
    prices: enquiryCards,
    pricingCta: 'Contact management',
  },
]

export const serviceList = services.map((service, index) => ({
  number: String(index + 1).padStart(2, '0'),
  title: service.title,
  slug: service.slug,
  href: `/services/item/${service.slug}`,
  description: service.intro,
}))

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
