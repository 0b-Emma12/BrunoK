import { Link, useParams } from 'react-router-dom'
import { BlogCard } from '../components/shared/BlogCard'
import { ArrowIcon } from '../components/shared/Icons'
import { InnerBanner } from '../components/shared/InnerBanner'
import { getPost, posts } from '../data/posts'
import { socialLinks } from '../data/site'
import { NotFoundPage } from './NotFoundPage'

export function BlogPostPage() {
  const params = useParams()
  const slug = params.slug ?? ''
  const post =
    getPost(slug) ??
    getPost([params.year, params.month, params.day, params.slug].filter(Boolean).join('/'))

  if (!post) return <NotFoundPage compact />

  const index = posts.findIndex((item) => item.slug === post.slug)
  const previous = posts[(index - 1 + posts.length) % posts.length]
  const next = posts[(index + 1) % posts.length]
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3)

  return (
    <article className="blog-post-page">
      <InnerBanner
        title={post.title}
        eyebrow={post.category}
        crumbs={[{ label: 'Media', href: '/blog' }, { label: post.title }]}
        centered
      >
        <div className="post-banner-meta mil-up">
          <span>{post.date}</span>
          <span>By {post.author}</span>
          <span>Official media link pending</span>
        </div>
      </InnerBanner>

      <section className="mil-pt-60">
        <div className="container">
          <div className="mil-image-frame mil-fw mil-up post-hero-image">
            <img
              src={post.image}
              alt={`Placeholder image — replace with approved Bruno K media artwork for ${post.title}`}
            />
          </div>
        </div>
      </section>

      <section className="mil-p-60-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <ul className="mil-info post-info mil-up">
                <li>
                  <span className="mil-dark-soft">Media type</span>
                  <Link to={`/category/${post.categorySlug}`}>{post.category}</Link>
                </li>
                <li>
                  <span className="mil-dark-soft">Media link</span>
                  <strong>To be supplied by management</strong>
                </li>
                <li>
                  <span className="mil-dark-soft">Artist</span>
                  <strong>{post.author}</strong>
                </li>
              </ul>

              <div className="single-post-text" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

              {post.tags.length ? (
                <ul className="mil-labels post-tags mil-up">
                  {post.tags.map((tag) => (
                    <li className="mil-label" key={tag}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="post-share mil-up">
                <span className="mil-dark-soft">Share this media item</span>
                <ul className="mil-social-icons mil-dark">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} target="_blank" rel="noreferrer" aria-label={`Share on ${social.label}`}>
                        <i className={`fa-brands fa-${social.icon}`} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="works-nav post-navigation">
                <Link to={previous.path} className="mil-link mil-dark mil-arrow-place works-prev">
                  <ArrowIcon />
                  <span>{previous.title}</span>
                </Link>
                <Link to={next.path} className="mil-link mil-dark mil-arrow-place">
                  <span>{next.title}</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8">
              <div className="mil-suptitle mil-suptitle-dark mil-up">More media</div>
              <h2 className="mil-up">
                More <span className="mil-thin">Bruno K media.</span>
              </h2>
            </div>
            <div className="col-lg-4 mil-right">
              <Link to="/blog" className="mil-link mil-dark mil-arrow-place mil-up">
                <span>View media library</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="row">
            {related.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.slug}>
                <BlogCard post={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
