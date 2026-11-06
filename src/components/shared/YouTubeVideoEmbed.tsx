import { useState } from 'react'
import { parseYouTubeVideoUrl } from '../../utils/youtube'

type YouTubeVideoEmbedProps = {
  url: string
  title: string
  active?: boolean
  onPlay?: () => void
}

export function YouTubeVideoEmbed({ url, title, active, onPlay }: YouTubeVideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const video = parseYouTubeVideoUrl(url)

  if (!video) return null

  const playing = active ?? isPlaying
  const startPlayback = () => {
    if (onPlay) {
      onPlay()
    } else {
      setIsPlaying(true)
    }
  }

  return (
    <div className={`youtube-inline-embed${video.isShort ? ' youtube-inline-embed-short' : ''}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={startPlayback} aria-label={`Play ${title}`}>
          <img
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
          />
          <span className="youtube-play-button" aria-hidden="true">
            <i className="fa-solid fa-play" />
          </span>
        </button>
      )}
    </div>
  )
}
