export type LegalPage = {
  slug: string
  title: string
  intro: string
  contentHtml: string
}

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    intro:
      'Privacy information for Bruno K’s official website must be reviewed and completed by the site operator before collecting visitor data.',
    contentHtml: `
      <p><strong>Draft notice — management review required.</strong> This page is a placeholder and is not a substitute for a complete privacy policy.</p>
      <h2>Information collected</h2>
      <p>Before enabling contact forms, newsletter subscriptions, analytics or other data collection, the website operator must document what information is collected, why it is collected, how it is stored and who can access it.</p>
      <h2>Forms and subscriptions</h2>
      <p>The booking enquiry and Team Bruno K signup forms are currently previews and do not send or store submissions. They must be connected to an approved service and accompanied by appropriate privacy information before launch.</p>
      <h2>Third-party services</h2>
      <p>Any streaming embeds, social-media links, analytics, hosting or other third-party services must be listed here with their applicable privacy information before they are enabled.</p>
      <h2>Contact</h2>
      <p>Source Management should add a verified privacy contact and confirm the applicable retention and data-rights process before this policy is published.</p>
    `,
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms and Conditions',
    intro:
      'Website terms must be reviewed and completed by Bruno K’s management before this website is published.',
    contentHtml: `
      <p><strong>Draft notice — management review required.</strong> This placeholder does not establish final website, booking, merchandise or licensing terms.</p>
      <h2>Website content</h2>
      <p>Music, video, photography, artwork and other materials must only be published with the appropriate authorisation. No copyrighted recordings or third-party media should be uploaded without permission.</p>
      <h2>Bookings and enquiries</h2>
      <p>Availability, performance details, fees and event terms must be confirmed directly by Source Management. Sending an enquiry does not confirm a booking.</p>
      <h2>Merchandise and services</h2>
      <p>No store, product prices, payment service or checkout is currently configured. Add applicable sale, delivery, returns and payment terms before enabling commerce.</p>
      <h2>Approval</h2>
      <p>Management should obtain appropriate legal review and supply final terms before this draft is replaced or relied upon.</p>
    `,
  },
]

export function getLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug)
}
