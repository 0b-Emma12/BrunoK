import type { YouTubeMusicVideo } from '../../data/projects'

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
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`

  return (
    <article className={`youtube-music-card${featured ? ' youtube-music-card-featured' : ''}`}>
      {active ? (
        <div className="youtube-player-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          className="youtube-player-poster"
          onClick={() => onPlay(video.id)}
          aria-label={`Play ${video.title}`}
        >
          <img src={thumbnailUrl} alt="" loading="lazy" />
          <span className="youtube-play-button" aria-hidden="true">
            <i className="fa-solid fa-play" />
          </span>
        </button>
      )}
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
            <p className="youtube-video-date">Video published {video.publishedAt}</p>
          </>
        )}
        <a href={watchUrl} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
        </a>
        {active ? (
          <p className="youtube-embed-fallback">
            If the embedded player is unavailable, use the YouTube link above.
          </p>
        ) : null}
      </div>
    </article>
  )
}
