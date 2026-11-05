import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type PreloaderProps = {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const completedRef = useRef(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    document.documentElement.classList.add('mil-loading')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      root.classList.add('mil-hidden')
      document.documentElement.classList.remove('mil-loading')
      completedRef.current = true
      onComplete()
      return
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        root.classList.add('mil-hidden')
        document.documentElement.classList.remove('mil-loading')
        if (!completedRef.current) {
          completedRef.current = true
          onComplete()
        }
      },
    })

    timeline.to('.mil-preloader-animation', { opacity: 1, duration: 0.2 })
    timeline.fromTo(
      '.mil-animation-1 .mil-h3',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.25, duration: 0.55, ease: 'power2.out' },
    )
    timeline.to('.mil-animation-1 .mil-h3', { opacity: 0, y: -30, stagger: 0.08, duration: 0.4 }, '+=0.35')
    timeline.fromTo('.mil-reveal-box', { opacity: 0 }, { opacity: 1, x: -30, duration: 0.1 })
    timeline.to('.mil-reveal-box', { width: '100%', x: 0, duration: 0.45, ease: 'power2.inOut' }, '+=0.1')
    timeline.to('.mil-reveal-box', { right: 0, duration: 0.01 })
    timeline.to('.mil-reveal-box', { width: '0%', duration: 0.3, ease: 'power2.inOut' })
    timeline.fromTo('.mil-animation-2 .mil-h3', { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.4')
    timeline.to('.mil-animation-2 .mil-h3', { opacity: 0, y: -30, duration: 0.5 }, '+=0.45')
    timeline.to('.mil-preloader', { opacity: 0, duration: 0.7, ease: 'sine.in' }, '+=0.15')

    return () => {
      timeline.kill()
      document.documentElement.classList.remove('mil-loading')
    }
  }, [onComplete])

  return (
    <div className="mil-preloader" ref={rootRef} aria-hidden="true">
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1">
          <p className="mil-h3 mil-muted mil-thin">Ugandan Soul</p>
          <p className="mil-h3 mil-muted">African Rhythm</p>
          <p className="mil-h3 mil-muted mil-thin">Global Sound</p>
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <p className="mil-reveal-box" />
            <p className="mil-h3 mil-muted mil-thin">Bruno K</p>
          </div>
        </div>
      </div>
    </div>
  )
}
