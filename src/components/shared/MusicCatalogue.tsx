import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { musicSources, projects } from '../../data/projects'
import { InnerBanner } from './InnerBanner'
import { MusicReleaseCard } from './MusicReleaseCard'
import { YouTubeMusicCard } from './YouTubeMusicCard'

const filters = [
  { value: 'all', label: 'All releases' },
  { value: 'single', label: 'Singles' },
  { value: 'album', label: 'Albums' },
  { value: 'ep', label: 'EPs' },
  { value: 'collaboration', label: 'Collaborations' },
  { value: 'Gospel & inspirational', label: 'Gospel & inspirational' },
  { value: 'Acoustic sessions', label: 'Acoustic sessions' },
  { value: 'Major hits', label: 'Major hits' },
  { value: 'Featured appearances', label: 'Featured appearances' },
]

function releaseDateKey(release: (typeof projects)[number]) {
  return release.releaseDate ?? (release.releaseYear ? `${release.releaseYear}-01-01` : undefined)
}

function matchesCategory(release: (typeof projects)[number], category: string) {
  if (category === 'all') return true
  if (['single', 'album', 'ep', 'collaboration'].includes(category)) {
    return release.releaseType === category
  }
  return release.category === category || release.tags.includes(category)
}

export function MusicCatalogue() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'newest' | 'oldest' | 'alphabetical'>('newest')
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const searchTerm = search.trim().toLocaleLowerCase()

  const filteredProjects = useMemo(() => {
    const results = projects.filter((release) => {
      const matchesSearch =
        !searchTerm ||
        `${release.title} ${release.featuredArtists.join(' ')} ${release.artistCredit} ${release.category}`
          .toLocaleLowerCase()
          .includes(searchTerm)
      return matchesSearch && matchesCategory(release, category)
    })

    return results.sort((first, second) => {
      if (sort === 'alphabetical') return first.title.localeCompare(second.title)
      const firstDate = releaseDateKey(first)
      const secondDate = releaseDateKey(second)
      if (!firstDate && !secondDate) return first.title.localeCompare(second.title)
      if (!firstDate) return 1
      if (!secondDate) return -1
      const order = firstDate.localeCompare(secondDate)
      return sort === 'newest' ? -order : order
    })
  }, [category, searchTerm, sort])

  const latestSingles = useMemo(
    () => {
      const datedSingles = projects.filter(
        (release) => release.releaseType === 'single' && release.releaseDate,
      )
      return datedSingles
        .sort((first, second) => {
          const firstDate = first.releaseDate ?? ''
          const secondDate = second.releaseDate ?? ''
          return secondDate.localeCompare(firstDate)
        })
        .slice(0, 3)
    },
    [],
  )

  const featuredRelease = projects.find((release) => release.id === 'milele')
  const catalogueVideos = filteredProjects.flatMap((release) =>
    (release.youtubeVideos ?? []).map((video) => ({ release, video })),
  )
  const collaborationCount = projects.filter((release) => release.releaseType === 'collaboration').length
  const filtersChanged = Boolean(search || category !== 'all' || sort !== 'newest')

  const browseCollaborations = () => {
    setCategory('collaboration')
    document.getElementById('music-catalogue')?.scrollIntoView({ behavior: 'auto' })
  }

  const resetFilters = () => {
    setCategory('all')
    setSearch('')
    setSort('newest')
  }

  return (
    <div className="portfolio-page portfolio-grid music-catalogue-page">
      <InnerBanner
        title="Music & discography"
        eyebrow="Bruno K"
        crumbs={[{ label: 'Music' }]}
      >
        <p className="portfolio-banner-intro mil-up">
          Explore Bruno K’s singles, collaborations, and official-channel videos. Release dates,
          artwork, and listening links are shown only when confirmed.
        </p>
      </InnerBanner>

      <div className="container music-catalogue-content">
        <section className="music-featured-section" aria-labelledby="featured-release-title">
          <div className="music-section-heading">
            <div className="mil-suptitle mil-suptitle-dark">Featured release</div>
            <h2 id="featured-release-title">In the spotlight</h2>
          </div>
          {featuredRelease ? (
            <>
              <MusicReleaseCard project={featuredRelease} featured />
              <p className="music-data-note">
                The official-channel upload is available below. Its upload date is not treated as a
                confirmed release date.
              </p>
            </>
          ) : (
            <p className="music-empty-state">A featured release will appear here when confirmed.</p>
          )}
        </section>

        <section className="music-latest-section" aria-labelledby="latest-singles-title">
          <div className="music-section-heading">
            <div className="mil-suptitle mil-suptitle-dark">Verified release dates</div>
            <h2 id="latest-singles-title">Latest singles</h2>
          </div>
          {latestSingles.length ? (
            <div className="music-release-grid music-release-grid-latest">
              {latestSingles.map((release) => (
                <MusicReleaseCard key={release.id} project={release} />
              ))}
            </div>
          ) : (
            <p className="music-empty-state">
              No single has a confirmed full release date yet. Dates will be added when verified.
            </p>
          )}
          <p className="music-data-note">
            Only singles with a confirmed full release date are shown here. Releases known by year
            only remain in the full catalogue because their order cannot be verified.
          </p>
        </section>

        <section className="music-format-sections" aria-label="Browse releases by format">
          <article className="music-format-panel">
            <div className="mil-suptitle mil-suptitle-dark">Albums &amp; EPs</div>
            <h2>Long-form releases</h2>
            <p>
              No albums or EPs are currently listed in the verified catalogue. This section will
              update when confirmed releases are supplied.
            </p>
          </article>
          <article className="music-format-panel music-format-panel-dark">
            <div className="mil-suptitle">Collaborations</div>
            <h2>Made together</h2>
            <p>
              Browse {collaborationCount} catalogue {collaborationCount === 1 ? 'entry' : 'entries'}
              {' '}credited as collaborations.
            </p>
            <button type="button" className="mil-button mil-arrow-place" onClick={browseCollaborations}>
              <span>Browse collaborations</span>
              <i className="fa-solid fa-arrow-down" aria-hidden="true" />
            </button>
          </article>
        </section>

        <section className="music-complete-catalogue" id="music-catalogue" aria-labelledby="complete-catalogue-title">
          <div className="music-section-heading music-catalogue-heading">
            <div>
              <div className="mil-suptitle mil-suptitle-dark">Browse the collection</div>
              <h2 id="complete-catalogue-title">Complete music catalogue</h2>
            </div>
            <p className="mil-dark-soft">Search by title or featured artist, then filter and sort.</p>
          </div>
          <div className="music-catalogue-controls" aria-label="Catalogue controls">
            <label className="music-search">
              <span>Search releases</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Song title or featured artist"
              />
            </label>
            <label className="music-sort">
              <span>Sort by</span>
              <select
                value={sort}
                onChange={(event) => {
                  const value = event.target.value
                  if (value === 'newest' || value === 'oldest' || value === 'alphabetical') {
                    setSort(value)
                  }
                }}
              >
                <option value="newest">Newest confirmed first</option>
                <option value="oldest">Oldest confirmed first</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </label>
            {filtersChanged ? (
              <button type="button" className="music-reset-button" onClick={resetFilters}>
                Reset filters
              </button>
            ) : null}
          </div>
          <div className="music-category-filters" aria-label="Filter music by category">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={category === filter.value ? 'active' : ''}
                aria-pressed={category === filter.value}
                onClick={() => setCategory(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <p className="music-results-count" role="status" aria-live="polite">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'release' : 'releases'}
            {searchTerm ? ` matching “${search.trim()}”` : ''}
          </p>
          {filteredProjects.length ? (
            <div className="music-release-grid">
              {filteredProjects.map((release) => (
                <MusicReleaseCard key={release.id} project={release} />
              ))}
            </div>
          ) : (
            <div className="music-empty-state" role="status">
              <h3>No matching releases</h3>
              <p>Try a different title, featured artist, or category.</p>
              <button type="button" className="music-reset-button" onClick={resetFilters}>
                Reset search and filters
              </button>
            </div>
          )}
          <p className="music-data-note">
            Unknown dates and unavailable artwork or platform links are intentionally left unfilled
            rather than estimated.
          </p>
        </section>

        <section className="music-video-library" aria-labelledby="music-video-heading">
          <div className="music-video-library-heading">
            <div>
              <div className="mil-suptitle mil-suptitle-dark">Official channel</div>
              <h2 id="music-video-heading">Videos &amp; official audio</h2>
            </div>
            <a
              href="https://www.youtube.com/channel/UCCfCMenaX4vCLpcpYLOSBnA/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="mil-link mil-dark"
            >
              Explore YouTube channel
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </a>
          </div>
          {catalogueVideos.length ? (
            <div className="youtube-music-grid">
              {catalogueVideos.map(({ release, video }) => (
                <YouTubeMusicCard
                  key={video.id}
                  video={video}
                  songTitle={release.title}
                  artistCredit={
                    video.artistCredit ??
                    release.artistCredit
                  }
                  releaseYear={release.releaseYear}
                  active={activeVideoId === video.id}
                  onPlay={setActiveVideoId}
                />
              ))}
            </div>
          ) : (
            <p className="music-empty-state" role="status">
              No verified official-channel videos match these filters.
            </p>
          )}
        </section>

        <section className="music-artist-profiles" aria-labelledby="artist-profiles-title">
          <div>
            <div className="mil-suptitle mil-suptitle-dark">Artist profiles</div>
            <h2 id="artist-profiles-title">More ways to discover Bruno K</h2>
            <p className="mil-dark-soft">
              These are artist-level destinations, not track-specific release links.
            </p>
          </div>
          <ul className="music-source-links">
            {musicSources.map((source) => (
              <li key={source.label}>
                <a
                  className={source.label === 'Spotify' ? 'music-source-link-spotify' : undefined}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fa-brands ${source.icon}`} aria-hidden="true" />
                  <span>{source.action}</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="portfolio-footer-cta mil-up">
          <h3>
            Looking for a Bruno K <span className="mil-thin">performance?</span>
          </h3>
          <Link to="/services-6" className="mil-button mil-arrow-place">
            <span>Booking enquiries</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
