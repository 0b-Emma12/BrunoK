import { Link } from 'react-router-dom'
import { BlogCard } from '../components/shared/BlogCard'
import { BlogSidebar } from '../components/shared/BlogSidebar'
import { ArrowIcon } from '../components/shared/Icons'
import { InnerBanner } from '../components/shared/InnerBanner'
import { posts } from '../data/posts'

export function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <div className="blog-page">
      <InnerBanner
        title="Watch. Listen. Experience."
        eyebrow="Bruno K media"
        crumbs={[{ label: 'Media' }]}
      >
        <p className="mil-dark-soft mil-up blog-banner-intro">
          Explore acoustic performances, interviews and selected digital content as management
          supplies verified media links. Official music videos are part of the music catalogue.
        </p>
        <Link to="/portfolio-6" className="mil-link mil-dark mil-arrow-place mil-up">
          <span>Watch official music videos</span>
          <ArrowIcon />
        </Link>
      </InnerBanner>

      <section className="mil-p-90-60 blog-featured-section">
        <div className="container">
          <Link to={featured.path} className="featured-post mil-up">
            <div className="featured-post-image">
              <img
                src={featured.image}
                alt={`Placeholder image — replace with approved Bruno K media artwork for ${featured.title}`}
              />
            </div>
            <div className="featured-post-copy">
              <div className="mil-labels mil-mb-20">
                <span className="mil-label mil-upper">{featured.category}</span>
                <span className="mil-label mil-upper mil-dark-soft">{featured.date}</span>
              </div>
              <h2 className="mil-mb-30">{featured.title}</h2>
              <p className="mil-dark-soft mil-mb-40">{featured.excerpt}</p>
              <span className="mil-link mil-dark mil-arrow-place">
                <span>Open featured media</span>
                <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="mil-pb-120">
        <div className="container">
          <div className="row blog-layout">
            <div className="col-lg-8">
              <div className="blog-list-heading mil-up">
                <h4>Media library</h4>
                <span className="mil-dark-soft">{String(posts.length).padStart(2, '0')} media slots</span>
              </div>
              <div className="row">
                {rest.map((post) => (
                  <div className="col-md-6" key={post.slug}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
              <nav className="mil-pagination mil-up" aria-label="Media list pagination">
                <span className="mil-active">1</span>
                <span>of</span>
                <span>1</span>
              </nav>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
