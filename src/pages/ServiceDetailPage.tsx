import { Link, useParams } from 'react-router-dom'
import { assetUrl } from '../utils/assets'
import { Accordion } from '../components/shared/Accordion'
import { ArrowIcon, CheckIcon } from '../components/shared/Icons'
import { InnerBanner } from '../components/shared/InnerBanner'
import { getService, services } from '../data/services'
import { NotFoundPage } from './NotFoundPage'

export function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const service = getService(slug)

  if (!service) return <NotFoundPage compact />

  const index = services.findIndex((item) => item.slug === service.slug)
  const previous = services[(index - 1 + services.length) % services.length]
  const next = services[(index + 1) % services.length]

  return (
    <div className="service-detail">
      <InnerBanner
        title={service.heroTitle}
        eyebrow={service.tagline}
        crumbs={[{ label: 'Bookings', href: '/services-6' }, { label: service.title }]}
        dark
      >
        <div className="row service-hero-row">
          <div className="col-lg-8">
            <p className="mil-muted mil-up">{service.intro}</p>
          </div>
        </div>
      </InnerBanner>

      <section className="mil-p-120-60 service-overview">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="mil-image-frame mil-square mil-up">
                <img
                  src={assetUrl('/assets/media/bruno-k/bruno-k-performance-1.jpg')}
                  alt="Bruno K in an outdoor artist photograph"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Booking information</div>
              <h2 className="mil-up mil-mb-40">
                Make it a Bruno K <span className="mil-thin">experience.</span>
              </h2>
              <p className="mil-up mil-mb-30">{service.intro}</p>
              <p className="mil-up mil-dark-soft mil-mb-40">
                Include your organisation, event type, date, venue, expected audience and any relevant
                production details. Source Management will confirm availability and next steps.
              </p>
              <Link to="/contact" className="mil-button mil-arrow-place mil-up">
                Contact management
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-soft-bg service-accordion-section">
        <div className="container mil-p-120-90">
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Booking options</div>
              <h2 className="mil-up mil-mb-30">
                What to <span className="mil-thin">discuss.</span>
              </h2>
              <p className="mil-up mil-dark-soft">
                Event format, availability and arrangements vary by enquiry and are confirmed by management.
              </p>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <Accordion items={service.accordion} />
            </div>
          </div>
        </div>
      </section>

      <section className="mil-dark-bg service-pricing" data-header-dark>
        <div className="mi-invert-fix">
          <div className="container mil-p-120-90">
            <div className="row align-items-end mil-mb-60">
              <div className="col-lg-8">
                <div className="mil-suptitle mil-up">Enquiries</div>
                <h2 className="mil-muted mil-up">
                  {service.pricingTitle.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="mil-thin">{service.pricingTitle.split(' ').slice(-2).join(' ')}</span>
                </h2>
              </div>
              <div className="col-lg-4">
                <p className="mil-muted mil-up">{service.pricingIntro}</p>
              </div>
            </div>
            <div className="pricing-grid">
              {service.prices.map((price) => (
                <div className="price-card mil-up" key={`${price.price}-${price.title}`}>
                  {price.eyebrow ? <div className="price-eyebrow">{price.eyebrow}</div> : null}
                  <div className="price-value">{price.price}</div>
                  <h5 className="mil-muted mil-mb-30">{price.title}</h5>
                  <ul className="price-features">
                    {price.features.map((feature) => (
                      <li key={feature}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mil-link mil-muted mil-arrow-place price-cta">
                    <span>{service.pricingCta}</span>
                    <ArrowIcon />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mil-p-90-90">
        <div className="container">
          <div className="works-nav">
            <Link to={`/services/item/${previous.slug}`} className="mil-link mil-dark mil-arrow-place works-prev">
              <ArrowIcon />
              <span>{previous.shortTitle}</span>
            </Link>
            <Link to={`/services/item/${next.slug}`} className="mil-link mil-dark mil-arrow-place">
              <span>{next.shortTitle}</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
