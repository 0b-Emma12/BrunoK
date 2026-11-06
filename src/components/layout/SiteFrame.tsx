import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { useRevealAnimations } from '../../hooks/useRevealAnimations'
import { getDocumentTitle, getPageLabel } from '../../data/pages'
import { CursorBall } from '../ui/CursorBall'
import { Preloader } from '../ui/Preloader'
import { Footer } from './Footer'
import { Header } from './Header'
import { MenuOverlay } from './MenuOverlay'
import { contactDetails } from '../../data/site'

type SiteFrameProps = {
  children: ReactNode
}

export function SiteFrame({ children }: SiteFrameProps) {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()
  const mainRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const scrollPositionsRef = useRef(new Map<string, number>())
  const animationFrameRef = useRef<number | null>(null)
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPath, setMenuPath] = useState(pathname)
  const [headerDark, setHeaderDark] = useState(false)

  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setMenuOpen(false)
  }

  const handlePreloaderComplete = useCallback(() => setReady(true), [])
  const pageLabel = getPageLabel(pathname)
  const whatsappHref = contactDetails.phone
    ? `https://wa.me/${contactDetails.phone.replace(/\D/g, '')}`
    : ''

  useRevealAnimations({ scopeRef: mainRef, enabled: ready, routeKey: pathname })

  useEffect(() => {
    document.title = getDocumentTitle(pathname)
  }, [pathname])

  useEffect(() => {
    if (!ready) return
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.replace('#', ''))
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      if (navigationType === 'POP') {
        const savedPosition = scrollPositionsRef.current.get(key) ?? 0
        window.scrollTo({ top: savedPosition, left: 0, behavior: 'instant' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash, key, navigationType, pathname, ready])

  useEffect(() => {
    const savePosition = () => {
      scrollPositionsRef.current.set(key, window.scrollY)
    }

    window.addEventListener('scroll', savePosition, { passive: true })
    window.addEventListener('pagehide', savePosition)
    return () => {
      savePosition()
      window.removeEventListener('scroll', savePosition)
      window.removeEventListener('pagehide', savePosition)
    }
  }, [key])

  useEffect(() => {
    if (!ready) return

    const update = () => {
      const progress = progressRef.current
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
        progress.style.height = `${value * 100}%`
      }

      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-header-dark]'))
      const isDark = sections.some((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top < 80 && rect.bottom > 20
      })
      setHeaderDark(isDark)
    }

    const requestUpdate = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
      animationFrameRef.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    const timer = window.setTimeout(requestUpdate, 250)

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
      window.clearTimeout(timer)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [pathname, ready])

  return (
    <div className="mil-wrapper" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CursorBall />
      {!ready ? <Preloader onComplete={handlePreloaderComplete} /> : null}

      <div className="mil-progress-track" aria-hidden="true">
        <div className="mil-progress" ref={progressRef} />
      </div>

      <div className="mil-curtain" aria-hidden="true" />

      <Header
        dark={headerDark}
        menuOpen={menuOpen}
        pageLabel={pageLabel}
        onToggleMenu={() => setMenuOpen((current) => !current)}
      />
      <MenuOverlay key={pathname} open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="mil-content">
        <main id="main-content" ref={mainRef}>
          <div className="route-stage" key={pathname}>
            {children}
          </div>
        </main>
        <Footer />
      </div>

      {whatsappHref ? (
        <a
          className="whatsapp-button"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Bruno K management on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  )
}
