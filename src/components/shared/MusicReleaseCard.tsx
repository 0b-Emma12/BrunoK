import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { ReleaseArtwork } from './ReleaseArtwork'
import { ReleasePlatformLinks } from './ReleasePlatformLinks'
import { YouTubeVideoEmbed } from './YouTubeVideoEmbed'

const releaseTypeLabels = {
  single: 'Single',
  album: 'Album',
  ep: 'EP',
  collaboration: 'Collaboration',
  session: 'Acoustic session',
} as const

type MusicReleaseCardProps = {
  project: Project
  featured?: boolean
}

function getReleaseDate(project: Project) {
  if (project.releaseDate) {
    return new Intl.DateTimeFormat('en', {
      dateStyle: 'long',
      timeZone: 'UTC',
    }).format(new Date(project.releaseDate))
  }
  return project.releaseYear ? String(project.releaseYear) : 'Release date not confirmed'
}

export function MusicReleaseCard({ project, featured = false }: MusicReleaseCardProps) {
  const artworkVideo = project.cover ? undefined : project.youtubeVideos?.[0]

  return (
    <article className={`music-release-card${featured ? ' music-release-card-featured' : ''}`}>
      {artworkVideo ? (
        <div className="music-release-card-artwork music-release-card-artwork-video">
          <YouTubeVideoEmbed
            url={`https://www.youtube.com/watch?v=${artworkVideo.id}`}
            title={artworkVideo.title}
          />
        </div>
      ) : (
        <Link
          className="music-release-card-artwork"
          to={`/portfolio/item/${project.slug}`}
          aria-label={`View ${project.title} release details`}
        >
          <ReleaseArtwork
            title={project.title}
            releaseType={project.releaseType}
            src={project.cover}
          />
        </Link>
      )}
      <div className="music-release-card-content">
        <div className="music-release-card-heading">
          <div className="music-release-card-type">{releaseTypeLabels[project.releaseType]}</div>
          <h3>{project.title}</h3>
          <p className="music-release-card-artists">{project.artistCredit}</p>
        </div>
        <dl className="music-release-card-meta">
          <div>
            <dt>Release date</dt>
            <dd>{getReleaseDate(project)}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{project.category}</dd>
          </div>
        </dl>
        {project.metadataNote ? (
          <p className="music-release-card-note">{project.metadataNote}</p>
        ) : null}
        {project.streamingLinks ? (
          <ReleasePlatformLinks project={project} hideYouTube={Boolean(artworkVideo)} />
        ) : (
          <p className="music-release-unavailable">
            No verified release listening links are available yet.
          </p>
        )}
      </div>
    </article>
  )
}
