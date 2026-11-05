import { Link } from 'react-router-dom'
import { blogCategories, posts } from '../../data/posts'
import { NewsletterForm } from '../layout/NewsletterForm'
import { ArrowIcon } from './Icons'

type BlogSidebarProps = {
  activeCategory?: string
}

export function BlogSidebar({ activeCategory }: BlogSidebarProps) {
  return (
    <aside className="mil-sidebar" aria-label="Media sidebar">
      <div className="sidebar-widget mil-up">
        <h5 className="sidebar-title">Categories</h5>
        <ul className="mil-category-list">
          {blogCategories.map((category) => (
            <li key={category.slug}>
              <Link
                to={`/category/${category.slug}`}
                className={activeCategory === category.slug ? 'mil-active' : ''}
              >
                <span>{category.label}</span>
                <span>{String(posts.filter((post) => post.categorySlug === category.slug).length).padStart(2, '0')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget mil-up">
        <h5 className="sidebar-title">Featured media</h5>
        <ul className="recent-posts">
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link to={post.path}>
                <img src={post.image} alt="" loading="lazy" />
                <span>
                  <span className="recent-post-date">{post.date}</span>
                  <strong>{post.title}</strong>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget sidebar-newsletter mil-up">
        <h5 className="sidebar-title">Stay in the loop</h5>
        <p className="mil-dark-soft mil-mb-30">
          Join Team Bruno K for music, performance and release updates.
        </p>
        <NewsletterForm />
      </div>

      <div className="sidebar-widget sidebar-cta mil-up">
        <h5 className="mil-mb-20">Want to book Bruno K?</h5>
        <p className="mil-dark-soft mil-mb-30">
          Share your event brief with Source Management.
        </p>
        <Link to="/contact" className="mil-link mil-dark mil-arrow-place">
          <span>Make an enquiry</span>
          <ArrowIcon />
        </Link>
      </div>
    </aside>
  )
}
