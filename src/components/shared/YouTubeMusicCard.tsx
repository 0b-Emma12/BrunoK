import type { YouTubeMusicVideo } from '../../data/projects'
import { YouTubeVideoEmbed } from './YouTubeVideoEmbed'

type YouTubeMusicCardProps = {
  video: YouTubeMusicVideo
  songTitle: string
  artistCredit: string
  releaseYear?: number
  releaseMetadata?: {
    releaseType: string
    releaseDate: string
    artistCredit: string
    artist: string
  }
  active: boolean
  onPlay: (id: string) => void
  featured?: boolean
}

export function YouTubeMusicCard({
  video,
  songTitle,
  artistCredit,
  releaseYear,
  releaseMetadata,
  active,
  onPlay,
  featured = false,
}: YouTubeMusicCardProps) {
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <article className={`youtube-music-card${featured ? ' youtube-music-card-featured' : ''}`}>
      <YouTubeVideoEmbed
        url={watchUrl}
        title={video.title}
        active={active}
        onPlay={() => onPlay(video.id)}
      />
      <div className="youtube-music-card-copy">
        {releaseMetadata ? (
          <dl className="youtube-release-metadata">
            <div>
              <dt>Release type</dt>
              <dd>{releaseMetadata.releaseType}</dd>
            </div>
            <div>
              <dt>Release date</dt>
              <dd>{releaseMetadata.releaseDate}</dd>
            </div>
            <div>
              <dt>Artist credit</dt>
              <dd>{releaseMetadata.artistCredit}</dd>
            </div>
            <div>
              <dt>Artist</dt>
              <dd>{releaseMetadata.artist}</dd>
            </div>
          </dl>
        ) : (
          <>
            <div className="mil-label mil-upper mil-dark-soft">{video.kind}</div>
            <h3>{songTitle}</h3>
            <p>{artistCredit}</p>
            {releaseYear ? <p>Release year: {releaseYear}</p> : null}
            {video.publishedAt ? (
              <p className="youtube-video-date">Video published {video.publishedAt}</p>
            ) : null}
          </>
        )}
      </div>
    </article>
  )
}
