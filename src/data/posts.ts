import { assetUrl } from '../utils/assets'

export type BlogPost = {
  slug: string
  path: string
  title: string
  category: string
  categorySlug: string
  date: string
  author: string
  image: string
  excerpt: string
  contentHtml: string
  tags: string[]
  commentCount?: number
}

const mediaPlaceholder = assetUrl('/assets/media/2023/11/project-2-2.jpg')

export const posts: BlogPost[] = [
  {
    slug: 'acoustic-performances',
    path: '/media/acoustic-performances',
    title: 'Acoustic performances',
    category: 'Acoustic sessions',
    categorySlug: 'acoustic-sessions',
    date: 'Media links pending',
    author: 'Bruno K',
    image: mediaPlaceholder,
    excerpt:
      'Explore Bruno K’s guitar-led performances and the Walungiwa Acoustic Sessions featuring Weasel Manizo.',
    tags: ['Acoustic', 'Walungiwa Acoustic Sessions', 'Weasel Manizo'],
    contentHtml: `
      <h2>The acoustic side of Bruno K</h2>
      <p>Bruno K's artist profile lists <em>Walungiwa Acoustic Sessions</em> featuring Weasel Manizo. Approved performance footage and listening links are to be supplied by management.</p>
      <p><strong>To be added by management:</strong> official session videos, performance titles, dates and authorised media links.</p>
    `,
  },
  {
    slug: 'interviews-and-media',
    path: '/media/interviews-and-media',
    title: 'Interviews & media',
    category: 'Media',
    categorySlug: 'media',
    date: 'Media links pending',
    author: 'Bruno K',
    image: mediaPlaceholder,
    excerpt:
      'A home for approved interviews, behind-the-scenes features and selected social-media highlights.',
    tags: ['Interviews', 'Media'],
    contentHtml: `
      <h2>Bruno K in conversation</h2>
      <p>Approved interviews, behind-the-scenes features and selected social-media content can be featured here. No source links were included in the supplied profile.</p>
      <p><strong>To be added by management:</strong> approved media title, publisher or platform, publication date and official link.</p>
    `,
  },
]

export const blogCategories = Array.from(
  new Map(posts.map(({ category, categorySlug }) => [categorySlug, { label: category, slug: categorySlug }])).values(),
)

export function getPost(slugOrPath: string) {
  return posts.find((post) => post.slug === slugOrPath || post.path === `/${slugOrPath.replace(/^\//, '')}`)
}

export function getPostsByCategory(categorySlug: string) {
  return posts.filter((post) => post.categorySlug === categorySlug)
}
