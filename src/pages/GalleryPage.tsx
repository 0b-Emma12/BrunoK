import { useEffect, useMemo, useState } from 'react'
import { InnerBanner } from '../components/shared/InnerBanner'
import { GalleryGrid } from '../components/shared/GalleryGrid'
import { galleryImages, type GalleryImage } from '../data/gallery'

export function GalleryPage() {
  const [category, setCategory] = useState('All')
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null)
  const categories = useMemo(
    () => ['All', ...new Set(galleryImages.map((image) => image.category))],
    [],
  )
  const visibleImages = useMemo(
    () => category === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === category),
    [category],
  )
  const activeIndex = activeImage
    ? visibleImages.findIndex((image) => image.id === activeImage.id)
    : -1

  useEffect(() => {
    if (!activeImage) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null)
      } else if (event.key === 'ArrowRight' && activeIndex >= 0) {
        setActiveImage(visibleImages[(activeIndex + 1) % visibleImages.length])
      } else if (event.key === 'ArrowLeft' && activeIndex >= 0) {
        setActiveImage(visibleImages[(activeIndex - 1 + visibleImages.length) % visibleImages.length])
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [activeImage, activeIndex, visibleImages])

  const showImage = (direction: -1 | 1) => {
    if (activeIndex < 0 || !visibleImages.length) return
    const nextIndex = (activeIndex + direction + visibleImages.length) % visibleImages.length
    setActiveImage(visibleImages[nextIndex])
  }

  return (
    <div className="gallery-page">
      <InnerBanner
        title="Gallery"
        eyebrow="Selected moments"
        crumbs={[{ label: 'Gallery' }]}
        className="gallery-banner"
      >
        <p className="mil-dark-soft gallery-intro">
          A closer look at Bruno K through selected portraits and moments from his creative journey.
        </p>
      </InnerBanner>

      <section className="mil-p-120-90 gallery-content">
        <div className="container">
          <div className="gallery-toolbar">
            <p className="mil-dark-soft">{visibleImages.length} selected images</p>
            <div className="gallery-filters" aria-label="Filter gallery by category">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={category === item ? 'active' : ''}
                  aria-pressed={category === item}
                  onClick={() => {
                    setCategory(item)
                    setActiveImage(null)
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <GalleryGrid images={visibleImages} onSelect={setActiveImage} />
        </div>
      </section>

      {activeImage && activeIndex >= 0 ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image viewer"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="gallery-lightbox-backdrop"
            onClick={() => setActiveImage(null)}
            aria-label="Close image viewer"
          />
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={() => showImage(-1)}
            aria-label="Previous image"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>
          <figure className="gallery-lightbox-content">
            <img src={activeImage.src} alt={activeImage.alt} />
            <figcaption>{activeImage.caption}</figcaption>
          </figure>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={() => showImage(1)}
            aria-label="Next image"
          >
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  )
}
