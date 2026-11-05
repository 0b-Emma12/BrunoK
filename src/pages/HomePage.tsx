import { Link, useNavigate } from 'react-router-dom'
import { assetUrl } from '../utils/assets'
import { BlogCard } from '../components/shared/BlogCard'
import { GalleryGrid } from '../components/shared/GalleryGrid'
import { ArrowIcon, CheckIcon } from '../components/shared/Icons'
import { PortfolioCard } from '../components/shared/PortfolioCard'
import { TestimonialsSlider } from '../components/shared/TestimonialsSlider'
import { posts } from '../data/posts'
import { projects } from '../data/projects'
import { galleryImages } from '../data/gallery'
import { homeServices, socialLinks } from '../data/site'

const stats = [
  { value: '2015', label: 'Breakthrough release: Where You Been At' },
  { value: 'Runner-up', label: 'Airtel Trace Music Stars · Uganda' },
  { value: '2023', label: 'Acting appearance · Junior Drama Club' },
  { value: '6h 47m', label: 'Reported TikTok Live duration' },
  { value: '660,000+', label: 'Reported unique viewers' },
  { value: '755', label: 'Individual fan gifters' },
  { value: 'UGX 26M', label: 'Reported livestream gifts' },
]

const capabilities = [
  'Afro-pop, R&B and acoustic soul',
  'Singer, songwriter and guitarist',
  'Gospel and inspirational music',
  'Screen acting and digital entertainment',
]

