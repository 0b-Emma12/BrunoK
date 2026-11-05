export type GalleryImage = {
  id: string
  src: string
  alt: string
  caption: string
  category: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'outdoor-portrait',
    src: '/assets/media/bruno-k/bruno-k-performance-1.jpg',
    alt: 'Bruno K in a relaxed outdoor portrait',
    caption: 'An outdoor portrait of Bruno K.',
    category: 'Portraits',
  },
  {
    id: 'live-moment',
    src: '/assets/media/bruno-k/bruno-k-home-banner.png',
    alt: 'Bruno K performing on stage',
    caption: 'An on-stage moment.',
    category: 'Live performances',
  },
  {
    id: 'casual-portrait',
    src: '/assets/media/bruno-k/bruno-k-performance-2.jpg',
    alt: 'Bruno K in a patterned shirt',
    caption: 'A relaxed portrait.',
    category: 'Portraits',
  },
  {
    id: 'yellow-portrait',
    src: '/assets/media/bruno-k/bruno-k-portrait-1.jpg',
    alt: 'Bruno K seated in a yellow shirt',
    caption: 'A seated portrait of Bruno K.',
    category: 'Portraits',
  },
  {
    id: 'formal-portrait',
    src: '/assets/media/bruno-k/bruno-k-portrait-2.jpg',
    alt: 'Bruno K in a formal black outfit and sunglasses',
    caption: 'A formal artist portrait.',
    category: 'Portraits',
  },
]
