import { ContactForm } from '../components/shared/ContactForm'
import { InnerBanner } from '../components/shared/InnerBanner'
import { socialLinks, contactDetails } from '../data/site'
import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <div className="contact-page">
      <InnerBanner
        title="Let’s connect"
        eyebrow="Artist contact"
        crumbs={[{ label: 'Contact' }]}
        dark
      >
        <div className="row">
          <div className="col-lg-7">
            <p className="mil-muted mil-up">
              For bookings, media, brand partnerships and professional enquiries, contact Bruno K’s
              management. Verified contact details will be added by the management team.
            </p>
          </div>
        </div>
      </InnerBanner>

      <section className="mil-p-120-60 contact-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Management</div>
              <h2 className="mil-up mil-mb-40">
                Contact <span className="mil-thin">Source Management.</span>
              </h2>
              <div className="contact-detail mil-up">
                <h5 className="mil-mb-10">Artist management</h5>
                <p className="mil-dark-soft">
                  {contactDetails.management}
                  <br />
                  Representative: {contactDetails.representative}
                </p>
              </div>
              <div className="contact-detail mil-up">
                <h5 className="mil-mb-10">Bookings &amp; opportunities</h5>
                <p className="mil-dark-soft">
                  Concerts, corporate events, festivals, private functions, endorsements, international
                  performances, media and acting enquiries.
                </p>
              </div>
              <div className="contact-detail mil-up">
                <h5 className="mil-mb-10">Email &amp; telephone</h5>
                <p className="mil-dark-soft">
                  {contactDetails.email ? (
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  ) : null}
                  {contactDetails.email && contactDetails.phone ? ' · ' : null}
                  {contactDetails.phone ? <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a> : null}
                  {!contactDetails.email && !contactDetails.phone
                    ? 'To be added by Source Management before launch.'
                    : null}
                </p>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="contact-form-frame mil-up">
                <h4 className="mil-mb-30">Send a booking or media brief</h4>
                <ContactForm />
                <p className="mil-dark-soft">
                  This form is a preview and does not send enquiries yet. A verified management inbox
                  must be configured before launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container mil-p-90-90 social-connect-section">
          <div className="mil-center mil-mb-40">
            <div className="mil-suptitle mil-suptitle-dark mil-up">Team Bruno K</div>
            <h2 className="mil-up">CONNECT WITH BRUNO K</h2>
            <p className="mil-dark-soft mil-up">
              Follow Bruno K. Experience the music. Be part of Team Bruno K.
            </p>
          </div>
          <ul className="social-profile-links">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label}: ${social.username}`}
                >
                  <i className={`fa-brands fa-${social.icon}`} aria-hidden="true" />
                  <span>
                    <strong>{social.label}</strong>
                    <span>{social.username}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mil-soft-bg">
        <div className="container mil-p-90-90">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mil-up mil-mb-0">
                Planning an event? <span className="mil-thin">Start a booking enquiry.</span>
              </h3>
            </div>
            <div className="col-lg-4 mil-right">
              <Link to="/services-6" className="mil-button mil-arrow-place mil-up">
                <span>Booking information</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