export function HomePage() {
  const featuredPosts = posts.slice(0, 3)
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <section
        className="mil-banner mil-dark-bg home-hero"
        data-header-dark
        style={{ backgroundImage: `url(${assetUrl('/assets/media/bruno-k/bruno-k-home-banner.png')})` }}
      >
        <div className="mi-invert-fix">
          <div className="mil-animation-frame" aria-hidden="true">
            <div
              className="mil-animation mil-position-1 mil-scale hero-orb"
              data-value-1="1.2"
              data-value-2=".6"
            />
            <div
              className="mil-animation mil-position-2 mil-scale hero-orb"
              data-value-1="1.1"
              data-value-2=".8"
            />
            <div className="mil-animation mil-position-3 mil-scale hero-orb hero-orb-small" />
          </div>
          <div className="mil-gradient" aria-hidden="true" />
          <div className="container">
            <div className="mil-banner-content mil-up">
              <div className="home-hero-eyebrow">The voice. The guitar. The experience.</div>
              <h1 className="el-title mil-muted mil-mb-40">
                BRUNO K{' '}
                <span className="mil-thin">
                  Ugandan Soul.
                </span>
                {' '}
                African Rhythm. Global Sound.
              </h1>
              <div className="row">
                <div className="col-lg-6">
                  <p className="mil-muted mil-mb-40 home-hero-copy">
                    Discover the music and creative journey of Bruno Kiggundu — Ugandan singer,
                    songwriter, guitarist and actor.
                  </p>
                </div>
              </div>
              <div className="home-hero-actions">
                <Link to="/portfolio-6" className="mil-button mil-arrow-place">
                  Explore the music
                </Link>
                <Link to="/portfolio-6" className="mil-link mil-muted mil-arrow-place">
                  <span>Watch videos</span>
                  <ArrowIcon />
                </Link>
                <Link to="/services-6" className="mil-link mil-muted mil-arrow-place">
                  <span>Book Bruno K</span>
                  <ArrowIcon />
                </Link>
              </div>
              <div className="home-socials mil-up">
                <p className="mil-light-soft">Follow Bruno K. Experience the music. Be part of Team Bruno K.</p>
                <ul className="mil-social-icons">
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
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mil-circle-text" aria-hidden="true">
                <svg viewBox="0 0 300 300" className="mil-ct-svg">
                  <defs>
                    <path id="homeCircle" d="M150,150 m-110,0 a110,110 0 1,1 220,0 a110,110 0 1,1 -220,0" />
                  </defs>
                  <text>
                    <textPath href="#homeCircle">Music · Guitar · Performance · Bruno K · </textPath>
                  </text>
                </svg>
                <a href="#about" className="mil-button mil-icon-button-sm mil-accent-cursor" aria-label="Scroll to about section">
                  <i className="fa-solid fa-arrow-down" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mil-p-120-90 home-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Artist profile</div>
              <h2 className="mil-up mil-mb-40">
                Meet <span className="mil-thin">Bruno K</span>
              </h2>
              <p className="mil-up mil-mb-30">
                Born in Namulonge, Wakiso District, Bruno Kiggundu studied Journalism and Mass
                Communication at Ndejje University. A Ugandan singer, songwriter, guitarist and
                actor, he blends Afro-pop, R&amp;B, acoustic soul and gospel in music shaped by
                personal experience.
              </p>
              <p className="mil-up mil-dark-soft mil-mb-40">
                Discovered while performing at university, Bruno K finished as runner-up in Airtel
                Trace Music Stars before his 2015 breakthrough single, <em>Where You Been At</em>.
                His creative journey now spans music, acting and an engaged digital audience.
              </p>
              <ul className="capability-list mil-up">
                {capabilities.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/home-2" className="mil-button mil-arrow-place mil-up">
                Full biography &amp; milestones
              </Link>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="about-visual mil-up">
                <div className="mil-image-frame mil-vertical">
                  <img
                    src={assetUrl('/assets/media/bruno-k/bruno-k-portrait-2.jpg')}
                    alt="Bruno K in a formal artist portrait"
                    loading="lazy"
                  />
                </div>
                <div className="about-stat-card">
                  <span className="about-stat-value">2015</span>
                  <span className="about-stat-label">Where You Been At marked a breakthrough</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-heading mil-up">
            <div className="mil-suptitle mil-suptitle-dark">Career highlights</div>
            <h2>Milestones &amp; achievements</h2>
          </div>
          <div className="stats-row">
            {stats.map((stat) => (
              <div className="stat-item mil-up" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="mil-dark-soft mil-up">
            TikTok Live figures are reported historical achievements, not current audience statistics.
          </p>
        </div>
      </section>

      <section className="mil-p-120-90 home-gallery-preview">
        <div className="container">
          <div className="gallery-preview-heading">
            <div>
              <div className="mil-suptitle mil-suptitle-dark mil-up">Selected moments</div>
              <h2 className="mil-up">A glimpse into <span className="mil-thin">my work.</span></h2>
            </div>
            <p className="mil-dark-soft mil-up">
              Selected portraits offer a glimpse into Bruno K’s artist identity and creative journey.
            </p>
          </div>
          <GalleryGrid
            images={galleryImages.slice(0, 4)}
            onSelect={() => navigate('/gallery')}
            preview
          />
          <Link to="/gallery" className="mil-link mil-dark mil-arrow-place gallery-preview-link">
            <span>View all gallery</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="mil-dark-bg home-services" data-header-dark>
        <div className="mi-invert-fix">
          <div className="container mil-p-120-0">
            <div className="row align-items-end mil-mb-60">
              <div className="col-lg-8">
                <div className="mil-suptitle mil-up">Bookings</div>
                <h2 className="mil-muted mil-up">
                  Bring Bruno K <span className="mil-thin">to your stage.</span>
                </h2>
              </div>
              <div className="col-lg-4">
                <p className="mil-muted mil-up services-intro">
                  Enquire about concerts, corporate events, festivals, private functions, brand
                  partnerships and international performances.
                </p>
              </div>
            </div>
            <div className="services-grid">
              {homeServices.map((service, index) => (
                <Link
                  to={service.href}
                  className="mil-service-card-lg mil-other-card mil-up"
                  key={`${service.title}-${index}`}
                >
                  <div className="service-number">0{index + 1}</div>
                  <h4 className="mil-mb-20">{service.title}</h4>
                  <div className="mil-descr">
                    <p className="mil-dark-soft">{service.text}</p>
                  </div>
                  <span className="mil-link mil-dark mil-arrow-place mil-mt-30">
                    <span>Enquire</span>
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mil-center mil-pt-60">
              <Link to="/services-6" className="mil-button mil-arrow-place">
                Booking information
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-p-120-60 home-work">
        <div className="container">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Selected releases</div>
              <h2 className="mil-up">
                The sound of <span className="mil-thin">Bruno K.</span>
              </h2>
            </div>
            <div className="col-lg-4 mil-right">
              <Link to="/portfolio-6" className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Explore the discography</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="row">
            {projects.slice(0, 3).map((project, index) => (
              <div className={`col-lg-${index === 0 ? 7 : 5}`} key={project.slug}>
                <PortfolioCard project={project} vertical={index !== 0} />
              </div>
            ))}
          </div>
          <p className="mil-dark-soft mil-up">
            Release artwork and verified listening links are to be supplied by management.
          </p>
        </div>
      </section>

      <section className="mil-p-120-90 home-testimonials">
        <div className="container">
          <div className="mil-center mil-mb-60">
            <div className="mil-suptitle mil-suptitle-dark mil-up">Career highlights</div>
            <h2 className="mil-up">
              The journey <span className="mil-thin">so far.</span>
            </h2>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      <section className="mil-p-0-120 home-journal">
        <div className="container">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Blog posts</div>
              <h2 className="mil-up">
                Watch. Listen. <span className="mil-thin">Experience.</span>
              </h2>
            </div>
            <div className="col-lg-4 mil-right">
              <Link to="/portfolio-6" className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Explore music &amp; discography</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="row">
            {featuredPosts.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.slug}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="container mil-p-60-120">
          <div className="mil-center mil-mb-60">
            <p className="mil-up mil-dark-soft partner-kicker">Team Bruno K</p>
            <h3 className="mil-up">You are part of the journey.</h3>
            <p className="mil-up mil-dark-soft">
              Join the fan community for music, performance and release updates. Newsletter signup
              will be enabled when management connects the service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
