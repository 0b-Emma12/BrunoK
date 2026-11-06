import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contactDetails, navItems, socialLinks } from '../../data/site'
import { Logo } from '../ui/Logo'

type MenuOverlayProps = {
  open: boolean
  onClose: () => void
}

function normalisePath(value: string) {
  if (value.length > 1 && value.endsWith('/')) return value.slice(0, -1)
  return value
}

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const { pathname } = useLocation()
  const panelRef = useRef<HTMLDivElement>(null)
  const initialExpanded = navItems.find((item) =>
    item.children?.some((child) => normalisePath(child.href) === normalisePath(pathname)),
  )?.label ?? null
  const [expanded, setExpanded] = useState<string | null>(initialExpanded)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const panel = panelRef.current
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  const isActive = (href: string) => normalisePath(pathname) === normalisePath(href)

  return (
    <div
      id="site-menu"
      className={`mil-menu-frame ${open ? 'mil-active' : ''}`}
      aria-hidden={!open}
      ref={panelRef}
      inert={!open}
    >
      <div className="mil-frame-top">
        <Logo light onClick={onClose} />
        <div className="mil-frame-center" aria-hidden="true" />
        <button
          type="button"
          className="mil-menu-btn mil-active"
          onClick={onClose}
          aria-label="Close menu"
        >
          <span />
        </button>
      </div>

      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-5">
              <nav className="mil-main-menu" aria-label="Main navigation">
                <ul>
                  {navItems.map((item) => {
                    const childActive = item.children?.some((child) => isActive(child.href))
                    const isExpanded = expanded === item.label
                    return (
                      <li
                        key={item.label}
                        className={[
                          item.children ? 'mil-has-children' : '',
                          childActive || isActive(item.href) ? 'mil-active' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <Link
                          to={item.href}
                          className={`mil-item-link ${isActive(item.href) ? 'mil-active' : ''}`}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                        {item.children ? (
                          <button
                            type="button"
                            className="arrow-dropdown"
                            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} links`}
                            aria-expanded={isExpanded}
                            onClick={() => setExpanded(isExpanded ? null : item.label)}
                          >
                            <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                          </button>
                        ) : null}
                        {item.children ? (
                          <ul className={`sub-menu ${isExpanded ? 'mil-active' : ''}`}>
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  to={child.href}
                                  className={isActive(child.href) ? 'mil-active' : ''}
                                  onClick={onClose}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
            <div className="col-xl-7">
              <div className="mil-menu-right-frame">
                <div className="mil-menu-right">
                  <div className="menu-contact-card mil-up">
                    <p className="mil-h6 mil-muted mil-mb-30">The voice. The guitar. The experience.</p>
                    <p className="mil-light-soft mil-mb-30">
                      Bookings and professional enquiries: {contactDetails.management}, represented by{' '}
                      {contactDetails.representative}.
                    </p>
                    {contactDetails.email ? (
                      <a className="menu-email" href={`mailto:${contactDetails.email}`}>
                        {contactDetails.email}
                      </a>
                    ) : (
                      <p className="mil-light-soft mil-mb-30">
                        Management email and phone to be added by Source Management.
                      </p>
                    )}
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
                            <span className="sr-only">{social.label}: {social.username}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
