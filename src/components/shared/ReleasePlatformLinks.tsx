import type { Project, StreamingPlatform } from '../../data/projects'
import { assetUrl } from '../../utils/assets'
import { parseYouTubeVideoUrl } from '../../utils/youtube'
import { YouTubeVideoEmbed } from './YouTubeVideoEmbed'

const platforms: {
  key: StreamingPlatform
  label: string
  icon: string
}[] = [
  { key: 'spotify', label: 'Listen on Spotify', icon: 'fa-brands fa-spotify' },
  { key: 'appleMusic', label: 'Listen on Apple Music', icon: 'fa-brands fa-apple' },
  { key: 'youtubeMusic', label: 'Listen on YouTube Music', icon: 'fa-brands fa-youtube' },
  { key: 'youtube', label: 'Watch on YouTube', icon: 'fa-brands fa-youtube' },
  { key: 'audiomack', label: 'Listen on Audiomack', icon: 'fa-solid fa-wave-square' },
  { key: 'shazam', label: 'Open on Shazam', icon: 'fa-brands fa-shazam' },
  { key: 'deezer', label: 'Listen on Deezer', icon: 'fa-solid fa-music' },
  { key: 'mdundo', label: 'Play on Mdundo', icon: 'fa-solid fa-music' },
]

type ReleasePlatformLinksProps = {
  project: Project
  hideYouTube?: boolean
}

export function ReleasePlatformLinks({ project, hideYouTube = false }: ReleasePlatformLinksProps) {
  const availablePlatforms = platforms.flatMap((platform) => {
    if (hideYouTube && platform.key === 'youtube') return []
    const href = project.streamingLinks?.[platform.key]
    return href ? [{ ...platform, href }] : []
  })

  if (!availablePlatforms.length) return null

  return (
    <ul className="release-platform-actions" aria-label={`${project.title} listening options`}>
      {availablePlatforms.map((platform) => {
        const isYouTubeVideo = Boolean(parseYouTubeVideoUrl(platform.href))

        return (
          <li
            key={platform.key}
            className={isYouTubeVideo ? 'release-platform-video' : undefined}
          >
            {isYouTubeVideo ? (
              <YouTubeVideoEmbed
                url={platform.href}
                title={`${project.title} — ${platform.label}`}
              />
            ) : (
              <a
                className={`release-platform-link release-platform-link-${platform.key}`}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform.label}: ${project.title}`}
              >
                {platform.key === 'mdundo' ? (
                  <img
                    className="release-platform-mdundo-logo"
                    src={assetUrl('/assets/mdundo-full-logo.png')}
                    alt=""
                    aria-hidden="true"
                  />
                ) : (
                  <i className={platform.icon} aria-hidden="true" />
                )}
                <span>{platform.label}</span>
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
