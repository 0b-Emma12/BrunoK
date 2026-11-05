import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type Crumb = {
  label: string
  href?: string
}

type InnerBannerProps = {
  title: string
  eyebrow?: string
  crumbs?: Crumb[]
  dark?: boolean
  centered?: boolean
  className?: string
  children?: ReactNode
}

export function InnerBanner({
  title,
  eyebrow,
  crumbs = [],
  dark = false,
  centered = false,
  className = '',
  children,
}: InnerBannerProps) {
  const content = (
    <div
      className={[
        'container',
        'mil-inner-banner-inner',
        centered ? 'mil-center' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mil-banner-content">
        {eyebrow ? (
          <div className={`mil-suptitle ${dark ? '' : 'mil-suptitle-dark'} mil-up`}>{eyebrow}</div>
        ) : null}
        <h1 className={`mil-thin-gen mil-up ${centered ? '' : 'mil-mb-30'}`}>{title}</h1>
        {crumbs.length ? (
          <ul className={`mil-breadcrumbs mil-up ${dark ? 'mil-light' : ''}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {crumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`}>
                {crumb.href && index < crumbs.length - 1 ? (
                  <Link to={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ul>
        ) : null}
        {children}
      </div>
    </div>
  )

  return (
    <section
      className={[
        'mil-inner-banner',
        dark ? 'mil-dark-bg' : '',
        centered ? 'mil-inner-banner-center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-header-dark={dark ? 'true' : undefined}
    >
      {dark ? <div className="mi-invert-fix">{content}</div> : content}
    </section>
  )
}
