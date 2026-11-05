import { Link } from 'react-router-dom'
import type { BlogPost } from '../../data/posts'
import { ArrowIcon } from './Icons'

type BlogCardProps = {
  post: BlogPost
  horizontal?: boolean
  className?: string
  showExcerpt?: boolean
}

export function BlogCard({
  post,
  horizontal = false,
  className = '',
  showExcerpt = true,
}: BlogCardProps) {
  return (
    <Link
      to={post.path}
      className={[
        'mil-blog-card',
        'mil-up',
        horizontal ? 'mil-blog-card-hori' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mil-cover-frame">
        <img
          src={post.image}
          alt={`Placeholder image — replace with approved Bruno K media artwork for ${post.title}`}
          loading="lazy"
        />
      </div>
      <div className="mil-post-descr">
        <div className="mil-labels mil-mb-20">
          <span className="mil-label mil-upper">{post.category}</span>
          <span className="mil-label mil-upper mil-dark-soft">{post.date}</span>
        </div>
        <h4 className="mil-mb-20">{post.title}</h4>
        {showExcerpt ? <p className="mil-dark-soft mil-mb-20">{post.excerpt}</p> : null}
        <div className="mil-post-text">
          <span className="mil-link mil-dark mil-arrow-place">
            <span>Open media item</span>
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  )
}
