import { getPost, posts } from './posts'
import { getProject } from './projects'
import { getService } from './services'

const pageLabels: Record<string, string> = {
  '/': 'Home',
  '/home-2': 'Biography',
  '/gallery': 'Gallery',
  '/portfolio': 'Music',
  '/portfolio-6': 'Music',
  '/portfolio-2-2': 'Music',
  '/portfolio-3-2': 'Music',
  '/services-6': 'Bookings',
  '/team': 'Biography',
  '/blog': 'Media',
  '/contact': 'Contact',
  '/privacy-policy': 'Privacy Policy',
  '/terms-and-conditions': 'Terms & Conditions',
  '/404': '404',
}

function getArchivePost(pathname: string) {
  return posts.find(
    (item) =>
      item.path === pathname ||
      item.path.replace(/^\//, '') === pathname.replace(/^\//, '') ||
      item.slug === pathname.split('/').filter(Boolean).pop()
  )
}

export function getPageLabel(pathname: string) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (pageLabels[clean]) return pageLabels[clean]

  if (clean.startsWith('/services/item/')) {
    const slug = clean.split('/').pop() ?? ''
    return getService(slug)?.title ?? 'Service'
  }
  if (clean.startsWith('/services/')) {
    const slug = clean.split('/').pop() ?? ''
    return getService(slug)?.title ?? 'Service'
  }
  if (clean.startsWith('/portfolio/item/')) {
    const slug = clean.split('/').pop() ?? ''
    return getProject(slug)?.title ?? 'Project'
  }
  if (clean.startsWith('/category/')) {
    const category = decodeURIComponent(clean.split('/').pop() ?? '')
    return category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Category'
  }

  if (getPost(clean) || getArchivePost(clean)) return 'Media'

  return '404'
}

export function getDocumentTitle(pathname: string) {
  if (pathname === '/') return 'Bruno K | Ugandan Soul. African Rhythm. Global Sound.'

  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const post = getPost(clean) ?? getArchivePost(clean)
  if (post) return `${post.title} | Bruno K`

  return `${getPageLabel(pathname)} | Bruno K`
}
