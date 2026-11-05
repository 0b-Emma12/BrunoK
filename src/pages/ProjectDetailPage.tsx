import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowIcon, ZoomIcon } from '../components/shared/Icons'
import { InnerBanner } from '../components/shared/InnerBanner'
import { YouTubeMusicCard } from '../components/shared/YouTubeMusicCard'
import { getProject, getProjectNeighbours } from '../data/projects'
import { NotFoundPage } from './NotFoundPage'

export function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const youtubeSearchUrl = `https://www.youtube.com/channel/UCCfCMenaX4vCLpcpYLOSBnA/search?query=${encodeURIComponent(project?.title ?? '')}`

  useEffect(() => {
    if (!activeImage) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [activeImage])

  if (!project) return <NotFoundPage compact />

  const { previous, next } = getProjectNeighbours(project.slug)

  return (
    <div className="project-detail">
      <InnerBanner
        title={project.title}
        eyebrow={project.category}
        crumbs={[{ label: 'Music', href: '/portfolio-6' }, { label: project.title }]}
        dark
      >
        <p className="mil-muted mil-up project-intro">{project.intro}</p>
      </InnerBanner>

      <section className="mil-p-120-60" id="project">
        <div className="container">
          {!['faridah', 'one-for-the-road'].includes(project.slug) ? (
            <div className="mil-image-frame mil-fw mil-up project-hero-image">
              <img
                src={project.cover}
                alt={`Placeholder artwork — replace with approved Bruno K artwork for ${project.title}`}
              />
            </div>
          ) : null}
          <ul className="mil-info project-info mil-up">
            <li>
              <span className="mil-dark-soft">Release type</span>
              <strong>{project.category}</strong>
            </li>
            <li>
              <span className="mil-dark-soft">Release date</span>
              <strong>{project.date}</strong>
            </li>
            <li>
              <span className="mil-dark-soft">Artist credit</span>
              <strong>{project.client}</strong>
            </li>
            <li>
              <span className="mil-dark-soft">Artist</span>
              <strong>{project.author}</strong>
            </li>
          </ul>
          {project.metadataNote ? (
            <p className="music-catalogue-footnote" role="note">{project.metadataNote}</p>
          ) : null}
        </div>
      </section>

      {project.youtubeVideos?.length ? (
        <section className="mil-soft-bg mil-p-120-90">
          <div className="container">
            <div className="mil-suptitle mil-suptitle-dark">Watch &amp; listen</div>
            <h2 className="mil-mb-40">Official Bruno K video</h2>
            <div className="youtube-detail-grid">
              {project.youtubeVideos.map((video) => (
                <YouTubeMusicCard
                  key={video.id}
                  video={video}
                  songTitle={project.title}
                  artistCredit={video.artistCredit ?? (project.client === 'Not applicable' ? project.author : `${project.author} · ${project.client}`)}
                  releaseYear={project.releaseYear}
                  releaseMetadata={
                    project.slug === 'faridah'
                      ? {
                          releaseType: project.category,
                          releaseDate: project.date,
                          artistCredit: project.client,
                          artist: project.author,
                        }
                      : undefined
                  }
                  active={activeVideoId === video.id}
                  onPlay={setActiveVideoId}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="mil-soft-bg mil-p-120-90">
          <div className="container">
            <div className="mil-suptitle mil-suptitle-dark">Bruno K on YouTube</div>
            <h2 className="mil-mb-20">Looking for this release?</h2>
            <p className="mil-dark-soft">
              Search Bruno K’s official YouTube channel for videos of {project.title}.
            </p>
            <a
              href={youtubeSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mil-button mil-arrow-place"
            >
              Search official channel
            </a>
          </div>
        </section>
      )}

      <section className="mil-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="mil-up mil-mb-40">
                About the <span className="mil-thin">release.</span>
              </h2>
              {project.description.map((paragraph) => (
                <p className="mil-up mil-mb-30" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.gallery.length ? (
        <section className="mil-soft-bg mil-p-120-90 project-gallery-section">
          <div className="container">
            <div className="mil-suptitle mil-suptitle-dark mil-up">Gallery</div>
            <div className="project-gallery">
              {project.gallery.map((image, index) => (
                <button
                  type="button"
                  className={`mil-image-frame mil-up ${index % 3 === 0 ? 'mil-fw' : index % 2 === 0 ? 'mil-square' : 'mil-horizontal'}`}
                  key={image}
                  onClick={() => setActiveImage(image)}
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Placeholder image — add approved Bruno K gallery photography for ${project.title}`}
                    loading="lazy"
                  />
                  <span className="mil-zoom-btn">
                    <ZoomIcon />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mil-p-90-90">
        <div className="container">
          <div className="works-nav">
            <Link to={`/portfolio/item/${previous.slug}`} className="mil-link mil-dark mil-arrow-place works-prev">
              <ArrowIcon />
              <span>{previous.title}</span>
            </Link>
            <Link to={`/portfolio/item/${next.slug}`} className="mil-link mil-dark mil-arrow-place">
              <span>{next.title}</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image preview">
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
          <button type="button" className="lightbox-backdrop" onClick={() => setActiveImage(null)} aria-label="Close image preview" />
          <img src={activeImage} alt={project.title} />
        </div>
      ) : null}
    </div>
  )
}
