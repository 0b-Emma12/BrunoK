const YOUTUBE_VIDEO_ID = /^[A-Za-z0-9_-]{11}$/

export type YouTubeVideoReference = {
  id: string
  isShort: boolean
}

export function parseYouTubeVideoUrl(value: string): YouTubeVideoReference | null {
  let url: URL

  try {
    url = new URL(value)
  } catch {
    return null
  }

  const hostname = url.hostname.toLowerCase().replace(/^www\./, '')
  if (
    hostname !== 'youtu.be' &&
    hostname !== 'youtube.com' &&
    hostname !== 'm.youtube.com' &&
    hostname !== 'music.youtube.com' &&
    hostname !== 'youtube-nocookie.com'
  ) {
    return null
  }

  const pathParts = url.pathname.split('/').filter(Boolean)
  const isShort = pathParts[0] === 'shorts'
  let id: string | null = null

  if (hostname === 'youtu.be') {
    id = pathParts[0] ?? null
  } else if (url.pathname === '/watch') {
    id = url.searchParams.get('v')
  } else if (['embed', 'shorts', 'v', 'live'].includes(pathParts[0] ?? '')) {
    id = pathParts[1] ?? null
  }

  return id && YOUTUBE_VIDEO_ID.test(id) ? { id, isShort } : null
}
