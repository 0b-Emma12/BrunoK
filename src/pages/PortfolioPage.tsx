import { useMemo, useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { InnerBanner } from '../components/shared/InnerBanner'
import { PortfolioCard } from '../components/shared/PortfolioCard'
import { ArrowIcon } from '../components/shared/Icons'
import { musicSources, projects } from '../data/projects'
import { YouTubeMusicCard } from '../components/shared/YouTubeMusicCard'

type PortfolioVariant = 'grid' | 'wide' | 'carousel'

type PortfolioPageProps = {
  variant?: PortfolioVariant
}

const variants: Record<PortfolioVariant, { title: string; eyebrow: string; intro: string }> = {
  grid: {
    title: 'Music & discography',
    eyebrow: 'Bruno K',
    intro:
    'Explore Bruno K’s solo singles, collaborations, gospel projects and acoustic sessions, with verified official-channel videos to watch here.',
  },
  wide: {
    title: 'The music catalogue',
    eyebrow: 'Discography',
    intro:
    'Browse Bruno K’s releases and collaborations, and watch verified official-channel videos directly here.',
  },
  carousel: {
    title: 'Featured releases',
    eyebrow: 'Music',
    intro:
      'A selection from Bruno K’s catalogue, including the 2015 breakthrough single Where You Been At.',
  },
}

export function PortfolioPage({ variant = 'grid' }: PortfolioPageProps) {
  const meta = variants[variant]
  const [category, setCategory] = useState('All music')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('latest')
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLocaleLowerCase()
    const results = projects.filter((project) => {
      const matchesCategory =
        category === 'All music' || project.tags.includes(category)
      const matchesQuery =
        !query ||
        `${project.title} ${project.client} ${project.author} ${project.category}`
          .toLocaleLowerCase()
          .includes(query)
      return matchesCategory && matchesQuery
    })

    return results.sort((first, second) => {
      if (sort === 'alphabetical') return first.title.localeCompare(second.title)
      const firstYear = first.releaseYear ?? (sort === 'latest' ? 0 : Number.MAX_SAFE_INTEGER)
      const secondYear = second.releaseYear ?? (sort === 'latest' ? 0 : Number.MAX_SAFE_INTEGER)
      return sort === 'latest' ? secondYear - firstYear : firstYear - secondYear
    })
  }, [category, search, sort])
  const categories = [
    { value: 'All music', label: 'All music' },
    { value: 'Major hits', label: 'Major hits' },
    { value: 'Singles', label: 'Singles' },
    { value: 'Collaboration', label: 'Collaborations' },
    { value: 'Gospel & inspirational', label: 'Gospel & inspirational' },
    { value: 'Acoustic sessions', label: 'Acoustic sessions' },
    { value: 'Featured appearances', label: 'Featured appearances' },
  ]
  const featuredRelease = projects.find((project) => project.slug === 'milele')
  const featuredVideo = featuredRelease?.youtubeVideos?.[0]
  const catalogueVideos = filteredProjects.flatMap((project) =>
    (project.youtubeVideos ?? [])
      .filter((video) => video.id !== featuredVideo?.id)
      .map((video) => ({ project, video })),
  )

  return (
    <div className={`portfolio-page portfolio-${variant}`}>
      <InnerBanner
        title={meta.title}
        eyebrow={meta.eyebrow}
        crumbs={[{ label: 'Portfolio' }]}
        centered={variant === 'wide'}
      >
        <p className="portfolio-banner-intro mil-up">{meta.intro}</p>
      </InnerBanner>

      {variant === 'carousel' ? (
        <section className="mil-p-120-90">
          <div className="container">
            <Swiper
              modules={[Autoplay, Navigation]}
              className="portfolio-carousel"
              spaceBetween={30}
              slidesPerView={1}
              loop
              speed={800}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: '.portfolio-prev',
                nextEl: '.portfolio-next',
              }}
              breakpoints={{
                768: { slidesPerView: 1.35 },
                1200: { slidesPerView: 1.7 },
              }}
            >
              {projects.slice(0, 6).map((project) => (
                <SwiperSlide key={project.slug}>
                  <PortfolioCard project={project} className="mil-slider-item" cta="Explore release" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="portfolio-controls">
              <button type="button" className="portfolio-prev mil-link mil-dark mil-arrow-place" aria-label="Previous project">
                <ArrowIcon />
              </button>
              <button type="button" className="portfolio-next mil-link mil-dark mil-arrow-place" aria-label="Next project">
                <ArrowIcon />
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="mil-p-120-90">
          <div className="container">
            <section className="music-discovery" aria-label="Official Bruno K music destinations">
              <div>
                <div className="mil-suptitle mil-suptitle-dark">Listen &amp; discover</div>
                <h2 className="mil-mb-20">THE MUSIC OF BRUNO K</h2>
                <p className="mil-dark-soft">
                  From breakthrough Afro-pop hits to soulful acoustic sessions and powerful collaborations,
                  explore the music that defines Bruno K’s journey.
                </p>
              </div>
              <ul className="music-source-links">
                {musicSources.map((source) => (
                  <li key={source.label}>
                    <a href={source.href} target="_blank" rel="noopener noreferrer">
                      <i className={`fa-brands ${source.icon}`} aria-hidden="true" />
                      <span>{source.action}</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="music-metadata-note">
                Video embeds below are matched to uploads on Bruno K’s official YouTube channel. Video upload dates are
                not presented as song release dates.
              </p>
            </section>
            {featuredRelease && featuredVideo ? (
              <section className="featured-youtube-section" aria-label="Featured Bruno K video">
                <div className="mil-suptitle mil-suptitle-dark">FEATURED VIDEO — BRUNO K</div>
                <h2>Experience the music, performances and collaborations of Bruno K.</h2>
                <YouTubeMusicCard
                  video={featuredVideo}
                  songTitle={featuredRelease.title}
                  artistCredit={featuredRelease.client === 'Not applicable' ? 'Bruno K' : `${featuredRelease.author} · ${featuredRelease.client}`}
                  releaseYear={featuredRelease.releaseYear}
                  active={activeVideoId === featuredVideo.id}
                  onPlay={setActiveVideoId}
                  featured
                />
              </section>
            ) : null}
            <div className="portfolio-meta mil-up">
              <span>{String(filteredProjects.length).padStart(2, '0')} releases</span>
              <span>Singles · Collaborations · Gospel · Acoustic</span>
            </div>
            <div className="music-catalogue-controls" aria-label="Catalogue controls">
              <label className="music-search">
                <span>Search music</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Song or collaborating artist"
                />
              </label>
              <label className="music-sort">
                <span>Sort by</span>
                <select value={sort} onChange={(event) => setSort(event.target.value)}>
                  <option value="latest">Latest releases</option>
                  <option value="oldest">Oldest releases</option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="popular" disabled>
                    Popular tracks (not verified)
                  </option>
                </select>
              </label>
            </div>
            <div className="music-category-filters" aria-label="Filter music by category">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item.value}
                  className={category === item.value ? 'active' : ''}
                  aria-pressed={category === item.value}
                  onClick={() => setCategory(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <section className="music-video-library" aria-labelledby="music-video-heading">
              <div className="music-video-library-heading">
                <div>
                  <div className="mil-suptitle mil-suptitle-dark">Official channel videos</div>
                  <h2 id="music-video-heading">Music &amp; discography</h2>
                </div>
                <a
                  href="https://www.youtube.com/channel/UCCfCMenaX4vCLpcpYLOSBnA/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mil-link mil-dark"
                >
                  Explore official YouTube channel
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              </div>
              {catalogueVideos.length ? (
                <div className="youtube-music-grid">
                  {catalogueVideos.map(({ project, video }) => (
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
              ) : (
                <p className="music-no-results" role="status">
                  No verified official-channel videos match this selection yet.
                </p>
              )}
            </section>
            <div className={variant === 'wide' ? 'portfolio-list' : 'row'}>
              {filteredProjects.map((project, index) =>
                variant === 'wide' ? (
                  <PortfolioCard
                    key={project.slug}
                    project={project}
                    horizontal
                    className={index % 2 === 1 ? 'mil-portfolio-reverse' : ''}
                    cta="Explore release"
                  />
                ) : (
                  <div className="col-md-6 col-lg-4" key={project.slug}>
                    <PortfolioCard project={project} vertical cta="Explore release" />
                  </div>
                ),
              )}
            </div>
            {filteredProjects.length === 0 ? (
              <p className="music-no-results" role="status">No releases match your search.</p>
            ) : null}
            <p className="music-catalogue-footnote">
              Some release dates and spellings require confirmation. Unverified discovery candidates are not
              presented as confirmed solo releases.
            </p>
            <div className="portfolio-footer-cta mil-up">
              <h3>
                Looking for a Bruno K <span className="mil-thin">performance?</span>
              </h3>
              <Link to="/services-6" className="mil-button mil-arrow-place">
                <span>Booking enquiries</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
