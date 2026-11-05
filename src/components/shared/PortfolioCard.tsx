import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { ArrowIcon } from './Icons'

type PortfolioCardProps = {
  project: Project
  vertical?: boolean
  horizontal?: boolean
  offset?: boolean
  className?: string
  cta?: string
}

export function PortfolioCard({
  project,
  vertical = false,
  horizontal = false,
  offset = false,
  className = '',
  cta = 'View project',
}: PortfolioCardProps) {
  return (
    <Link
      to={`/portfolio/item/${project.slug}`}
      className={[
        'mil-portfolio-item',
        'mil-up',
        horizontal ? 'mil-portfolio-wide' : '',
        offset ? 'mil-offset' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={`${project.title} — ${cta}`}
    >
      <div className={`mil-cover-frame ${vertical ? 'mil-vert' : 'mil-hori'}`}>
        <div className="mil-cover">
          <img
            src={project.cover}
            alt={`Placeholder artwork — replace with approved Bruno K artwork for ${project.title}`}
            loading="lazy"
          />
        </div>
      </div>
      <div className="mil-descr">
        <div className="mil-descr-text">
          <div className="mil-label mil-upper mil-dark-soft mil-mb-10">{project.category}</div>
          <h4>{project.title}</h4>
          <div className="music-card-credit">
            {project.client !== 'Not applicable' ? `${project.author} · ${project.client}` : project.author}
            {project.releaseYear ? ` · ${project.releaseYear}` : ''}
          </div>
        </div>
        <span className="mil-link mil-dark mil-arrow-place">
          <span>{cta}</span>
          <ArrowIcon />
        </span>
      </div>
    </Link>
  )
}
