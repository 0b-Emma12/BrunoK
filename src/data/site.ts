export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Biography', href: '/home-2' },
  {
    label: 'Music',
    href: '/portfolio-6',
    children: [
      { label: 'All releases', href: '/portfolio-6' },
      { label: 'Release list', href: '/portfolio-2-2' },
      { label: 'Featured releases', href: '/portfolio-3-2' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Bookings',
    href: '/services-6',
    children: [
      { label: 'Booking enquiries', href: '/services-6' },
      { label: 'Live performances', href: '/services/item/live-performances' },
      { label: 'Events & partnerships', href: '/services/item/events-partnerships' },
    ],
  },
  { label: 'Media', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Biography', href: '/home-2' },
  { label: 'Music', href: '/portfolio-6' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Media', href: '/blog' },
  { label: 'Bookings', href: '/services-6' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and conditions', href: '/terms-and-conditions' },
]

export const socialLinks: { label: string; username: string; href: string; icon: string }[] = [
  {
    label: 'Instagram',
    username: '@bruno_kug',
    href: 'https://www.instagram.com/bruno_kug/',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    username: 'Bruno K on Facebook',
    href: 'https://www.facebook.com/Brunokug/',
    icon: 'facebook-f',
  },
  {
    label: 'TikTok',
    username: '@brunokug',
    href: 'https://www.tiktok.com/@brunokug',
    icon: 'tiktok',
  },
  {
    label: 'X',
    username: '@bruno_KUg',
    href: 'https://x.com/bruno_KUg',
    icon: 'x-twitter',
  },
]

export const homeTeam = [
  {
    name: 'Bruno K',
    role: 'Singer · Songwriter · Guitarist · Actor',
    image: '/assets/media/bruno-k/bruno-k-portrait-2.jpg',
    note: 'Bruno K in a formal artist portrait.',
  },
]

export const demoTeam: typeof homeTeam = []

export const testimonials = [
  {
    name: 'Airtel Trace Music Stars',
    role: 'Career milestone',
    logo: '/assets/media/bruno-k/airtel-trace-music-stars.jpg',
    quote:
      'Encouraged by MC Kats to enter the competition, Bruno K finished as a Ugandan national runner-up.',
  },
  {
    name: 'Junior Drama Club',
    role: 'Acting · 2023',
    image: '/assets/media/bruno-k/junior-drama-club.jpg',
    quote:
      'In 2023, Bruno K expanded his creative work with an acting appearance in the Ugandan television drama series.',
  },
  {
    name: 'TikTok Live',
    role: 'Historical livestream milestone',
    icon: 'tiktok',
    quote:
      'A reported livestream ran for 6 hours 47 minutes, with 660,000+ unique viewers, 755 individual gifters and UGX 26 million in gifts.',
  },
]

export const homeServices = [
  {
    title: 'Concerts & live performances',
    href: '/services/item/live-performances',
    text: 'Book Bruno K for live music and audience-focused performance experiences.',
  },
  {
    title: 'Corporate events',
    href: '/services/item/events-partnerships',
    text: 'Enquire about Bruno K for corporate functions and professional events.',
  },
  {
    title: 'Festivals & cultural events',
    href: '/services/item/live-performances',
    text: 'Bring Bruno K’s music to festivals, cultural programmes and showcases.',
  },
  {
    title: 'Private functions',
    href: '/services/item/events-partnerships',
    text: 'Discuss availability for private celebrations and special occasions.',
  },
  {
    title: 'International performances',
    href: '/services/item/live-performances',
    text: 'Contact management about international appearances and touring enquiries.',
  },
  {
    title: 'Brand endorsements & media',
    href: '/services/item/events-partnerships',
    text: 'Reach Source Management about endorsement, television and media opportunities.',
  },
]

export const contactDetails = {
  management: 'Source Management',
  representative: 'Roger',
  email: '',
  phone: '',
}
