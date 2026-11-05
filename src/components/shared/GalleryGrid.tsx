import type { GalleryImage } from '../../data/gallery'

type GalleryGridProps = {
  images: GalleryImage[]
  onSelect: (image: GalleryImage) => void
  preview?: boolean
}

export function GalleryGrid({ images, onSelect, preview = false }: GalleryGridProps) {
  return (
    <div className={`gallery-grid${preview ? ' gallery-grid-preview' : ''}`}>
      {images.map((image) => (
        <button
          type="button"
          className="gallery-item"
          key={image.id}
          onClick={() => onSelect(image)}
          aria-label={`View image: ${image.caption}`}
        >
          <span className="gallery-image-frame">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </span>
          <span className="gallery-item-caption">
            <span>{image.caption}</span>
            <span className="gallery-item-category">{image.category}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
