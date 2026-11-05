import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/shared/Icons'

type NotFoundPageProps = {
  compact?: boolean
}

export function NotFoundPage({ compact = false }: NotFoundPageProps) {
  if (compact) {
    return (
      <section className="mil-p-120-120 empty-state">
        <div className="container mil-center">
          <h2 className="mil-mb-20">Page not found</h2>
          <p className="mil-dark-soft mil-mb-40">The page you are looking for has moved or no longer exists.</p>
          <Link to="/" className="mil-button mil-arrow-place">
            <span>Back to home</span>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mil-404-banner mil-dark-bg" data-header-dark>
      <div className="mi-invert-fix">
        <div className="mil-404-frame">
          <div className="mil-scale-frame">
            <div className="mil-404" data-text="404">
              404
            </div>
          </div>
          <div className="mil-404-text mil-up">
            <h1 className="mil-muted mil-mb-20">
              This page took a <span className="mil-thin">wrong turn.</span>
            </h1>
            <p className="mil-muted mil-mb-40">Let us get you back to Bruno K’s music and story.</p>
            <Link to="/" className="mil-button mil-arrow-place">
              <span>Back to home</span>
            </Link>
            <Link to="/portfolio-6" className="mil-link mil-muted mil-arrow-place mil-ml-30">
              <span>Explore the music</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
