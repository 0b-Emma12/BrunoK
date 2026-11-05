import { useParams } from 'react-router-dom'
import { BlogCard } from '../components/shared/BlogCard'
import { BlogSidebar } from '../components/shared/BlogSidebar'
import { InnerBanner } from '../components/shared/InnerBanner'
import { blogCategories, getPostsByCategory } from '../data/posts'

export function CategoryPage() {
  const { slug = '' } = useParams()
  const category = blogCategories.find((item) => item.slug === slug)
  const categoryPosts = getPostsByCategory(slug)
  const label = category?.label ?? slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <div className="category-page">
      <InnerBanner
        title={label}
        eyebrow="Media"
        crumbs={[{ label: 'Media', href: '/blog' }, { label }]}
      >
        <p className="mil-dark-soft mil-up blog-banner-intro">
          {categoryPosts.length
            ? `${categoryPosts.length} ${categoryPosts.length === 1 ? 'media item' : 'media items'} filed under ${label}.`
            : `No media items are listed under ${label} yet.`}
        </p>
      </InnerBanner>

      <section className="mil-p-90-120">
        <div className="container">
          <div className="row blog-layout">
            <div className="col-lg-8">
              {categoryPosts.length ? (
                <div className="row">
                  {categoryPosts.map((post) => (
                    <div className="col-md-6" key={post.slug}>
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state mil-up">
                  <h3 className="mil-mb-20">Nothing here yet.</h3>
                  <p className="mil-dark-soft">Browse the media library while management adds verified links.</p>
                </div>
              )}
            </div>
            <div className="col-lg-4">
              <BlogSidebar activeCategory={slug} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
