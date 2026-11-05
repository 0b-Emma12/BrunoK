import { Link } from 'react-router-dom'
import { contactDetails, footerLinks, socialLinks } from '../../data/site'
import { NewsletterForm } from './NewsletterForm'

const primaryLinks = footerLinks.slice(0, 5)
const secondaryLinks = footerLinks.slice(5)
const copyrightYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mil-dark-bg site-footer" data-header-dark>
      <div className="mi-invert-fix">
        <div className="container footer-container">
          <div className="row footer-top">
            <div className="col-lg-5 col-md-12">
              <div className="mil-text mil-up footer-newsletter-copy">
                <p>Join Team Bruno K for music, performance and release updates.</p>
              </div>
              <div className="footer-newsletter">
                <NewsletterForm />
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="mil-footer-menu">
                <ul className="mil-footer-menu-list">
                  {primaryLinks.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>
                        <span className="mil-up">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <ul className="mil-menu-list mil-up footer-secondary-links">
                {secondaryLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link to={link.href} className="mil-light-soft">
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="row footer-bottom">
            <div className="col-lg-4">
              <ul className="mil-social-icons footer-social-links mil-up">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label}: ${social.username}`}
                      title={`${social.label}: ${social.username}`}
                    >
                      <i className={`fa-brands fa-${social.icon}`} aria-hidden="true" />
                      <span>{social.username}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="footer-copy mil-light-soft">
                © {copyrightYear} Bruno K. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h6>Artist management</h6>
              <p className="mil-light-soft">
                {contactDetails.management}
                <br />
                Representative: {contactDetails.representative}
                <br />
                {contactDetails.email ? (
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                ) : (
                  'Contact details to be added by management.'
                )}
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h6>Artist identity</h6>
              <p className="mil-light-soft">
                Ugandan Soul. African Rhythm. Global Sound.
                <br />
                The Voice. The Guitar. The Experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
