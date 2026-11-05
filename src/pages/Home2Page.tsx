import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assets'
import { BlogCard } from '../components/shared/BlogCard'
import { ArrowIcon } from '../components/shared/Icons'
import { TeamCard } from '../components/shared/TeamCard'
import { posts } from '../data/posts'
import { homeTeam, socialLinks, testimonials } from '../data/site'

export function Home2Page() {
  return (
    <div className="home-personal">
      <section className="mil-banner-personal mil-dark-bg" data-header-dark>
        <div className="mi-invert-fix">
          <div className="container mil-banner-content">
            <div className="mil-personal-text">
              <div className="mil-suptitle mil-up">The artist</div>
              <h1 className="el-title mil-muted mil-up">
                Bruno <span className="mil-thin">Kiggundu.</span>
              </h1>
              <p className="mil-muted personal-intro mil-up">
                Ugandan singer, songwriter, guitarist and actor. Ugandan Soul. African Rhythm. Global Sound.
              </p>
            </div>
            <div className="mil-banner-panel mil-up">
              <h5 className="mil-mb-0">The voice. The guitar. The experience.</h5>
              <div className="mil-right">
                <span className="mil-social-frame">Artist management: Source Management · Roger</span>
                <Link to="/services-6" className="mil-button mil-arrow-place">
                  <span>Booking enquiries</span>
                </Link>
              </div>
            </div>
            <div className="mil-portrait-frame personal-portrait" aria-hidden="true">
              <div className="mil-nimbus" />
              <img src={assetUrl('/assets/media/bruno-k/bruno-k-portrait-1.jpg')} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Background &amp; education</div>
              <h2 className="mil-up mil-mb-40">
                A Ugandan story, <span className="mil-thin">told through music.</span>
              </h2>
              <p className="mil-up mil-mb-30">
                Bruno Kiggundu was born in Namulonge, Wakiso District, Uganda, on 21 July 1992. He
                attended Kitante Primary School, Kazinga Parents School, Seroma Christian High School
                and St. Joseph’s Senior Secondary School, Naggalama, before studying Journalism and
                Mass Communication at Ndejje University.
              </p>
              <p className="mil-up mil-dark-soft mil-mb-40">
                At university, performances with Pearl Music helped shape his musical path. Encouraged
                by television presenter MC Kats, he entered Airtel Trace Music Stars and finished as a
                Ugandan national runner-up.
              </p>
              <p className="mil-up mil-dark-soft mil-mb-40">
                Known for expressive vocals, guitar playing and personal storytelling, Bruno K blends
                Afrobeat, R&amp;B and soul with an acoustic sound. His songs explore love, heartbreak
                and personal experience.
              </p>
              <Link to="/portfolio-6" className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Explore the discography</span>
                <ArrowIcon />
              </Link>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="mil-image-frame mil-square mil-up">
                <img
                  src={assetUrl('/assets/media/bruno-k/bruno-k-performance-2.jpg')}
                  alt="Bruno K in a colorful close-up portrait"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="mil-center mil-mb-60">
            <div className="mil-suptitle mil-suptitle-dark mil-up">The artist</div>
            <h2 className="mil-up">
              Music, acting <span className="mil-thin">and connection.</span>
            </h2>
          </div>
          <div className="row">
            {homeTeam.map((member, index) => (
              <div className="col-md-6 col-lg-3" key={member.name}>
                <TeamCard member={member} offset={index % 2 === 1} />
              </div>
            ))}
          </div>
          <div className="row mil-mt-90">
            <div className="col-lg-6">
              <h3 className="mil-up">From breakthrough single to screen</h3>
              <p className="mil-up mil-dark-soft">
                His releases include <em>Where You Been At</em>, <em>One for the Road</em>, <em>Faridah</em>,
                <em> Omuwala</em> and <em>Leero Mbaga</em>, alongside collaborations and acoustic and
                gospel projects. In 2025, he was featured on <em>Sherry</em> by Buka Chimey. In 2023,
                he appeared in the Ugandan television drama <em>Junior Drama Club</em>.
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-up">A voice beyond the stage</h3>
              <p className="mil-up mil-dark-soft">
                His public advocacy includes men’s mental health, emotional wellness, youth
                empowerment and support for people affected by domestic abuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-dark-bg" data-header-dark>
        <div className="mi-invert-fix">
          <div className="container mil-p-90-90 social-connect-section">
            <div className="mil-center mil-mb-40">
              <div className="mil-suptitle mil-up">Team Bruno K</div>
              <h2 className="mil-muted mil-up">Follow Bruno K.</h2>
              <p className="mil-light-soft mil-up">
                Experience the music. Be part of Team Bruno K.
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
        </div>
      </section>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Documented career highlights</div>
              <h2 className="mil-up">
                The journey <span className="mil-thin">so far.</span>
              </h2>
            </div>
            <div className="col-lg-4">
              <p className="mil-dark-soft mil-up">
                Historical achievement figures are identified as reported milestones, not live statistics.
              </p>
            </div>
          </div>
          <div className="row">
            {testimonials.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.name}>
                <article className="value-card mil-up">
                  <h5 className="mil-mb-20">{item.name}</h5>
                  <p className="mil-dark-soft">{item.quote}</p>
                  <p className="mil-dark-soft">{item.role}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mil-p-0-120">
        <div className="container">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8">
              <div className="mil-suptitle mil-suptitle-dark mil-up">Blog posts</div>
              <h2 className="mil-up">
                Moments from <span className="mil-thin">the journey.</span>
              </h2>
            </div>
            <div className="col-lg-4 mil-right">
              <Link to="/blog" className="mil-link mil-dark mil-arrow-place mil-up">
                <span>View media</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="row">
            {posts.slice(0, 3).map((post) => (
              <div className="col-md-6 col-lg-4" key={post.slug}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mil-dark-bg" data-header-dark>
        <div className="mi-invert-fix">
          <div className="container mil-p-120-90 team-cta">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="mil-muted mil-up">
                  Bring the Bruno K experience <span className="mil-thin">to your event.</span>
                </h2>
              </div>
              <div className="col-lg-4 mil-right">
                <Link to="/services-6" className="mil-button mil-arrow-place mil-up">
                  <span>Booking enquiries</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
