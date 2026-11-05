import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Options = {
  scope: HTMLElement | null
  enabled: boolean
  routeKey: string
}

export function useRevealAnimations({ scope, enabled, routeKey }: Options) {
  useEffect(() => {
    if (!scope || !enabled) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(scope.querySelectorAll('.mil-up, .mil-scale, .mil-rotate, .mil-parallax'), {
        clearProps: 'all',
      })
      return
    }

    const context = gsap.context(() => {
      const upElements = gsap.utils.toArray<HTMLElement>('.mil-up')
      upElements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 46, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              once: true,
            },
          },
        )
      })

      const scaleElements = gsap.utils.toArray<HTMLElement>('.mil-scale')
      scaleElements.forEach((element) => {
        const start = Number(element.dataset.value1 ?? 1.4)
        const end = Number(element.dataset.value2 ?? 1)
        gsap.fromTo(
          element,
          { scale: start },
          {
            scale: end,
            ease: 'none',
            scrollTrigger: {
              trigger: element.parentElement ?? element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        )
      })

      const rotateElements = gsap.utils.toArray<HTMLElement>('.mil-rotate')
      rotateElements.forEach((element) => {
        gsap.fromTo(
          element,
          { rotate: 0 },
          {
            rotate: 80,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        )
      })

      const parallaxElements = gsap.utils.toArray<HTMLElement>('.mil-parallax')
      parallaxElements.forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: element.parentElement ?? element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        )
      })
    }, scope)

    const refresh = () => ScrollTrigger.refresh()
    const frame = window.requestAnimationFrame(refresh)
    document.fonts?.ready.then(refresh).catch(() => undefined)

    return () => {
      window.cancelAnimationFrame(frame)
      context.revert()
    }
  }, [enabled, routeKey, scope])
}
