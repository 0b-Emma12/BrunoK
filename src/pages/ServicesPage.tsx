import { Link } from 'react-router-dom'
import { InnerBanner } from '../components/shared/InnerBanner'
import { ArrowIcon, CheckIcon } from '../components/shared/Icons'
import { serviceList } from '../data/services'

export function ServicesPage() {
  return (
    <div className="services-page">
      <InnerBanner
        title="Booking Bruno K"
        eyebrow="Bookings & management"
        crumbs={[{ label: 'Bookings' }]}
        dark
      >
        <div className="row services-banner-row">
          <div className="col-lg-7">
            <p className="mil-muted mil-up">
              Bruno K is available for concert and festival bookings, corporate and private events,
              international performances, endorsements, media appearances and acting opportunities.
              Enquiries are handled by Source Management.
            </p>
          </div>
        </div>
      </InnerBanner>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="service-list">
            {serviceList.map((service) => (
              <Link to={service.href} className="service-list-item mil-up" key={service.slug}>
                <span className="service-list-number">{service.number}</span>
                <div className="service-list-copy">
                  <h2>{service.title}</h2>
                  <p className="mil-dark-soft">{service.description}</p>
                </div>
                <span className="mil-link mil-dark mil-arrow-place">
                  <span>Enquire</span>
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mil-dark-bg services-process" data-header-dark>
        <div className="mi-invert-fix">
          <div className="container mil-p-120-90">
            <div className="row">
              <div className="col-lg-5">
                <div className="mil-suptitle mil-up">Booking process</div>
                <h2 className="mil-muted mil-up mil-mb-40">
                  Bring the Bruno K <span className="mil-thin">experience to your stage.</span>
                </h2>
                <p className="mil-muted mil-up mil-mb-40">
                  Share the event brief with Source Management. Availability, performance format,
                  requirements and fees will be confirmed directly.
                </p>
                <Link to="/contact" className="mil-button mil-arrow-place mil-up">
                  <span>Submit a booking enquiry</span>
                </Link>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <ol className="process-list">
                  {[
                    ['01', 'Share the brief', 'Tell management about the event, date, location and audience.'],
                    ['02', 'Review', 'Source Management checks availability and event requirements.'],
                    ['03', 'Confirm', 'Performance format, fees and logistics are discussed directly.'],
                    ['04', 'Prepare', 'Final arrangements are confirmed with the organiser.'],
                  ].map(([number, title, text]) => (
                    <li key={number} className="mil-up">
                      <span className="process-number">{number}</span>
                      <div>
                        <h4 className="mil-muted mil-mb-10">{title}</h4>
                        <p className="mil-muted">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-7">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Booking enquiries</div>
              <h2 className="mil-up">
                One point of contact. <span className="mil-thin">Source Management.</span>
              </h2>
            </div>
            <div className="col-lg-5">
              <p className="mil-dark-soft mil-up">
                Contact details are intentionally not displayed until verified by management. Share
                your enquiry through the contact form and connect a management inbox before launch.
              </p>
            </div>
          </div>
          <div className="row">
            {[
              ['Concerts & live performances', 'Enquire about concerts, festivals and live showcases.'],
              ['Corporate & private events', 'Share the event type, schedule, location and audience.'],
              ['International appearances', 'Touring and international booking details are confirmed by management.'],
              ['Media & partnerships', 'Brand, television, media and acting enquiries are welcome.'],
            ].map(([title, text]) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <div className="value-card mil-up">
                  <span className="value-icon">
                    <CheckIcon />
                  </span>
                  <h5 className="mil-mb-20">{title}</h5>
                  <p className="mil-dark-soft">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section mil-soft-bg">
        <div className="container mil-p-60-90">
          <div className="mil-center mil-mb-60">
            <p className="mil-up mil-dark-soft partner-kicker">Artist management</p>
            <h3 className="mil-up">Source Management · Roger</h3>
            <p className="mil-up mil-dark-soft">
              Booking availability and contact details are to be confirmed by management.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
