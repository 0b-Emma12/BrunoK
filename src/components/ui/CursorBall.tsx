import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CursorBall() {
  const ballRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ball = ballRef.current
    if (!ball) return
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return

    gsap.set(ball, { xPercent: -50, yPercent: -50, opacity: 0.1 })
    const moveX = gsap.quickTo(ball, 'x', { duration: 0.45, ease: 'power3.out' })
    const moveY = gsap.quickTo(ball, 'y', { duration: 0.45, ease: 'power3.out' })

    const handleMove = (event: PointerEvent) => {
      moveX(event.clientX)
      moveY(event.clientY)
    }

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest('a, button, input, textarea, select, .mil-accordion-menu, .mil-accent-cursor')) {
        gsap.to(ball, { scale: 0, opacity: 0, duration: 0.2, overwrite: 'auto' })
        return
      }
      if (target?.closest('.mil-drag, .mil-more, .mil-choose')) {
        gsap.to(ball, { scale: 4.2, opacity: 0.95, duration: 0.25, overwrite: 'auto' })
        return
      }
      gsap.to(ball, { scale: 1, opacity: 0.1, duration: 0.2, overwrite: 'auto' })
    }

    const handleDown = () => gsap.to(ball, { scale: 0.4, duration: 0.15, overwrite: 'auto' })
    const handleUp = () => gsap.to(ball, { scale: 1, duration: 0.15, overwrite: 'auto' })

    window.addEventListener('pointermove', handleMove, { passive: true })
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mousedown', handleDown)
    document.addEventListener('mouseup', handleUp)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mousedown', handleDown)
      document.removeEventListener('mouseup', handleUp)
    }
  }, [])

  return (
    <div className="mil-ball" ref={ballRef} aria-hidden="true">
      <span className="mil-icon-1">
        <svg viewBox="0 0 128 128">
          <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2 c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2 L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9z" />
        </svg>
      </span>
      <div className="mil-more-text">More</div>
      <div className="mil-choose-text">Choose</div>
    </div>
  )
}
